'use strict';

exports.teamsDeleteUserTeamIDPUT = function(args, res, next) {
  /**
   * Remove user from team
   *
   * user User_7 User to remove
   * teamID String ID of team to delete User
   * no response value expected for this operation
   **/
  res.end();
}

exports.teamsGET = function(args, res, next) {
  /**
   * get all teams
   *
   * returns inline_response_200_9
   **/
  var examples = {};
  examples['application/json'] = {
  "name" : "Workers",
  "users" : [ {
    "userID" : "t5465t546546t",
    "spec" : "backend"
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.teamsPOST = function(args, res, next) {
  /**
   * Add Team
   *
   * comment Comment_2 add Comment
   * returns inline_response_200_10
   **/
  var examples = {};
  examples['application/json'] = {
  "name" : "Workers",
  "users" : {
    "spec" : "tech",
    "userID" : "45ggjh73k876"
  }
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.teamsTeamIDDELETE = function(args, res, next) {
  /**
   * Delete team
   * 
   *
   * teamID String ID of to delete
   * no response value expected for this operation
   **/
  res.end();
}

exports.teamsTeamIDPUT = function(args, res, next) {
  /**
   * Add user to team
   *
   * user User_6 User to remove
   * teamID String ID of team to add user
   * returns inline_response_200_10
   **/
  var examples = {};
  examples['application/json'] = {
  "name" : "Workers",
  "users" : {
    "spec" : "tech",
    "userID" : "45ggjh73k876"
  }
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.teamsUpdateTeamIDPUT = function(args, res, next) {
  /**
   * Update, replace name
   * j
   *
   * team Team_1 update name of Team
   * teamID String ID of team to update
   * returns inline_response_200_11
   **/
  var examples = {};
  examples['application/json'] = {
  "name" : "new Name",
  "users" : {
    "spec" : "tech",
    "userID" : "45ggjh73k876"
  }
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

