const WinningProject = require('../models/winning_project_model');

exports.getWinningProjects = async (req, res, next) => {
    try {
        const winning_projects = await WinningProject.find();

        return res.status(200).json({
            success: true,
            count: winning_projects.length,
            data: winning_projects
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.addWinningProject = async (req, res, next) => {
    try {
        const winning_project = await WinningProject.create(req.body);

        return res.status(201).json({
            success: true,
            data: winning_project
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