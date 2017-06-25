'use strict';

var url = require('url');

var User = require('./UserService');

module.exports.appUsersGET = function appUsersGET (req, res, next) {
  User.appUsersGET(req.swagger.params, res, next);
};

module.exports.appUsersIdDELETE = function appUsersIdDELETE (req, res, next) {
  User.appUsersIdDELETE(req.swagger.params, res, next);
};

module.exports.appUsersIdGET = function appUsersIdGET (req, res, next) {
  User.appUsersIdGET(req.swagger.params, res, next);
};

module.exports.appUsersIdPUT = function appUsersIdPUT (req, res, next) {
  User.appUsersIdPUT(req.swagger.params, res, next);
};

module.exports.appUsersPOST = function appUsersPOST (req, res, next) {
  User.appUsersPOST(req.swagger.params, res, next);
};
