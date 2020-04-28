# Call For Code Challenge 2020

This project is created for the Call for Code 2020 Challenge to respond to the CODIV-19 pandemic and and is part of an infrastructure to collect data and monitor the patients of CODIV-19

# Emergency-Call
## Real-Time Backend for supporting the <br /> Angular/ Electron application (emergencyDashboard)
This CUBE.JS Application allows a continuous connection through Websocket between the front-end (Angular/Electron application) and the database (MongoDB).
With this Framework the front-end will automatically be updated whenever a user push the data into the database.

### Setting up
1. Import the existing project
2. Install **CUBE CLI** globally with the following command on your terminal
````
npm install -g cubejs-cli
````
3. Change the file **.env** and insert all the credential, port and host of the instance of the MongoDb database
4. Run from the terminal within the root folder of the application 
````
npm run dev
````
5. Now you server is up and running at port **http://localhost:4000/**

Attention: <br />
To use this backend you need to create an instance of MongoDB and BI Connector.
Please see the documentation (README.md) of the following project **emergency_Dashboard**
