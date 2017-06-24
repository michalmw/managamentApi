'use strict';

exports.appTeamsDeleteUseridPUT = function(args, res, next) {
  /**
   * This functions is removing user from the team
   *
   * spec String Technology which is know ex.(backend)
   * userID String User ID from database
   * returns inline_response_200_10
   **/
  var examples = {};
  examples['application/json'] = {
  "name" : "Avengers",
  "id" : "54h23jh2345h2345h2",
  "users" : ""
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.appTeamsGET = function(args, res, next) {
  /**
   * This functions is getting all Teams
   *
   * returns inline_response_200_7
   **/
  var examples = {};
  examples['application/json'] = {
  "name" : "Avengers",
  "id:" : "54h23jh2345h2345h2",
  "users" : {
    "personId" : "324g23h23h42",
    "firstName" : "Kasia"
  }
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.appTeamsIdDELETE = function(args, res, next) {
  /**
   * This functions is removing team from db
   *
   * no response value expected for this operation
   **/
  res.end();
}

exports.appTeamsIdPUT = function(args, res, next) {
  /**
   * This functions is adding user to the team
   *
   * spec String Technology which is know ex.(backend)
   * userID String User ID from database
   * returns inline_response_200_9
   **/
  var examples = {};
  examples['application/json'] = {
  "name" : "Avengers",
  "id" : "54h23jh2345h2345h2",
  "users" : {
    "personId" : "324g23h23h42",
    "spec" : "backend"
  }
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.appTeamsPOST = function(args, res, next) {
  /**
   * This functions is adding team
   *
   * name String Only Name (optional)
   * users String All users to add in team this will be array (optional)
   * returns inline_response_200_8
   **/
  var examples = {};
  examples['application/json'] = {
  "name" : "Avengers",
  "id" : "54h23jh2345h2345h2",
  "users" : [ "{}" ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.appTeamsUpdateIdPUT = function(args, res, next) {
  /**
   * Updating project. This functions is only replace the properties. For example if you send /name/ :/kasia/ it will change the last name to this
   *
   * name String The title of project
   * returns inline_response_200_11
   **/
  var examples = {};
  examples['application/json'] = {
  "name:" : "The new name",
  "users" : {
    "userId" : "g534g524g54g5",
    "spec" : "backend"
  }
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

