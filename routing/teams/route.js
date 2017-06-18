const path = require('path');
const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const teams = require('./details.js');

router
  .get('/app/teams', teams.findAllTeams)
  .post('/app/teams', teams.createTeam)
  .put('/app/teams/:id', teams.addUserToTeam)
  .put('/app/teams/deleteUser/:id', teams.deleteUserFromTeam)
  .delete('/app/teams/:id', teams.deleteTeam)
  .put('/app/teamUPDATE/:id', teams.update)

module.exports = router;
