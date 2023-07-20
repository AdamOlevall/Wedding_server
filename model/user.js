const mongoose = require('mongoose');

const User = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'firstName is required']
    },
    lastName: {
        type: String,
        required: [true, 'lastName is required']
    },
    allergy: {
        type: String,
        required: [false]
    },
    weddingDay: {
        type: String,
        required: [true, 'weddingDay is required']
    },
    transport: {
        type: String,
        required: [true, 'transport is required']
    },
});

module.exports = mongoose.model("user", User);