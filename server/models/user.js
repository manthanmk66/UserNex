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
  tokens: [{ token: { type: String, required: true } }], // Define tokens array
});

// Define your method to generate auth token
userSchema.methods.generateAuthtoken = async function () {
  try {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // Concatenate token to tokens array
    this.tokens = this.tokens.concat({ token });
    await this.save();
    return token;
  } catch (error) {
    throw new Error(error); // Throw error for proper handling where this method is called
  }
};

module.exports = mongoose.model("User", userSchema);
