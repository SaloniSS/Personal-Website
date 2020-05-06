const mongoose = require('mongoose');

const WinningProjectSchema = new mongoose.Schema({
    portfolio: {
        type: String
    },

    code: {
        type: String,
        required: [true, 'Please add a link']
    },

    title: {
        type: String,
        required: [true, 'Please add a title']
    },

    organization: {
        type: String,
        required: [true, 'Please add an organization']
    },

    date: {
        type: String,
        required: [true, 'Please add a date']
    },

    award: {
        type: String
    },

    description: {
        type: String,
        required: [true, 'Please add a description']
    },

    contribution: {
        type: String,
        required: [true, 'Please add a contribution']
    }
});

module.exports = mongoose.model('WinningProject', WinningProjectSchema);