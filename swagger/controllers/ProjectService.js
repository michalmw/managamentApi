'use strict';

exports.appProjectCommentIdPUT = function(args, res, next) {
  /**
   * Add Comment
   *
   * comment Comment_1 add Comment
   * returns inline_response_200_8
   **/
  var examples = {};
  examples['application/json'] = {
  "owner" : "Dawid",
  "comments" : [ {
    "name" : "given name",
    "description" : "given description",
    "authorID" : "given authorID"
  } ],
  "price" : 2000.0,
  "createdData" : "2017-06-25- 1:18",
  "teamID" : "34h6j3434h634",
  "title" : "Workers"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.appProjectsGET = function(args, res, next) {
  /**
   * get All Project
   *
   * returns inline_response_200_4
   **/
  var examples = {};
  examples['application/json'] = {
  "owner" : "Dawid",
  "comments" : [ {
    "name" : "Kasia",
    "description" : "Not bad project.",
    "authorID" : "e244542352345"
  } ],
  "price" : 2000.0,
  "createdData" : "2017-06-25- 1:18",
  "teamID" : "34h6j3434h634",
  "title" : "Workers"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.appProjectsIdDELETE = function(args, res, next) {
  /**
   * Delete project
   *
   * no response value expected for this operation
   **/
  res.end();
}

exports.appProjectsIdGET = function(args, res, next) {
  /**
   * get one by ID project
   *
   * returns inline_response_200_6
   **/
  var examples = {};
  examples['application/json'] = {
  "owner" : "Dawid",
  "comments" : [ {
    "name" : "example name",
    "description" : "description",
    "authorID" : "example authorID"
  } ],
  "price" : 2000.0,
  "createdData" : "2017-06-25- 1:18",
  "teamID" : "34h6j3434h634",
  "title" : "Workers"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.appProjectsIdPUT = function(args, res, next) {
  /**
   * Update Project. Only replace properties
   *
   * user User_5 update project
   * returns inline_response_200_7
   **/
  var examples = {};
  examples['application/json'] = {
  "owner" : "new owner",
  "comments" : [ {
    "name" : "example name",
    "description" : "description",
    "authorID" : "example authorID"
  } ],
  "price" : 4000.0,
  "createdData" : "2017-06-25- 1:18",
  "teamID" : "new teamID",
  "title" : "new title"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.appProjectsPOST = function(args, res, next) {
  /**
   * add Project
   *
   * user User_4 add Project
   * returns inline_response_200_5
   **/
  var examples = {};
  examples['application/json'] = {
  "owner" : "Dawid",
  "comments" : [ {
    "description" : "This comment is only example it doesn't exist"
  } ],
  "price" : 2000.0,
  "createdData" : "2017-06-25- 1:18",
  "teamID" : "34h6j3434h634",
  "title" : "Workers"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

