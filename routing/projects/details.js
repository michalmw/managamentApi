const Projects = require('../../models/project')

const getTime = ()=>{
      let date = new Date();

      let hour = date.getHours();
      hour = (hour < 10 ? "0" : "") + hour;

      let min  = date.getMinutes();
      min = (min < 10 ? "0" : "") + min;

      let sec  = date.getSeconds();
      sec = (sec < 10 ? "0" : "") + sec;

      let year = date.getFullYear();

      let month = date.getMonth() + 1;
      month = (month < 10 ? "0" : "") + month;

      let day  = date.getDate();
      day = (day < 10 ? "0" : "") + day;

      return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;
}


exports.createProject = (req, res)=>{

  let newProject = new Projects();

  newProject.title = req.body.title;
  newProject.price = req.body.price;
  newProject.createdData =  getTime();//Server adding this not client
  newProject.owner = req.body.owner;
  newProject.teamID = req.body.teamID;
  newProject.comments = [];

  newProject.save( (err,res)=>{
    if(err){
      return res.status(500).json('Something went wrong')
    }
    return res.status(200).json(res);
  })
}
