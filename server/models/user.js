const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
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
});

// token generate
userSchema.methods.generateAuthtoken = async function () {
  try {
    let token23 = jwt.sign({ _id: this._id }, keysecret, {
      expiresIn: "1d",
    });

    this.tokens = this.tokens.concat({ token: token23 });
    await this.save();
    return token23;
  } catch (error) {
    res.status(422).json(error);
  }
}; // <-- Add this closing curly brace

module.exports = mongoose.model("User", userSchema);
