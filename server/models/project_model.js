const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  portfolio: {
    type: String,
  },

  code: {
    type: String,
    required: [true, "Please add a link"],
  },

  title: {
    type: String,
    required: [true, "Please add a title"],
  },

  organization: {
    type: String,
    required: [true, "Please add an organization"],
  },

  date: {
    type: String,
    required: [true, "Please add a date"],
  },

  description: {
    type: String,
    required: [true, "Please add a description"],
  },

  contribution: {
    type: String,
    required: [true, "Please add a contribution"],
  },

  award: {
    type: String,
  },

  category: {
    type: String,
    required: [true, "Please add a category"],
  },

  featured: {
    tyoe: Boolean,
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
