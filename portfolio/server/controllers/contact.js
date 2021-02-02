const Contact = require('../models/contact');
// const mongoose = require('mongoose');

const getContact = async(req,res) =>{
    try{
      const contacts =await Contact.find();
    //   console.log(postMessage);
      res.status(200).json(contacts);
    }catch(e){
   res.status(404).json({message: e.message});
    }
}

const createContact = async(req,res) =>{
    const contact = req.body;

    const newContact = new Contact(contact);

    try {
       await newContact.save();
       res.status(201).json(newContact);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

module.exports = {
    getContact,
    createContact,
 }