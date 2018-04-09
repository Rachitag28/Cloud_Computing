# Building the Application

1. Created an instance on amazon EC2 using Ubuntu Linux
2. Installed Pip using "sudo apt-get install python-pip"- used for managing depedencies 
3. Installing apache2 using "sudo apt-get install apache2"
4. Created a virtual environment with help of "virtualenv" to isolate depedencies to prevent library version conflicts
5. Created a flask.conf file in the directory /etc/apache2/sites-available
6. Virtual host was created to collect all the requests on the server and redirect them to wsgi file
7. Installed mod-wsgi file using "sudo apt-get install libapache2-mod-wsgi"
8. Made new directory called flask in /var/www/ and subdirectories called templates and static
9. Developed a python app importing flask library and containing the script for the web application.
10. Installed flask library using python-pip using comand "sudo pip install flask"
11. Created a wsgi called flask.wsgi file in /var/www/flask to allow communication between python file and apache server.
12. "a2ensite flask.conf" was used to activate new configuration
13. "a2dissite 000-default.conf" was used to disable the defaulf configuration
14. The application files called "index.html" and "home.html" were stored in the templates directory, same directoy having the python script file.
15. Activated the virtual host on apache server to run the application on cloud instance

# Extra Credit

For extra credit I have setup Python with wsgi server and host behind apache server on port 80.

# Running the Application

To open the home page you need to search for 18.219.59.80/ on you browser which will direct you to the home page of the application. The application runs on port 80.

The web-based application is designed using HTML, validated using javascript and algorithm is implemented using python programming.
Homepage of the application asks users to input their First name, Last name, M# number and Major and provides a 6+2 username. First name and last name are required fields which should be greater than 4 characters each.

The 6 + 2 is computed using python programming. The algorithm basicall extracts minimum 4 or upto 6 characters from the last name and add the first and last character of the first name at the end respectively.

After providing input values for all the fields user have to press "Generate" button to submit it. The input goes thorugh a javascript validation and if the input is correct it is send via POST method to a python file where the algorithm is applied. Then user is directed to another page where the resulting 6+2 username is displayed.
