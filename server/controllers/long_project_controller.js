const LongProject = require('../models/long_project_model');

exports.getLongProjects = async (req, res, next) => {
    try {
        const long_projects = await LongProject.find();

        return res.status(200).json({
            success: true,
            count: long_projects.length,
            data: long_projects
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.addLongProject = async (req, res, next) => {
    try {
        const long_project = await LongProject.create(req.body);

        return res.status(201).json({
            success: true,
            data: long_project
        });
    } catch (error) {
        if(error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
        
            return res.status(400).json({
                success: false,
                error: messages
            });

        } 
        
        else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
    
}