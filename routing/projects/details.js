const User = require('../../models/user');
const Projects = require('../../models/project');

const getTime = (what)=>{

      let date = new Date()

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

      if(what == "all"){
        return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;
      }
      return  month + ":" + day + ":" + hour + ":" + min;
}

exports.createProject = (req, res)=>{

  let newProject = new Projects();

  newProject.title = req.body.title;
  newProject.price = req.body.price;
  newProject.createdData =  getTime();//Server adding this not client
  newProject.owner = req.body.owner;
  newProject.teamID = req.body.teamID;
  newProject.comments = [];

  newProject.save((err, result)=>{
      if(err){
      console.log(err);
      return res.status(500).json(err);
    }
      console.log(result);
      return res.status(200).json(result);
  });
}

exports.addComment = (req, res)=>{

 req.body.createdData = getTime('month')

 Projects.findByIdAndUpdate(req.params.id,{$push: {"comments": req.body}}, { new: true }, function (err, date) {
   if (err) {
     return res.status(404).json('Cannot find project with this ID!')
   }
   res.status(200).json(date)
 });

}

exports.getAllProject = (req, res)=>{

  let usersProjection = {
    users: false,
    name : false,
    login: false,
    password: false
};

Projects.find({}, usersProjection, function (err, project) {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(project)
});

}
exports.getProject = (req, res)=>{
  console.log('a')
  Projects.findById(req.params.id, (err,date)=>{
    if(err){
      return res.status(404).json('Bad ID!');
    }
    return res.status(200).json(date);
  })
}

exports.deleteProject = (req, res)=>{

  Projects.findByIdAndRemove(req.params.id, (err,date)=>{
    if(err){
      return res.status(404).json('Bad id!');
    }
    return res.status(200).json('Deleted!')
  })
}
