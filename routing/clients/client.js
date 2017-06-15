const path = require('path');
const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const clients = require('./details.js');

router
  .get('/', clients.welcome)
  .get('/app/users', clients.findAll)
  .post('/app/users', clients.addClient)
  .get('/app/users/:id', clients.findById)
  .delete('/app/users/:id', clients.deleteById)
  .post('/app/login', clients.login)
  .put('/app/users/:id', clients.update)



module.exports = router;
