const path = require('path');
const User = require('../../models/user');
const encr = require('./encryption');

exports.welcome = (req, res)=>{
  res.send('Welcome');
}

exports.findAll = (req, res)=>{
  User.find({})
    .exec((err, date)=>{
      if(err){
        res.send('error')
      }
      else {
        console.log(date);
        res.json(date);
      }
    })
};

exports.addClient = (req, res)=>{

  let encrypted = encr.encrypt(req.body.password);
  console.log(encrypted);

  let user =  new User();
  user.password = encrypted;
  user.login = req.body.login;

  user.save((err, result)=>{
      if(err){
      console.log(err);
      res.send(409);
    }
    else {
      console.log(result);
      res.send('Dodano!')
    }
  });

};


exports.findById = (req, res)=>{

  User.find({"_id" : req.params.id})
    .exec((err, date)=>{
      if(err){
        res.send('Nie znaleziono o takim ID');
      }
      else {
        console.log(date);
        res.json(date);
      }
    })
};

exports.deleteById = (req, res)=>{
  User.remove({"_id" : req.params.id})
    .exec((err, date)=>{
      if(err){
        res.send('Nie znaleziono o takim ID');
      }
      else {
        res.send('Pomyslnie usunieto!');
      }
    })
};

exports.login = (req, res)=>{
  let encrypted = encr.encrypt(req.body.password);
  console.log(encrypted);

  User.findOne({"password" : encrypted, "login" : req.body.login})
    .exec((err, date)=>{
      if(err){
        res.send('Nie znaleziono o takim ID');
      }
      if(date === null){
        return res.send(404);
      }
      else {
        res.json(date);
      }
    })
};

exports.update = (req, res)=>{
  res.send(200);
  let pass = false;
  let log = false;

  let encrPass = null;
  let login = null;

  if(req.param('password')){
    encrPass = encr.encrypt(req.body.password);
    pass = true;
  }
  else {
    console.log('Password hasnt beed added');
  }

  if(req.param('login')){
    login = req.body.login;
    log = true;
  }
  else{
    console.log("Loggin hasnt been added")
  }

  User.findOne({ "_id": req.params.id}, function (err, doc){
    if(pass){
      console.log(encrPass);
      doc.password = encrPass;
    }
    if(log){
      console.log(login);
      doc.login = login;
    }
    console.log(doc);
    doc.save();
});
}
