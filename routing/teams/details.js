const Teams = require('../../models/teams');
const validator = require('validator');

exports.check = (req, res) =>{ res.status(200).json('Ok')}

exports.createTeam = (req, res) =>{

  let error = false;
  let name = validator.isLength(req.body.name, {min:5, max: 10})
  let check = 0;
  if(!name){
    return res.status(404).json("You must use name of team beetween 5 and 10 char!")
  }
  req.body.users.forEach(function(user){
        console.log('id' + user.userID);
        Teams.find({"_id" : user.userID}, (err, date)=>{
              if(err){
                error = true;
              }
              else {
                console.log('Znalazlo!');
                check++;
                if(check == req.body.users.length){
                  console.log('Dodam!')
                }
                else {
                  {
                    return;

                  }
                }
              }
              if(error){
                res.status(404).json('Któreś ID jest nie poprawne!')
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
        else {
          res.status(200).json(docs)
        }
  });
}

exports.deleteTeam = (req, res)=>{
  Teams.findByIdAndRemove({"_id" : req.params.id})
    .exec((err, date)=>{
      if(err){
        return res.status(404).json("This is not a ID of any object!");
      }
      if(date == null){
        res.status(404).json("This is not a ID of any object!")
      }
      else {
        return res.status(200).json(date);
      }
    })
}


exports.deleteUserFromTeam = (req, res)=>{

  Teams.findById(req.params.id, (err, date)=>{
        if(err){
          console.log(err)
          return res.status(404).json('Id was bad');
        }
        else {
          //let arr = [{userID : "23123", name : "kasia"}, {userID : "3123", name :"Basia"}, {userID : "9898", name :"Olek"}]
          //let query = {userID : "231233", name : "kasia"}
          //let wynik  = arr.map(function(e) { return e.hello; }).indexOf(query);
          //console.log(wynik);
          //console.log(date.users);
          for(let i=0; i<date.users.length; i++){
              if(date.users[i].userID == req.body.userID){
                  date.users.splice(i, 1);
                  date.save();
                  return res.status(200).json("Removed!")
              }
          }
          return res.status(404).json('cannot find')
        }
  })
}

exports.addUserToTeam = (req, res)=>{
  let data = {
    userID : req.body.userID,
    spec : req.body.spec
  }
  Teams.findById({"_id" : req.params.id}, (err, result)=>{
    if(err){return res.status(404).json(err)}
    else{
      result.users.push(data)
      result.save();
      return res.status(200).json(data)
    }
  })
}
