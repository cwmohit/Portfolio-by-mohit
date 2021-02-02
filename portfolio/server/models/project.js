const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    name: String,
    link: String,
    selectedFile: String
});

const Project = mongoose.model('Project',projectSchema);

module.exports=Project;