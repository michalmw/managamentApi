'use strict';

var url = require('url');

var Project = require('./ProjectService');

module.exports.projectCommentProjectIDDELETE = function projectCommentProjectIDDELETE (req, res, next) {
  Project.projectCommentProjectIDDELETE(req.swagger.params, res, next);
};

module.exports.projectCommentProjectIDPUT = function projectCommentProjectIDPUT (req, res, next) {
  Project.projectCommentProjectIDPUT(req.swagger.params, res, next);
};

module.exports.projectsGET = function projectsGET (req, res, next) {
  Project.projectsGET(req.swagger.params, res, next);
};

module.exports.projectsPOST = function projectsPOST (req, res, next) {
  Project.projectsPOST(req.swagger.params, res, next);
};

module.exports.projectsProjectIDDELETE = function projectsProjectIDDELETE (req, res, next) {
  Project.projectsProjectIDDELETE(req.swagger.params, res, next);
};

module.exports.projectsProjectIDGET = function projectsProjectIDGET (req, res, next) {
  Project.projectsProjectIDGET(req.swagger.params, res, next);
};

module.exports.projectsProjectIDPUT = function projectsProjectIDPUT (req, res, next) {
  Project.projectsProjectIDPUT(req.swagger.params, res, next);
};
