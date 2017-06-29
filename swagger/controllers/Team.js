'use strict';

var url = require('url');

var Team = require('./TeamService');

module.exports.teamsDeleteUserTeamIDPUT = function teamsDeleteUserTeamIDPUT (req, res, next) {
  Team.teamsDeleteUserTeamIDPUT(req.swagger.params, res, next);
};

module.exports.teamsGET = function teamsGET (req, res, next) {
  Team.teamsGET(req.swagger.params, res, next);
};

module.exports.teamsPOST = function teamsPOST (req, res, next) {
  Team.teamsPOST(req.swagger.params, res, next);
};

module.exports.teamsTeamIDDELETE = function teamsTeamIDDELETE (req, res, next) {
  Team.teamsTeamIDDELETE(req.swagger.params, res, next);
};

module.exports.teamsTeamIDPUT = function teamsTeamIDPUT (req, res, next) {
  Team.teamsTeamIDPUT(req.swagger.params, res, next);
};

module.exports.teamsUpdateTeamIDPUT = function teamsUpdateTeamIDPUT (req, res, next) {
  Team.teamsUpdateTeamIDPUT(req.swagger.params, res, next);
};
