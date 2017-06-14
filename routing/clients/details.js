const path = require('path');
const User = require('../../models/user');
const crypto = require('crypto'),
            algorithm = 'aes-256-ctr',
            password = 'd6F3Efeq';

function encrypt(text){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}

function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}


exports.welcome = (req, res)=>{
  res.send('Welcome');
}

exports.checkHash = (req, res) =>{
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
  let data = req.body.data;
  let login = req.body.login;

  let encrypted = encrypt(data);
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
