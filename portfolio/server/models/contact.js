const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String
});

const Contact = mongoose.model('Contact',contactSchema);

module.exports=Contact;