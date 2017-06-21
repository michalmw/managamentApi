const path = require('path');
const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const project = require('./details.js');

router
  .post('/app/project', project.createProject)
  .put('/app/project/comment/:id', project.addComment)
  .get('/app/projects', project.getAllProject)

module.exports = router;
