const Project = require('../models/project');
// const mongoose = require('mongoose');

const getProject = async(req,res) =>{
    try{
      const projects =await Project.find();
    //   console.log(postMessage);
      res.status(200).json(projects);
    }catch(e){
   res.status(404).json({message: e.message});
    }
}

const createProject = async(req,res) =>{
    const project = req.body;

    const newProject = new Project(project);

    try {
       await newProject.save();
       res.status(201).json(newProject);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

module.exports = {
    getProject,
    createProject,
 }