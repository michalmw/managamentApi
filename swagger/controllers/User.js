'use strict';

var url = require('url');

var User = require('./UserService');

module.exports.appUsersGET = function appUsersGET (req, res, next) {
  User.appUsersGET(req.swagger.params, res, next);
};

module.exports.appUsersPOST = function appUsersPOST (req, res, next) {
  User.appUsersPOST(req.swagger.params, res, next);
};

module.exports.appUsersUserIDDELETE = function appUsersUserIDDELETE (req, res, next) {
  User.appUsersUserIDDELETE(req.swagger.params, res, next);
};

module.exports.appUsersUserIDGET = function appUsersUserIDGET (req, res, next) {
  User.appUsersUserIDGET(req.swagger.params, res, next);
};

module.exports.appUsersUserIDPUT = function appUsersUserIDPUT (req, res, next) {
  User.appUsersUserIDPUT(req.swagger.params, res, next);
};
