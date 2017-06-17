const Teams = require('../../models/teams');



exports.check = (req, res) =>{ res.status(200).json('Ok')}

exports.createTeam = (req, res) =>{
    let team = new Teams();

    team.name = "New young"

    team.users[0] = {
      personId: "342423423",
      firstName: "Kasia",
      lastName: "Grabara",
      email: "@twoja"
    }

    team.save((err, date)=>{
          if(err){
            res.status(500).json(err);
          }
          else {
            console.log(date)
            res.status(200).json(date);
          }
    })
};
exports.check = (req, res) =>{ res.status(200).json('Ok')}
