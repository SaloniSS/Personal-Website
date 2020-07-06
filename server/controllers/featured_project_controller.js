const FeaturedProject = require("../models/featured_project_model");

exports.getFeaturedProjects = async (req, res, next) => {
  try {
    const featured_projects = await FeaturedProject.find();

    return res.status(200).json({
      success: true,
      count: featured_projects.length,
      data: featured_projects,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

exports.addFeaturedProject = async (req, res, next) => {
  try {
    const featured_projects = await FeaturedProject.create(req.body);

    return res.status(201).json({
      success: true,
      data: featured_projects,
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
