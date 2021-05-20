const mongoose = require('mongoose');

const User = mongoose.Schema({
    dayBefore: {
        type: String,
        required: [true, 'dayBefore is required']
    },
    firstName: {
        type: String,
        required: [true, 'firstName is required']
    },
    fish: {
        type: String,
        required: [true, 'fish is required']
    },
    lastName: {
        type: String,
        required: [true, 'lastName is required']
    },
    mail: {
        type: String,
        required: [true, 'mail is required']
    },
    meat: {
        type: String,
        required: [true, 'meat is required']
    },
    phone: {
        type: String,
        required: [true, 'phone is required']
    },
    vegan: {
        type: String,
        required: [true, 'vegan is required']
    },
    vegetarian:{
        type: String,
        required: [true, 'vegetarian is required']
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