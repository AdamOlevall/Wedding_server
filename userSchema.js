const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Username is required']
    },
  })
  
  module.exports = userSchema