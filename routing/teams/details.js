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
