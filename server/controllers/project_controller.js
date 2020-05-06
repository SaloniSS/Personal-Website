const Project = require('../models/project_model');

exports.getProjects = async (req, res, next) => {
    try {
        const projects = await Project.find();

        return res.status(200).json({
            success: true,
            count: projects.length,
            data: projects
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.addProject = async (req, res, next) => {
    try {
        const project = await Project.create(req.body);

        return res.status(201).json({
            success: true,
            data: project
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