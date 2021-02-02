const Certification = require('../models/postCertification');
// const mongoose = require('mongoose');
const getCertificates = async(req,res) =>{
    try{
      const certifications =await Certification.find();
    //   console.log(postMessage);
      res.status(200).json(certifications);
    }catch(e){
   res.status(404).json({message: e.message});
    }
}
const createCertificate = async(req,res) =>{
    const certificate = req.body;

    const newCertificate = new Certification(certificate);

    try {
       await newCertificate.save();
       res.status(201).json(newCertificate);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

// const updatePost = async(req,res)=>{
//   try {
    
//     const {id: _id} = req.params;
//     const post = req.body;
  
//     if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
  
//     const updatedPost = await PostMessage.findByIdAndUpdate(_id,post, {new: true});
//     res.json(updatedPost);
//   } catch (error) {
//     console.log(error.message)
//   }
// }

module.exports = {
  getCertificates,
  createCertificate,
 }