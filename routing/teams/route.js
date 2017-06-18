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
[
    {
        "_id": "59453f0aaeab481ab04a0268",
        "name": "nowi",
        "users": [
            {
                "spec": "Backend",
                "userID": "342423423423"
            },
            {
                "spec": "FrontEnd",
                "userId": "123123123"
            }
        ],
        "__v": 0
    }
]
