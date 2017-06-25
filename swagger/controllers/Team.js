'use strict';

var url = require('url');

var Team = require('./TeamService');

module.exports.appTeamsDeleteUserIdPUT = function appTeamsDeleteUserIdPUT (req, res, next) {
  Team.appTeamsDeleteUserIdPUT(req.swagger.params, res, next);
};

module.exports.appTeamsGET = function appTeamsGET (req, res, next) {
  Team.appTeamsGET(req.swagger.params, res, next);
};

module.exports.appTeamsIdDELETE = function appTeamsIdDELETE (req, res, next) {
  Team.appTeamsIdDELETE(req.swagger.params, res, next);
};

module.exports.appTeamsIdPUT = function appTeamsIdPUT (req, res, next) {
  Team.appTeamsIdPUT(req.swagger.params, res, next);
};

module.exports.appTeamsPOST = function appTeamsPOST (req, res, next) {
  Team.appTeamsPOST(req.swagger.params, res, next);
};

module.exports.appTeamsUpdateIdPUT = function appTeamsUpdateIdPUT (req, res, next) {
  Team.appTeamsUpdateIdPUT(req.swagger.params, res, next);
};
