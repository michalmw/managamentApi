'use strict';
const connect = require('connect')();
const http = require('http');
const swaggerTools = require('swagger-tools');
const jsyaml = require('js-yaml');
const fs = require('fs');
const serverPort = 8080;
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const mongodbURL = 'mongodb://localhost/Users'
const jwt = require('express-jwt')
const bcrypt = require('bcrypt');
const util = require('util')
const validator = require('express-validator');
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(validator());
app.use(bodyParser.json())

mongoose.connect(mongodbURL, (err, res) => {
  if (err)
  return console.log("Cannot connect!: " + err)

  console.log("connected!")
})

// swaggerRouter configuration
var options = {
  swaggerUi: '/swagger.json',
  controllers: './swagger/controllers',
  useStubs: process.env.NODE_ENV === 'development' ? true : false // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync('./swagger/swagger.yaml', 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  connect.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  connect.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  connect.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  connect.use(middleware.swaggerUi());


  let client = require('./routing/clients/route');
  app.use('/', client);

  let teams = require('./routing/teams/route')
  app.use('/', teams);

  let projects = require('./routing/projects/route')
  app.use('/', projects);

  app.use('/', connect)
  
  app.listen(8080, () =>{
      console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
      console.log('Swagger-ui is available on http://localhost:%d/app/docs', serverPort);
		// body...
	});
});
