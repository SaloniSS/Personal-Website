const Project = require("../models/project_model");

exports.getProjects = async (req, res, next) => {
  try {
    console.log(req.query);

    if (req.query.filter) {
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

exports.updateProject = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project || project.length == 0) {
      return res.status(404).json({
        success: false,
        error: "No project found",
      });
    }

    if (req.body.title != null) {
      await Project.findById(req.params.id).updateOne(
        {},
        {
          $set: {
            title: req.body.title,
          },
        }
      );
    }

    if (req.body.organization != null) {
      await Project.findById(req.params.id).updateOne(
        {},
        {
          $set: {
            organization: req.body.organization,
          },
        }
      );
    }

    if (req.body.date != null) {
      await Project.findById(req.params.id).updateOne(
        {},
        {
          $set: {
            date: req.body.date,
          },
        }
      );
    }

    if (req.body.description != null) {
      await Project.findById(req.params.id).updateOne(
        {},
        {
          $set: {
            description: req.body.description,
          },
        }
      );
    }

    if (req.body.contribution != null) {
      await Project.findById(req.params.id).updateOne(
        {},
        {
          $set: {
            contribution: req.body.contribution,
          },
        }
      );
    }

    if (req.body.award != null) {
      await Project.findById(req.params.id).updateOne(
        {},
        {
          $set: {
            award: req.body.award,
          },
        }
      );
    }

    if (req.body.category != null) {
      await Project.findById(req.params.id).updateOne(
        {},
        {
          $set: {
            category: req.body.category,
          },
        }
      );
    }

    if (req.body.featured != null) {
      await Project.findById(req.params.id).updateOne(
        {},
        {
          $set: {
            featured: req.body.featured,
          },
        }
      );
    }

    if (req.body.portfolio != null) {
      await Project.findById(req.params.id).updateOne(
        {},
        {
          $set: {
            portfolio: req.body.portfolio,
          },
        }
      );
    }

    if (req.body.code != null) {
      await Project.findById(req.params.id).updateOne(
        {},
        {
          $set: {
            code: req.body.code,
          },
        }
      );
    }

    return res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

//TODO: Update records

exports.deleteProject = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project || project.length == 0) {
      return res.status(404).json({
        success: false,
        error: "No project found",
      });
    }

    await Project.deleteOne({ _id: req.params.id });

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

//TODO: Delete records
