const path = require('path');
const User = require('../../models/user');
const crypto = require('crypto'),
            algorithm = 'aes-256-ctr',
            password = 'd6F3Efeq';

const encrypt = (text) =>{
  let cipher = crypto.createCipher(algorithm,password)
  let crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}

const decrypt = (text) =>{
  let decipher = crypto.createDecipher(algorithm,password)
  let dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}


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
  let password = req.body.password;
  let login = req.body.login;

  let encrypted = encrypt(password);
  console.log(encrypted);

  let user =  new User();
  user.password = encrypted;
  user.login = login;

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
  let id = req.params.id;
  User.find({"_id" : id})
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
  let id = req.params.id;
  User.remove({"_id" : id})
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
  let password = req.body.password;
  let login = req.body.login;

  let encrypted = encrypt(password);
  console.log(encrypted);


  User.findOne({"password" : encrypted, "login" :login})
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
    encrPass = encrypt(req.body.password);
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
