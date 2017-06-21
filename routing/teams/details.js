const Teams = require('../../models/teams');
const validator = require('validator');

const  saveDate =  (req, res)=>{
  let team = new Teams();
  team.name = req.name;
  team.users = req.users;
  team.save((err, date)=>{
        if(err){
          res.status(500).json(err);
        }
          console.log(date)
          res.status(200).json(date);
  })
}

exports.createTeam = (req, res) =>{
  let name = validator.isLength(req.body.name, {min:5, max: 10})
  let check = 0;
  if(!name){
    return res.status(404).json("You must use name of team beetween 5 and 10 char!")
  }

  req.body.users.forEach((user)=>{
        console.log('id' + user.userID);
        Teams.findById(user.userID, (err, date)=>{
              if(err){
                return res.status(404).json('At least one of user Id is incorrect')
              }
                console.log('Znalazlo!');
                check++;
                if(check == req.body.users.length){
                  console.log('Dodam!')
                  saveDate(req.body, res);
                }
        })
    });
};
exports.findAllTeams = (req, res) =>{
  let query = Teams.find({});
  query.select('users');
  query.exec(function (err, docs) {
        if(err){
          return res.status(500).json(err)
        }
        return  res.status(200).json(docs)
  });
}

exports.deleteTeam = (req, res)=>{

  Teams.findByIdAndRemove(req.params.id, function (err, date) {
    if (err) {
      return res.status(404).json('Cannot find ID in database');
    }
    res.status(200).json('Removed!');
  });
}

exports.update = (req, res)=>{
  Teams.findByIdAndUpdate(req.params.id, { $set: req.body}, { new: true }, function (err, date) {
  if (err) {
    return res.status(404).json('ID is wrong!')
  }
  res.status(200).json(date)
});
}

exports.deleteUserFromTeam = (req, res)=>{

  req.checkBody('spec', "You don't have chosen specializacion!").isLength({min:3,max:30});
  req.checkBody('userID', "You don't have user ID!").isLength({min:3,max:80});
  console.log(req.params.id)

  const errors = req.validationErrors();
    if (errors)
      return res.status(400).json({"error": errors})

  Teams.findByIdAndUpdate(req.params.id,{$pull: {"users": req.body}}, function (err, date) {
  if (err){ return res.status(404).json('Bad team id!')}
  res.status(200).json(date)
});

    }
exports.addUserToTeam = (req, res)=>{
  req.checkBody('spec', "You don't have chosen properly this!").isLength({min:3,max:30});
  req.checkBody('userID', "You don't have user ID!").isLength({min:3,max:30});


  const errors = req.validationErrors();
    if (errors)
      return res.status(400).json({"error": errors})


  Teams.findById(req.body.id, (err, result)=>{
    if(err){
      return res.status(404).json('Cannot add user which ID what doesn\'t exist in database!')
    }
    console.log(result);
  })
  Teams.findByIdAndUpdate(req.params.id,{$push: {"users": req.body}}, { new: true }, function (err, date) {
  if (err) return handleError(err);
  res.status(200).json(date)
});
},
{
       "_id": "59454d2be7d122129cb72b00",
       "users": [
           {
               "spec": "Backend",
               "userID": "5944557d68ab5c1868e73cee"
           },
           {
               "spec": "FrontEnd",
               "userID": "3232"
           }
       ]
   }
