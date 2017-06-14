const path = require('path');
const User = require('../../models/user');
const bcrypt = require('bcrypt');


exports.welcome = (req, res)=>{
  res.send('Welcome');
}



exports.checkHash = (req, res) =>{
  let data = req.body.data;

  bcrypt.genSalt(11, (err, hash)=>{
            if(err){
                res.send(err);
                return "haven't hashed";
          }
          let user = new User();
          user.password = hash;
          user.save( (err, result)=>{
            console.log(result);
            res.send(result);
          });
          return  hash;
      });

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
  let login = req.body.login;
  let password = req.body.password;

  let user = new User();

  user.login = login;
  user.password = password;

  user.save( (err, result)=>{
    if(err){console.log(err); res.send(409)}
    console.log(result);
    res.send(result);
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
