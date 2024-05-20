const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();

const keysecret = process.env.JWT_SECRET;

const authenticate = async (req, res, next) => {
  try {
    let token;

    console.log(keysecret);

    // Check if the token is present in the cookies, body, or headers
    if (req.cookies.token) {
      token = req.cookies.token;
    } else if (req.body.token) {
      token = req.body.token;
    } else if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      // Extract token from Authorization header
      token = req.headers.authorization.replace("Bearer", "").trim();
    }

    // If token is not present, throw an error
    if (!token) {
      console.error("No token provided");
      throw new Error("No token provided");
    }

    console.log("Token:", token);
    console.log("here it comes");

    const verifytoken = jwt.verify(token, keysecret);
    console.log("not coming here");

    console.log("Decoded Token:", verifytoken);

    const rootUser = await User.findOne({ _id: verifytoken._id });

    if (!rootUser) {
      console.error("User not found");
      throw new Error("User not found");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userId = rootUser._id;

    next();
  } catch (error) {
    console.error("Authentication Error:", error.message);
    res.status(401).json({ status: 401, message: error.message });
  }
};

module.exports = authenticate;
