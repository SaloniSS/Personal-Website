const express = require('express');
const router = express.Router();
const { getProjects, addProject } = require('../controllers/project_controller');

router
    .route('/')
    .get(getProjects)
    .post(addProject);
    
module.exports = router;