'use strict';

var url = require('url');

var User = require('./UserService');

module.exports.usersGET = function usersGET (req, res, next) {
  User.usersGET(req.swagger.params, res, next);
};

module.exports.usersPOST = function usersPOST (req, res, next) {
  User.usersPOST(req.swagger.params, res, next);
};

module.exports.usersUserIDDELETE = function usersUserIDDELETE (req, res, next) {
  User.usersUserIDDELETE(req.swagger.params, res, next);
};

module.exports.usersUserIDGET = function usersUserIDGET (req, res, next) {
  User.usersUserIDGET(req.swagger.params, res, next);
};

module.exports.usersUserIDPUT = function usersUserIDPUT (req, res, next) {
  User.usersUserIDPUT(req.swagger.params, res, next);
};
