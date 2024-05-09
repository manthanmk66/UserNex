const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  department: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  otp: {
    type: String, 
    required: false,
  },
});

module.exports = mongoose.model("User", userSchema);
