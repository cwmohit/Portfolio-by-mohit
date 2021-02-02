const express = require('express');
const certificate =  require('../controllers/posts');
const Certification = require('../models/postCertification');
const contact =  require('../controllers/contact');
const Contact = require('../models/contact');
const Project = require('../models/project');
const projects = require('../controllers/project');

// const createPost =  require('../controllers/posts');
const router = express.Router();

router.get('/certificates',certificate.getCertificates);
router.post('/certificates',certificate.createCertificate);
router.get('/contacts',contact.getContact);
router.post('/contacts',contact.createContact);
router.get('/projects',projects.getProject);
router.post('/projects',projects.createProject);
// router.post('/',certificate.createCertificate);


module.exports = router;