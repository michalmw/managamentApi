'use strict';

exports.appProjectCommentIdPUT = function(args, res, next) {
  /**
   * This functions is adding comment to the project
   *
   * name String Only Name (optional)
   * authorID String ID of author (optional)
   * description String Text (optional)
   * returns inline_response_200_6
   **/
  var examples = {};
  examples['application/json'] = {
  "title:" : "The new title",
  "comments" : {
    "name" : "Jasiek",
    "authorID" : "3346h345h6345",
    "desciption" : "Your project is no bad!"
  },
  "price" : "The new price",
  "createdData" : "2017/06/24 15:27",
  "teamID" : "The new teamID which project belongs to!",
  "onwer" : "The new owner!"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.appProjectIdDELETE = function(args, res, next) {
  /**
   * This function is deleting project by ID
   *
   * no response value expected for this operation
   **/
  res.end();
}

exports.appProjectIdGET = function(args, res, next) {
  /**
   * Get one project by ID
   *
   * returns inline_response_200_4
   **/
  var examples = {};
  examples['application/json'] = {
  "title:" : "The name of project",
  "comments" : "",
  "price" : "The price of project",
  "createdData" : "2017/06/24 15:27",
  "teamID" : "The ID of team which user Belongs to",
  "onwer" : "The user which project belongs to"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.appProjectIdPUT = function(args, res, next) {
  /**
   * Updating project. This functions is only replace the properties. For example if you send /name/ :/kasia/ it will change the last name to this
   *
   * title String The title of project (optional)
   * price String The price of project (optional)
   * owner String The owner of project (optional)
   * teamID String The ID of project what belongs to (optional)
   * returns inline_response_200_5
   **/
  var examples = {};
  examples['application/json'] = {
  "title:" : "The new title",
  "comments" : "",
  "price" : "The new price",
  "createdData" : "2017/06/24 15:27",
  "teamID" : "The new teamID which project belongs to!",
  "onwer" : "The new owner!"
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
   * get all project in Json
   *
   * returns inline_response_200_4
   **/
  var examples = {};
  examples['application/json'] = {
  "title:" : "The name of project",
  "comments" : "",
  "price" : "The price of project",
  "createdData" : "2017/06/24 15:27",
  "teamID" : "The ID of team which user Belongs to",
  "onwer" : "The user which project belongs to"
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
   * project Project_1 The Project what you want add
   * returns inline_response_200_4
   **/
  var examples = {};
  examples['application/json'] = {
  "title:" : "The name of project",
  "comments" : "",
  "price" : "The price of project",
  "createdData" : "2017/06/24 15:27",
  "teamID" : "The ID of team which user Belongs to",
  "onwer" : "The user which project belongs to"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

