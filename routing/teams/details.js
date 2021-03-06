const Teams = require('../../models/teams');
const validator = require('validator');


/**
 *@api {get}  / findAllTeams - {done} (useless)
 *@api {post}  / createTeam - {done} (validation 0.8)
 *@api {put}  / addUserToTeam - {done} (validation 0.8)
 *@api {put}  / update - {done} (validation)
 *@api {delete}  / deleteTeam - {done} (witchout validation)
 */

const  saveDate =  (req, res)=>{
  let team = new Teams();
  team.name = req.name;
  team.users = req.users;
  team.save((err, date)=>{
        if(err){
          return res.status(500).json(err);
        }
          return res.status(200).json(date);
  })
}

exports.createTeam = (req, res) =>{
  let name = validator.isLength(req.body.name, {min:5, max: 10})
  let check = 0;
  if(!name){
    return res.status(400).json("You must use name of team beetween 5 and 10 char!")
  }

  req.body.users.forEach((user)=>{
        console.log('id' + user.userID);
        Teams.findById(user.userID, (err, date)=>{
              if(err){
                return res.status(400).json('At least one of user Id is incorrect')
              }
              check++;
              if(check == req.body.users.length){
                  saveDate(req.body, res);
              }
        })
    });
};
exports.findAllTeams = (req, res) =>{
  Teams.find({name: {$exists:true},users: {$exists:true}}, (err, result)=>{
    if(err){
      return res.status(500).json(err)
    }
    return res.status(200).json(result)
  })
}

exports.deleteTeam = (req, res)=>{

  Teams.findByIdAndRemove(req.params.id, (err, date)=> {
    if (err) {
      return res.status(404).json('Cannot find ID in database');
    }
    res.status(200).json('Removed!');
  });
}

exports.update = (req, res)=>{
  console.log(req.body)

  Teams.findByIdAndUpdate(req.params.id,{$set: req.body}, {new: true}, (err, date)=>{
      if(err){
        return res.status(404).json('Bad iD!');
      }
        return res.status(200).json(date);
  });
}

exports.deleteUserFromTeam = (req, res)=>{

  req.checkBody('spec', "You don't have chosen specializacion!").isLength({min:3,max:30});
  req.checkBody('userID', "You don't have user ID!").isLength({min:3,max:80});

  const errors = req.validationErrors();
  if (errors){
      return res.status(400).json({"error": errors})
    }
  Teams.findByIdAndUpdate(req.params.id,{$pull: {"users": req.body}}, function (err, date) {
    if (err){
       return res.status(404).json('Bad team id!')
     }
     res.status(200).json(date)
    });
}

exports.addUserToTeam = (req, res)=>{
  req.checkBody('spec', "You don't have chosen properly this!").isLength({min:3,max:30});
  req.checkBody('userID', "You don't have user ID!").isLength({min:3,max:30});
  let err = false
  const errors = req.validationErrors();
    if (errors)
      return res.status(400).json({"error": errors})

    Teams.findById(req.body.userID, (err, result)=>{
      if(err){
        return res.status(404).json('Cannot add user which ID doesn\'t exist in database!')
        err = true
      }
    })
    if(err){
      return
    }
    Teams.findByIdAndUpdate(req.params.id,{$push: {"users": req.body}}, { new: true }, function (err, date) {
    if (err) return res.status(404).json("Team ID is wrong")
    return res.status(200).json(date)
  });
}

/*
"_id": "594458f65f751305b4beed57",
       "login": "4534543534",
       "password": "57df86c374222c25631db15ea6b64dc9e11c",
       "__v": 0
   },
   {
       "_id": "594459500a222d142c6e3eb2",
       "login": "4534543534",
       "password": "57df86c374222c25631db15ea6b64dc9e11c",
       "__v": 0
*/
