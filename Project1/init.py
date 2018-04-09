from flask import Flask, json, request, Response, jsonify, render_template
import pandas as pd
import json
from datetime import datetime, date, timedelta
import math

app = Flask(__name__)


data = pd.read_csv("/var/www/flask/daily.csv")
data2 = pd.read_csv("/var/www/flask/daily.csv")
data2['DAY'] = data2['DATE'].astype(str).str[-2:]
data2['MONTH'] = data2['DATE'].astype(str).str[-4:-2]
data2['YEAR'] = data2['DATE'].astype(str).str[:-4]
data2['DAY'] = data2['DAY'].astype(int)
data2['MONTH'] = data2['MONTH'].astype(int)
data2['YEAR'] = data2['YEAR'].astype(int)
li = ['DATE', 'TMAX', 'TMIN']

@app.route("/")
def navigate():
	return render_template('index.html')

@app.route("/historical/", methods=['GET'])
def index():
	list_date = []
	global data
	dates = data['DATE']
	for i in dates:
		d = {}
		d['DATE'] = i
		list_date.append(d)
	return json.dumps(list_date)


@app.route("/historical/" ,methods = ['POST'])
def add_date():
	global data
	if request.headers['Content-Type'] == 'application/json':
		addic = str(request.get_data()) 
 		addic2 = json.loads(addic)
		addic3 = {'DATE': int(addic2["DATE"]), 'TMAX':int(addic2["TMAX"]), 'TMIN': int(addic2["TMIN"])}
		new_date = {'DATE':addic2['DATE']}
		new_data = pd.DataFrame(data = addic3, columns = li, index = [data.shape[0]])
		data = data.append(new_data)
		resp = jsonify(new_date)
		resp.status_code = 201
	return  resp

@app.route("/historical/<date2>", methods = ['DELETE'])
def del_data(date2):
	d = int(date2)
	d2 = {}
	d2['DATE'] = d
	global data
	data = data[data.DATE != d]
	respo = jsonify(d2)
	respo.status_code = 204
	return respo

@app.route("/historical/<date>", methods = ['GET'])
def info(date):
	li2 = []
	b2 = []
	a = int(date)
	global data
	dates = data['DATE']
	for i in dates:
		if i == a:
			b3 = []
			b = data[data['DATE'] == a].values.flatten().tolist()
			b2 = list(map(int, b))
			b3.append(str(b2[0]))
			b3.extend(b2[1:])
			li2 = dict(zip(li,b3))
	if not li2:
		return not_found()
	else:
		return json.dumps(li2)


@app.route("/forecast/<date1>", methods = ['GET'])
def forecast(date1):
	fdate = []
	wdict = {}
	h = str(date1)
	day = h[-2:]
	day = int(day)
	month = h[-4:-2]
	month = int(month)
	year = h[:-4]
	year = int(year)
	Mlist = [1,3,5,7,8,10,12]
	for i in range(7):
		dlist = []
		if month in Mlist:
			if day > 31:
				day = 1
				month = month + 1
		elif month == 2:
			if day > 28:
				day = 1
				month = month + 1
		else:
			if day > 30:
				day = 1
				month = month + 1
		Tmax = data2['TMAX'][(data2['DAY'] == day) & (data2['MONTH'] == month)].mean()
		Tmax = "%0.2f" % Tmax
		Tmax = float(Tmax)
		Tmin = data2['TMIN'][(data2['DAY'] == day) & (data2['MONTH'] == month)].mean()
		Tmin = "%0.2f" % Tmin
		Tmin = float(Tmin)
		d1 = date(year,month,day)
		d1 = d1.strftime("%Y%m%d")
		dlist.append(d1)
		dlist.append(Tmax)
		dlist.append(Tmin)
		day = day + 1
		wdict = dict(zip(li,dlist))
		fdate.append(wdict)
	return json.dumps(fdate)


@app.errorhandler(404)
def not_found(error = None):
	message = { 'status': 404, 'message': 'Not Found' }
	resp = jsonify(message)
	resp.status_code = 404
	return resp

if __name__ == "__main__":
	app.run()