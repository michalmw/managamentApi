'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.appLoginGET = function appLoginGET (req, res, next) {
  Default.appLoginGET(req.swagger.params, res, next);
};

module.exports.appUsersGET = function appUsersGET (req, res, next) {
  Default.appUsersGET(req.swagger.params, res, next);
};

module.exports.appUsersIdDELETE = function appUsersIdDELETE (req, res, next) {
  Default.appUsersIdDELETE(req.swagger.params, res, next);
};

module.exports.appUsersIdGET = function appUsersIdGET (req, res, next) {
  Default.appUsersIdGET(req.swagger.params, res, next);
};

module.exports.appUsersIdPUT = function appUsersIdPUT (req, res, next) {
  Default.appUsersIdPUT(req.swagger.params, res, next);
};

module.exports.appUsersPOST = function appUsersPOST (req, res, next) {
  Default.appUsersPOST(req.swagger.params, res, next);
};
