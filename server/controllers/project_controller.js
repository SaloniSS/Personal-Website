const Project = require("../models/project_model");

exports.getProjects = async (req, res, next) => {
  try {
    if (req.query) {
      const query = JSON.parse(req.query.filter.replace("id", "_id"));
      console.log(query);
      const projects = await Project.find(query);

      return res.status(200).json({
        success: true,
        count: projects.length,
        data: projects,
      });
    }

    const projects = await Project.find();

    return res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

exports.getProject = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project || project.length == 0) {
      return res.status(404).json({
        success: false,
        error: "No project found",
      });
    }

    return res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

exports.addProject = async (req, res, next) => {
  try {
    const project = await Project.create(req.body);

    return res.status(201).json({
      success: true,
      data: project,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

//TODO: Update a record
//TODO: Update records
//TODO: Delete a record
//TODO: Delete records
