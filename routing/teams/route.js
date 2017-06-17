const path = require('path');
const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const teams = require('./details.js');

router
  .get('/app/check', teams.check)
  .post('/app/teams', teams.createTeam)
module.exports = router;
