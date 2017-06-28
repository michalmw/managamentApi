'use strict';

var url = require('url');

var Project = require('./ProjectService');

module.exports.appProjectCommentProjectIDPUT = function appProjectCommentProjectIDPUT (req, res, next) {
  Project.appProjectCommentProjectIDPUT(req.swagger.params, res, next);
};

module.exports.appProjectsGET = function appProjectsGET (req, res, next) {
  Project.appProjectsGET(req.swagger.params, res, next);
};

module.exports.appProjectsPOST = function appProjectsPOST (req, res, next) {
  Project.appProjectsPOST(req.swagger.params, res, next);
};

module.exports.appProjectsProjectIDDELETE = function appProjectsProjectIDDELETE (req, res, next) {
  Project.appProjectsProjectIDDELETE(req.swagger.params, res, next);
};

module.exports.appProjectsProjectIDGET = function appProjectsProjectIDGET (req, res, next) {
  Project.appProjectsProjectIDGET(req.swagger.params, res, next);
};

module.exports.appProjectsProjectIDPUT = function appProjectsProjectIDPUT (req, res, next) {
  Project.appProjectsProjectIDPUT(req.swagger.params, res, next);
};
