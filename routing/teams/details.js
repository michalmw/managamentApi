const Teams = require('../../models/teams');
const validator = require('validator');


exports.check = (req, res) =>{ res.status(200).json('Ok')}

exports.createTeam = (req, res) =>{

  let error = false;
  let info = []
  let name = validator.isLength(req.body.name, {min:5, max: 10})

  if(!name){
    return res.status(404).json("You must use name of team beetween 5 and 10 char!")
  }

  console.log(req.body.users)
  for(pe in req.body.users){
    console.log(pe.userID)
  }

  for(user of req.body.users){
    console.log(user.userID);
    Teams.find({"_id" : user.userID}, (err, date)=>{
          if(err){
            error = true;
            console.log(date);
          }
          else {
            console.log('Znalazlo!');
            console.log(date);
          }
    })
  }

  if(error){
    return res.status(404).json('One or more users have a bad ID!');
  }
  else {
    let team = new Teams();
    team.name = req.body.name;
    team.users = req.body.users;
    team.save((err, date)=>{
          if(err){
            res.status(500).json(err);
          }
          else {
            console.log(date)
            res.status(200).json(date);
          }
    })
  }
};




exports.findAllTeams = (req, res) =>{

}
