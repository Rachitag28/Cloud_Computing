# CloudAssignment3

## HTML UI
### The UI was desgined using HTML and Bootstrap.
### On entering the address of the web application you will be redirected to the home page.
### The home page lists the core features of the application
### On home page click on "Weather Forecast" to view the weather prediciton computed by using an existing dataset
#### This prediciton is displayed using the application developed for HW2.
### Next option is "API Forecast" which displays the weather forcast using a 3rd Party API.
#### API used for this functionality is "Dark Sky API"

## Weather Forecast
#### Select a date and click on "search date" to retrieve the weather predictions
#### Clicking on "search date" will send a GET request to the flask application.
#### In response JSON data is returned having all the required information
#### To parse the JSON data javascript was used and the individual date, tmax and tmin are send to a HTML table for display.
#### Ajax is used to display the response without reloading the page.
#### The forecast is displayed in the table format as well as a plot is created displaying the TMAX and TMIN for the next 5 days.

## API Forecast
#### Select a date and click on "search date" to retrieve the weather predictions
#### Clicking on "search date" will send a GET request to DARK SKY API to fetch the data.
#### In response JSON data is returned having all the required information
#### To parse the data jQuery was used and the individual date, tmax and tmin are send to a HTML table for display.
#### Ajax is used to display the response without reloading the page.
#### The forecast is displayed in the table format as well as a plot is created displaying the TMAX and TMIN for the next 5 days.

#### Note: If the plot is not visible please try to clear your cache and reload the code.
