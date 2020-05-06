const express = require('express');
const router = express.Router();
const { getProjects, addProject } = require('../controllers/project_controller');
const { getWinningProjects, addWinningProject } = require('../controllers/winning_project_controller');

router
    .route('/')
    .get(getProjects)
    .post(addProject);

router
    .route('/winning-projects')
    .get(getWinningProjects)
    .post(addWinningProject);
    
module.exports = router;