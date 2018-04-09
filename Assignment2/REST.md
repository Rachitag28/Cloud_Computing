# Weather Application using RESTful Web Services
## The application provides specific output to the input data and type of request

## 18.217.106.128/historical/
#### Method type: GET 
#### List of all the dates available in the dataset are provided as output in JSON format:-
#### [{"DATE": 20130101}, {"DATE": 20130102},...]

## 18.217.106.128/historical/20180101
#### Method type: GET
#### The date provided in the path '20180101' is used as an input
#### The date is searched in the dataset for a match
#### if a match is found JSON data is provided as output having date, maximum temperature and minimum temperature:
#### {"DATE": "20180101", "TMAX": 49, "TMIN": 28}

#### if match is not found and HTTP error 404 code is provided as response

## 18.217.106.128/forecast/20180101
#### Method type: GET
#### The date in the path is used as input
#### Day and the Month are extracted from the input date and are used to find matches in the dataset.
#### The minimum and maximum temprature for the day and month in all the years in the dataset are averaged.
#### The average values are then predicted as the forecast for the input date
#### The forecast is provided for the entire week associated with the input date
#### The output is provided in JSON format:
#### [{"DATE": "20180101", "TMAX": 42.13, "TMIN": 24.97}, {"DATE": "20180102", "TMAX": 43.33, "TMIN": 27.05}, {"DATE": "20180103", "TMAX": 44.32, "TMIN": 26.47}, {"DATE": "20180104", "TMAX": 42.92, "TMIN": 19.47}, {"DATE": "20180105", "TMAX": 31.48, "TMIN": 16.82}, {"DATE": "20180106", "TMAX": 27.5, "TMIN": 10.77}, {"DATE": "20180107", "TMAX": 24.52, "TMIN": 6.45}]

## 18.217.106.128/historical/ data='{"DATE":"20180601","TMIN":33,"TMAX":44}',headers = {'Content-type': 'application/json'} )
#### Method type: POST
#### The data is provided by using POST request which is taken as input by the application
#### headers basically defines the type of data, in this case it is JASON
#### This funtionality add the the given data into the dataset and outputs the added date in JSON format and acknowledges the status by sending HTTP 201 response.

## 18.217.106.128/historical/20180601
#### Method type: DELETE
#### The data in the path is taken as input
#### The input date is serached in the dataset
#### If a match is found for the date, entire record of weather information is deleted from the dataset
#### Acknowledgement for the successful deletion is provided by HTTP status code 204
