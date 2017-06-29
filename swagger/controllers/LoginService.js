'use strict';

exports.loginPOST = function(args, res, next) {
  /**
   * Login to Api
   * 
   *
   * user User_3 add User
   * returns inline_response_200_3
   **/
  var examples = {};
  examples['application/json'] = {
  "password" : "prypeser",
  "id" : "34f523h23h53",
  "login" : "logged"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

