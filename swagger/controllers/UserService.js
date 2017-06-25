'use strict';

exports.appUsersGET = function(args, res, next) {
  /**
   * get All users
   *
   * returns inline_response_200
   **/
  var examples = {};
  examples['application/json'] = {
  "password" : "3fg5h2jh2",
  "login" : "Marek"
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
   * Delete user
   * 
   *
   * no response value expected for this operation
   **/
  res.end();
}

exports.appUsersIdGET = function(args, res, next) {
  /**
   * Find one User by ID
   * 
   *
   * returns inline_response_200_1
   **/
  var examples = {};
  examples['application/json'] = {
  "password" : "3fg5h2jh2",
  "id" : "34f523h23h53",
  "login" : "Marek"
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
   * Update login or password
   * 
   *
   * user User_2 add User
   * returns inline_response_200_2
   **/
  var examples = {};
  examples['application/json'] = {
  "password" : "new password",
  "id" : "34f523h23h53",
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
   * add User
   * 
   *
   * user User_1 add User
   * no response value expected for this operation
   **/
  res.end();
}

