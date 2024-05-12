const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const profileController = require("../controllers/profileContainer");
const authenticate = require("../middleware/auth");

router.post("/user/register", userController.userRegister);
router.post("/verifyotp", userController.verifyOTP);
router.post("/generate-otp", userController.sendOTPByEmail);

// Protected route requiring JWT authentication
router.get("/getprofile", authenticate, profileController.getUserProfile);

module.exports = router;
