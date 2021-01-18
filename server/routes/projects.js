const express = require("express");
const router = express.Router();
const {
  getProjects,
  addProject,
  getProject,
} = require("../controllers/project_controller");

router.route("/").get(getProjects).post(addProject);

router.route("/:id").get(getProject);

module.exports = router;
