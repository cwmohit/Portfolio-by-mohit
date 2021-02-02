const express = require('express');
const contact =  require('../controllers/contact');
const Contact = require('../models/contact');

// const createPost =  require('../controllers/posts');
const router = express.Router();

router.get('/',contact.getContact);
router.post('/',contact.createContact);
// router.post('/',certificate.createCertificate);


module.exports = router;