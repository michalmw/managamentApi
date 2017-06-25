'use strict';

var url = require('url');

var Login = require('./LoginService');

module.exports.appLoginPOST = function appLoginPOST (req, res, next) {
  Login.appLoginPOST(req.swagger.params, res, next);
};
