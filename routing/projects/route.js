const express = require('express');
const router = express.Router();
const project = require('./details.js');

router
  .post('/app/projects', project.createProject)
  .put('/app/project/comment/:id', project.addComment)
  .delete('/app/project/comment/:id', project.deleteComment)
  .get('/app/projects', project.getAllProject)
  .delete('/app/projects/:id', project.deleteProject)
  .get('/app/projects/:id', project.getProject)
  .put('/app/projects/:id', project.updateProject)

module.exports = router;
