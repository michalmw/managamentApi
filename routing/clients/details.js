const path = require('path');
const User = require('../../models/user');
const encr = require('./encryption');
const validator = require('validator');


/**
 *@api {get}  / findById - {done} (witchout validation)
 *@api {get}  / addClient - {done} (validation)
 *@api {post}  / findById - {done} (witchout validation)
 *@api {post}  / login - {done} (witchout validation)
 *@api {delete}  / deleteById - {done} (witchout validation)
 *@api {put}  / update - {done} (validation)
 */

exports.findAll = (req, res)=>{
  let usersProjection = {
    users: false,
    name : false,
    comment : false,
    title : false
};

User.find({}, usersProjection, (err, project)=> {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(project)
  });
};

exports.addClient = (req, res)=>{
  let login = validator.isLength(req.body.login, {min:5, max: 10})
  let password = validator.isLength(req.body.password,{min :6, max : 20});

  if(!password || !login){
    return res.status(404).json('nie spełnia wymaganej ilości znaków');
  }

  if(req.body.login == req.body.password){
    return res.status(200).json('Hasło i login nie może być takie samo!');

  }
  let encrypted = encr.encrypt(req.body.password);
  console.log(encrypted);

  let user =  new User();
  user.password = encrypted;
  user.login = req.body.login;

  user.save((err, result)=>{
      if(err){
      console.log(err);
      return res.status(500).json(err);
    }
      console.log(result);
      return res.status(200).json(result);
  });
};

exports.findById = (req, res)=>{

  User.find({"_id" : req.params.id})
    .exec((err, date)=>{
      if(err){
        return res.status(404).json("Nie znaleziono o takim ID");
      }
        console.log(date);
        return res.status(200).json(date);
    })
};

exports.deleteById = (req, res)=>{
  User.findByIdAndRemove({"_id" : req.params.id})
    .exec((err, date)=>{
      if(err){
        return res.status(404).json("This is not a ID of any object!");
      }
      if(date == null){
        return res.status(404).json("This is not a ID of any object!")
      }
        return res.status(200).json(date);
    })
};

exports.login = (req, res)=>{
  let encrypted = encr.encrypt(req.body.password);
  console.log(encrypted);

  User.findOne({"password" : encrypted, "login" : req.body.login})
    .exec((err, date)=>{
      if(err){
        return res.status(400).json(err);
      }
      if(date == null){
        return res.status(400).json("Bad login or password!");
      }
        return res.status(200).json(date);
    })
};

exports.update = (req, res)=>{

  let login = validator.isLength(req.body.login, {min:5, max: 10})
  let password = validator.isLength(req.body.password,{min :6, max : 20});

  if(!password || !login){
    return res.status(404).json('nie spełnia wymaganej ilości znaków');
  }

  let encrypted = encr.encrypt(req.body.password);

  req.body.password = encrypted;

  User.findOneAndUpdate({"_id" : req.params.id}, req.body, {upsert:true},(err, doc)=>{
    if (err){
      return res.status(404).json('Cannot find user with this Id');
    }
    return res.status(200).json("Succesfully saved!")
});
}
