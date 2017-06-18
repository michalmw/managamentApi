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
    if (err) return handleError(err);
    res.status(200).json('Removed!');
  });
}

exports.update = (req, res)=>{
  Teams.findByIdAndUpdate(req.params.id, { $set: req.body}, { new: true }, function (err, date) {
  if (err) return handleError(err);
  res.status(200).json(date)
});
}

exports.deleteUserFromTeam = (req, res)=>{
  Teams.findByIdAndUpdate(req.params.id,{$pull: {"users": req.body}}, function (err, date) {
  if (err) return handleError(err);
  res.status(200).json(date)
});
}

exports.addUserToTeam = (req, res)=>{
  Teams.findByIdAndUpdate(req.params.id,{$push: {"users": req.body}}, { new: true }, function (err, date) {
  if (err) return handleError(err);
  res.status(200).json(date)
});
}
