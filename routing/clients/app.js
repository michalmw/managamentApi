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
  return console.log("Baza danych nie odpowiada! : " + err)

  console.log(" Połączono pomyślnie")
})

app.use((req, res, next) => {
  let allowedOrigins = ['http://localhost:8080', 'http://localhost:8081'];
  let origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

let client = require('./routing/clients/route');
app.use('/', client);

let teams = require('./routing/teams/route')
app.use('/', teams);

let projects = require('./routing/projects/route')
app.use('/', projects);


app.listen(8080, function() {
  console.log('Server Started on Port 8080...')
  // body...
});
