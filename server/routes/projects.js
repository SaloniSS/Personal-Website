const express = require("express");
const router = express.Router();
const {
  getProjects,
  addProject,
} = require("../controllers/project_controller");
const {
  getWinningProjects,
  addWinningProject,
} = require("../controllers/winning_project_controller");
const {
  getLongProjects,
  addLongProject,
} = require("../controllers/long_project_controller");
const {
  getFeaturedProjects,
  addFeaturedProject,
} = require("../controllers/featured_project_controller");

router.route("/").get(getProjects).post(addProject);

router
  .route("/winning-projects")
  .get(getWinningProjects)
  .post(addWinningProject);

router.route("/long-projects").get(getLongProjects).post(addLongProject);

router
  .route("/featured-projects")
  .get(getFeaturedProjects)
  .post(addFeaturedProject);

module.exports = router;
