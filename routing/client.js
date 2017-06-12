const path = require('path');
const mongoose = require('mongoose');
const router = require('express').Router();

const Schema = mongoose.Schema;
let userSchema = new Schema({
  firstName:  String,
  lastName: String,
  userName:   String,
  email: String,
  password: String
});

let User = mongoose.model('User', userSchema);
module.exports = User;


router.get('/', (req, res)=>{
  res.send('Welcome');
})


router.get('/app/users', (req, res)=>{
  /*let user = {
    firstName: "kasia",
    lastName: "Walczyk",
    userName: "prypke",
    email: "@som",
    password: "asiaz"
  }*/
  let new2 = new User();

  new2.firstName = "kasia",
  new2.lastName = "Walczyk",
  new2.userName = "prypke",
  new2.email = "@som",
  new2.password = "to"
  new2.save( (err, result)=>{
    if(err){console.log(err)}
    console.log(result);
    res.send(result);
  })
/*  User.save(user, (err, result)=>{
    if(err){console.log(err)}
    console.log(result);
  })

  User.find((err, res)=>{
    if(err){console.log(err)}
    console.log(res);
    res.send(res);
  })*/
});



router.get('/app/users:id', (req, res)=>{
  console.log(req.params.id);
  res.send(req.params.id);
});

router.get('/app/som', (req, res)=>{
  res.send(200);
});

module.exports = router;
