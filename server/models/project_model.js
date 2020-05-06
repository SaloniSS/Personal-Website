const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    link: {
        type: String,
        required: [true, 'Please add a link']
    },

    title: {
        type: String,
        required: [true, 'Please add a link']
    },

    organization: {
        type: String,
        required: [true, 'Please add a link']
    },

    date: {
        type: String,
        required: [true, 'Please add a link']
    },

    award: {
        type: String
    },

    description: {
        type: String,
        required: [true, 'Please add a link']
    },

    contribution: {
        type: String,
        required: [true, 'Please add a link']
    }
});

module.exports = mongoose.model('Project', ProjectSchema);