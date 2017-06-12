const path = require('path');
const mongoose = require('mongoose');
const router = require('express').Router();

const Schema = mongoose.Schema;
let userSchema = new Schema({
  firstName:  String,
  lastName: String,
  userName:   String,
  email: String,
  login: String,
  password: String
});

let User = mongoose.model('User', userSchema);
module.exports = User;


router.get('/', (req, res)=>{
  res.send('Welcome');
})


router.get('/app/users', (req, res)=>{

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

  /*User.find({},(err, res)=>{
    if(err){console.log(err)}
    console.log(res);
    res.send(res);
  })*/
  //res.send(200);
});

router.post('/api/users', (req, res)=>{
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
});


router.get('/app/users:id', (req, res)=>{
  console.log(req.params.id);
  res.send(req.params.id);
});

router.get('/app/som', (req, res)=>{
  res.send(200);
});

module.exports = router;
