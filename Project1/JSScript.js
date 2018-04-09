$(document).ready(function(){
	$('#submittime').click(function(){
			google.charts.load('current', {'packages':['corechart']});
			var x = document.getElementById("myDate").value;
			var timestamps = [];
			var tmax = [];
			var tmin = [];
			var datelist = [];
			for (i=0; i<7 ; i++){
				var format_date = new Date(x);
				format_date.setDate(format_date.getDate() + 1 + i);
    				var timest = format_date.getTime();
				var day = format_date.getDate();
				var month = format_date.getMonth();
				var year = format_date.getFullYear();
				month = month + 1;
				var newdate = month.toString() + "/" + day.toString() + "/" + year.toString();
				datelist.push(newdate);
				timest = timest.toString();
    				timest = timest.slice(0,-3);
				timestamps.push(timest);				
			}
			if(x != ''){
				for(j=0; j < 7; j++){
					$.ajax({
						url: "https://api.darksky.net/forecast/4dac34e1c26135585c1ef2520b8305a8/39.1015,-84.5125,"+ timestamps[j] +"?exclude=minutely,hourly,flags,alert?units=imperial",
						type: "GET",
						dataType: "jsonp",
						success: function(data){
							tmax.push(data.daily.data[0].temperatureHigh);
							tmin.push(data.daily.data[0].temperatureLow);
							var widget = show(tmax, tmin, datelist);
							$("#show").html(widget);
							$("#error").html(" ");
							google.charts.setOnLoadCallback(drawChart);
							function drawChart() {
        							var data = google.visualization.arrayToDataTable([
										['Date', 'TMAX', 'TMIN'],
										[datelist[0],tmax[0],tmin[0]],
										[datelist[1],tmax[1],tmin[1]],
										[datelist[2],tmax[2],tmin[2]],
										[datelist[3],tmax[3],tmin[3]],
										[datelist[4],tmax[4],tmin[4]],
										[datelist[5],tmax[5],tmin[5]],
										[datelist[6],tmax[6],tmin[6]],
							]);
							var options ={
									title: 'Weather Forecast',
									curveType: 'function',
									legend: {position:'bottom'}
							};
							var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
							chart.draw(data, options);
							}	 
							$("#myDate").val(''); 
						}
					});
				}
			}
			else{
					$("#error").html("<div class='alert alert-danger'><a href='#' class='close' data-dismiss='alert' aria-label='close'> &times;</a> Field can not be empty</div>");
			}	
		});
});

function show(tmax,tmin,datelist){
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
		"<td>" + datelist[0] + "</td>"+
		"<td>" + tmax[0] + "&deg;F</td>"+
		"<td>" + tmin[0] + "&deg;F</td>"+
		"</tr>"+
		"<tr>"+
		"<td>" + datelist[1] + "</td>"+
		"<td>" + tmax[1] + "&deg;F</td>"+
		"<td>" + tmin[1] + "&deg;F</td>"+
		"</tr>"+
		"<tr>"+
		"<td>" + datelist[2] + "</td>"+
		"<td>" + tmax[2] + "&deg;F</td>"+
		"<td>" + tmin[2] + "&deg;F</td>"+
		"</tr>"+
		"<tr>"+
		"<td>" + datelist[3] + "</td>"+
		"<td>" + tmax[3] + "&deg;F</td>"+
		"<td>" + tmin[3] + "&deg;F</td>"+
		"</tr>"+
		"<tr>"+
		"<td>" + datelist[4] + "</td>"+
		"<td>" + tmax[4] + "&deg;F</td>"+
		"<td>" + tmin[4] + "&deg;F</td>"+
		"</tr>"+
		"<tr>"+
		"<td>" + datelist[5] + "</td>"+
		"<td>" + tmax[5] + "&deg;F</td>"+
		"<td>" + tmin[5] + "&deg;F</td>"+
		"</tr>"+
		"<tr>"+
		"<td>" + datelist[6] + "</td>"+
		"<td>" + tmax[6] + "&deg;F</td>"+
		"<td>" + tmin[6] + "&deg;F</td>"+
		"</tr>"+
		"</tbody>"+
		"</table>"
		
}