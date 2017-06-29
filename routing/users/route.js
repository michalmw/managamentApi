const path = require('path');
const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const users = require('./details.js');

router
  .get('/app/users', users.findAll)
  .post('/app/users', users.addUser)
  .get('/app/users/:id', users.findById)
  .delete('/app/users/:id', users.deleteById)
  .post('/app/login', users.login)
  .put('/app/users/:id', users.update)

module.exports = router;
