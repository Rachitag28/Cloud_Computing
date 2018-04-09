# Cloud Project 1 - Docker

## Building docker image

### 1. Created requirements.txt file to list the python packages required to be installed in the docker to run the flask application
#### packages like:-
#### a. Flask
#### b. Pandas
#### c. Numpy
#### and other required packages

### 2. Flask app is created used to prodict weather using given dataset and providing weather forecast from 3rd party API.
#### The host is to run the app is provided as '0.0.0.0.' and not localhost

### 3. Docker file is created, used to build the docker image. The file will install all the requirements inside the docker and execute the python(flask) application.

### 4. "docker built -t" command is used to build the docker image

## Running the docker image

### 1. Pull the docker image from docker hub by executing the comand "docker pull aggarwrt/cloudproject1:latest"
### 2. To run the docker image use the comand "docker run -d -p 8081:80 --name weatherapp aggawrt/cloudproject1:latest"
### 3. The app docker image will be up and running
### 4. To run the flask application running inside the docker image enter "0.0.0.0:8081" inside your browser and the application will execute.

## About the application
### The application provides two major features:-
### 1. It predicts the weather for next 7 days using a given data set. It uses Javascript, Aajax, HTML and Bootstrap for execution.
### 2. It provides weather forecast by requesting data from a 3rd party API for the next 7 days. It uses JQuery, Aajax, HTML and Bootstrap for execution.
