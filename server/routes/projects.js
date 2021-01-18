const express = require("express");
const router = express.Router();
const {
  getProjects,
  addProject,
  getProject,
  updateProject,
  deleteProject,
} = require("../controllers/project_controller");

router.route("/").get(getProjects).post(addProject);

router.route("/:id").get(getProject).patch(updateProject).delete(deleteProject);

module.exports = router;
