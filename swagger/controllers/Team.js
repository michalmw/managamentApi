'use strict';

var url = require('url');

var Team = require('./TeamService');

module.exports.appTeamsDeleteUserTeamIDPUT = function appTeamsDeleteUserTeamIDPUT (req, res, next) {
  Team.appTeamsDeleteUserTeamIDPUT(req.swagger.params, res, next);
};

module.exports.appTeamsGET = function appTeamsGET (req, res, next) {
  Team.appTeamsGET(req.swagger.params, res, next);
};

module.exports.appTeamsPOST = function appTeamsPOST (req, res, next) {
  Team.appTeamsPOST(req.swagger.params, res, next);
};

module.exports.appTeamsTeamIDDELETE = function appTeamsTeamIDDELETE (req, res, next) {
  Team.appTeamsTeamIDDELETE(req.swagger.params, res, next);
};

module.exports.appTeamsTeamIDPUT = function appTeamsTeamIDPUT (req, res, next) {
  Team.appTeamsTeamIDPUT(req.swagger.params, res, next);
};

module.exports.appTeamsUpdateTeamIDPUT = function appTeamsUpdateTeamIDPUT (req, res, next) {
  Team.appTeamsUpdateTeamIDPUT(req.swagger.params, res, next);
};
