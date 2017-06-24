'use strict';

var url = require('url');

var Login = require('./LoginService');

module.exports.appUsersLoginGET = function appUsersLoginGET (req, res, next) {
  Login.appUsersLoginGET(req.swagger.params, res, next);
};
