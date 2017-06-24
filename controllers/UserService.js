'use strict';

exports.appUsersGET = function(args, res, next) {
  /**
   * get All Users from mongoDB in Json
   *
   * returns inline_response_200
   **/
  var examples = {};
  examples['application/json'] = {
  "password" : "prypke4567",
  "login" : "Dawid"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.appUsersIdDELETE = function(args, res, next) {
  /**
   * Remove one user by ID from mongodb
   *
   * no response value expected for this operation
   **/
  res.end();
}

exports.appUsersIdGET = function(args, res, next) {
  /**
   * get one user by ID from mongoDB in Json
   *
   * returns inline_response_200_2
   **/
  var examples = {};
  examples['application/json'] = {
  "password" : "prypke4567",
  "id" : "v234v5234v5234",
  "login" : "Dawid"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.appUsersIdPUT = function(args, res, next) {
  /**
   * Updated a password or login of user ID. Must be beetwen 6-20 char. Both can be updated
   *
   * login String The login of our user
   * password String The password of our user
   * returns inline_response_200_3
   **/
  var examples = {};
  examples['application/json'] = {
  "password" : "new password",
  "login" : "new login"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.appUsersPOST = function(args, res, next) {
  /**
   *
   * user User_1 The User what you want add
   * returns inline_response_200_1
   **/
  var examples = {};
  examples['application/json'] = {
  "password" : "v234v5234v5324v5234v5324",
  "id" : "23v4g23423hn23jh423j42",
  "login" : "Dawid"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

