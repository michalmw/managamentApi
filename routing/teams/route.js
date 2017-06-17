const path = require('path');
const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const teams = require('./details.js');

router
  .get('/app/teams', teams.findAllTeams)
  .post('/app/teams', teams.createTeam)
module.exports = router;
