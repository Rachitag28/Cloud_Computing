function weatherinfo() {
	google.charts.load('current', {'packages':['corechart']});
	var date = document.getElementById("mydate2").value;
	if(date != ""){
		var day2 = date.slice(8,10);
		var month2 = date.slice(5,7);
		var year2 = date.slice(0,4);
		var newdate2 = year2 + month2 + day2;
		document.getElementById("error2").innerHTML = "<h1></h1>";
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var x = JSON.parse(xhttp.responseText);
			document.getElementById("show2").innerHTML = test(x);
			document.getElementById("mydate2").value = "";
			
    			}
  		};
  		xhttp.open("GET", "http://18.221.165.2/weather/forecast/" + newdate2, true);
  		xhttp.send();
	}
	else{
		document.getElementById("error2").innerHTML = printerror();
	}
}

function test(x){
	var datelist2 = [];
	var tmax2 = [];
	var tmin2 = [];
	for(i=0; i < x.length; i++){
		var y = x[i];
		datelist2.push(y["DATE"]);
		tmax2.push(y["TMAX"]);
		tmin2.push(y["TMIN"]);
	}
	google.charts.setOnLoadCallback(drawChart);
			function drawChart() {
					var data = google.visualization.arrayToDataTable([
						['Date', 'TMAX', 'TMIN'],
						[datelist2[0],tmax2[0],tmin2[0]],
						[datelist2[1],tmax2[1],tmin2[1]],
						[datelist2[2],tmax2[2],tmin2[2]],
						[datelist2[3],tmax2[3],tmin2[3]],
						[datelist2[4],tmax2[4],tmin2[4]],
						[datelist2[5],tmax2[5],tmin2[5]],
						[datelist2[6],tmax2[6],tmin2[6]],

					]);
					var options = {
          				title: 'Weather Information',
          				curveType: 'function',
          				legend: { position: 'bottom' }
        			};
				var chart = new google.visualization.LineChart(document.getElementById('curve_chart2'));
				chart.draw(data, options);
      			}
	return "<h2>Cincinnati Weather forecast for the following week</h2>"+
		"<table class='table table-border' style='text-align:left;'>" +
		"<thead>"+
		"<tr>"+
	       "<th>List of Dates </th>"+
	       "<th>Maximum Temperature</th>"+
	       "<th>Minimum Temperature</th>"+
	       "</tr>"+
	       "</thead>"+
	       "<tbody>"+
		"<tr>"+
		"<td>" + datelist2[0] + "</td>"+
		"<td>" + tmax2[0] + "&deg;F</td>"+
		"<td>" + tmin2[0] + "&deg;F</td>"+
		"</tr>"+
		"<tr>"+
		"<td>" + datelist2[1] + "</td>"+
		"<td>" + tmax2[1] + "&deg;F</td>"+
		"<td>" + tmin2[1] + "&deg;F</td>"+
		"</tr>"+
		"<tr>"+
		"<td>" + datelist2[2] + "</td>"+
		"<td>" + tmax2[2] + "&deg;F</td>"+
		"<td>" + tmin2[2] + "&deg;F</td>"+
		"</tr>"+
		"<tr>"+
		"<td>" + datelist2[3] + "</td>"+
		"<td>" + tmax2[3] + "&deg;F</td>"+
		"<td>" + tmin2[3] + "&deg;F</td>"+
		"</tr>"+
		"<tr>"+
		"<td>" + datelist2[4] + "</td>"+
		"<td>" + tmax2[4] + "&deg;F</td>"+
		"<td>" + tmin2[4] + "&deg;F</td>"+
		"</tr>"+
		"<tr>"+
		"<td>" + datelist2[5] + "</td>"+
		"<td>" + tmax2[5] + "&deg;F</td>"+
		"<td>" + tmin2[5] + "&deg;F</td>"+
		"</tr>"+
		"<tr>"+
		"<td>" + datelist2[6] + "</td>"+
		"<td>" + tmax2[6] + "&deg;F</td>"+
		"<td>" + tmin2[6] + "&deg;F</td>"+
		"</tr>"+
		"</tbody>"
		"</table>"
	
}

function printerror(){
	return "<div class='alert alert-danger'><a href='#' class='close' data-dismiss='alert' aria-label='close'> &times;</a> Field can not be empty</div>"
}