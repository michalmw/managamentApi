const path = require('path');
const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const project = require('./details.js');

router
  .get('/app/teams', project.findAllTeams)
  .post('/app/teams', project.createTeam)
  .put('/app/teams/:id', project.addUserToTeam)
  .put('/app/teams/deleteUser/:id', project.deleteUserFromTeam)
  .delete('/app/teams/:id', project.deleteTeam)
  .put('/app/teamUPDATE/:id', project.update)

module.exports = router;
