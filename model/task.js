const mongoose = require('mongoose');

const Task = mongoose.Schema({
    category: {
        type: Number,
        required: [true, 'category is required']
    },
    id: {
        type: String,
        required: [true, 'id is required']
    },
    assignee: {
        type: String,
        required: [false]
    },
    isDone: {
        type: Boolean,
        required: [true, 'isDone is required']
    },
    text: {
        type: String,
        required: [true, 'text is required']
    },
    created: {
        type: Number,
        required: [true, 'created is required']
    },
});

module.exports = mongoose.model("task", Task);