const express = require('express');
const router = express.Router();
const project = require('./details.js');

router
  .post('/app/project', project.createProject)
  .put('/app/project/comment/:id', project.addComment)
  .get('/app/projects', project.getAllProject)
  .delete('/app/project/:id', project.deleteProject)
  .get('/app/project/:id', project.getProject)
  .put('/app/project/:id', project.updateProject)

module.exports = router;
