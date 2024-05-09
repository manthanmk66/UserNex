const express = require("express");
const router = new express.Router();
const userController = require("../controllers/userController");
const emailController = require("../controllers/emailController");

// Routes
router.post("/user/register", userController.userRegister);
router.post("/user/login", userController.userLogin);
router.post("/verify-otp", userController.verifyOTP);
router.post("/sendEmail", emailController.sendEmail); // Corrected import and function name

module.exports = router;
