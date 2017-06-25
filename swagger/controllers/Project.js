'use strict';

var url = require('url');

var Project = require('./ProjectService');

module.exports.appProjectCommentIdPUT = function appProjectCommentIdPUT (req, res, next) {
  Project.appProjectCommentIdPUT(req.swagger.params, res, next);
};

module.exports.appProjectsGET = function appProjectsGET (req, res, next) {
  Project.appProjectsGET(req.swagger.params, res, next);
};

module.exports.appProjectsIdDELETE = function appProjectsIdDELETE (req, res, next) {
  Project.appProjectsIdDELETE(req.swagger.params, res, next);
};

module.exports.appProjectsIdGET = function appProjectsIdGET (req, res, next) {
  Project.appProjectsIdGET(req.swagger.params, res, next);
};

module.exports.appProjectsIdPUT = function appProjectsIdPUT (req, res, next) {
  Project.appProjectsIdPUT(req.swagger.params, res, next);
};

module.exports.appProjectsPOST = function appProjectsPOST (req, res, next) {
  Project.appProjectsPOST(req.swagger.params, res, next);
};
