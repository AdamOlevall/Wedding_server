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
    kids: {
        type: String,
        required: [false]
    },
    mingle: {
        type: String,
        required: [true, 'mingle is required']
    },
    weddingDay: {
        type: String,
        required: [true, 'weddingDay is required']
    },
});

module.exports = mongoose.model("user", User);