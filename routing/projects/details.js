const User = require('../../models/user');
const Projects = require('../../models/project');


/**
 *@api {get}  / getAllProject - {done} (witchout validation)
 *@api {get}  / getProject - {done} (witchout validation)
 *@api {post}  / addComment - {done} (witchout validation)
 *@api {put}  / updateProject - {done} (witchout validation)
 *@api {delete}  / deleteProject - {done} (witchout validation)
 */

exports.createProject = (req, res)=>{

  let newProject = new Projects();

  newProject.title = req.body.title;
  newProject.price = req.body.price;
  newProject.createdData =  new Date();//Server adding this not client
  newProject.owner = req.body.owner;
  newProject.teamID = req.body.teamID;
  newProject.comments = [];

  newProject.save((err, result)=>{
      if(err){
      return res.status(500).json(err);
    }
      return res.status(200).json(result);
  });
}

exports.addComment = (req, res)=>{

  let date = new Date();

  let hour =  `${date.getDate()}: ${date.getDay()}: ${date.getHours()}: ${date.getMinutes()}`

  req.body.createdData = hour;

  Projects.findByIdAndUpdate(req.params.id,{$push: {"comments": req.body}}, { new: true }, (err, date)=>{
   if (err) {
     return res.status(404).json('Cannot find project with this ID!')
   }
   res.status(200).json(date)
  });
}

exports.getAllProject = (req, res)=>{
  Projects.find({title: {$exists:true},price: {$exists:true}}, (err, result)=>{
    if(err){
      return res.status(500).json(err)
    }
    return res.status(200).json(result)
  })
}

exports.getProject = (req, res)=>{

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

exports.updateProject = (req, res)=>{

  Projects.findByIdAndUpdate(req.params.id,{$set: req.body},(err, date)=>{
      if(err){
        return res.status(404).json('Bad iD!');
      }
        return res.status(200).json(date);
  })
}
