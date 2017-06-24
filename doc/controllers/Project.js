'use strict';

var url = require('url');

var Project = require('./ProjectService');

module.exports.appProjectCommentIdPUT = function appProjectCommentIdPUT (req, res, next) {
  Project.appProjectCommentIdPUT(req.swagger.params, res, next);
};

module.exports.appProjectIdDELETE = function appProjectIdDELETE (req, res, next) {
  Project.appProjectIdDELETE(req.swagger.params, res, next);
};

module.exports.appProjectIdGET = function appProjectIdGET (req, res, next) {
  Project.appProjectIdGET(req.swagger.params, res, next);
};

module.exports.appProjectIdPUT = function appProjectIdPUT (req, res, next) {
  Project.appProjectIdPUT(req.swagger.params, res, next);
};

module.exports.appProjectsGET = function appProjectsGET (req, res, next) {
  Project.appProjectsGET(req.swagger.params, res, next);
};

module.exports.appProjectsPOST = function appProjectsPOST (req, res, next) {
  Project.appProjectsPOST(req.swagger.params, res, next);
};
