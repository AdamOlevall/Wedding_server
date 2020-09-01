import mongoose from "mongoose";

const User = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
      },
});

module.exports = mongoose.model("user", User);