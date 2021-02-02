const mongoose = require('mongoose');

const certificationSchema = mongoose.Schema({
  company: String,
  title: String,
  duration: String,
  selectedFile: String
});

const Certification = mongoose.model('Certification',certificationSchema);

module.exports=Certification;