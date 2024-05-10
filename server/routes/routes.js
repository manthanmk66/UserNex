const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const profileController = require("../controllers/profileContainer");

router.post("/user/register", userController.userRegister);
router.post("/verifyotp", userController.verifyOTP);
router.post("/generate-otp", userController.generateOTP);

router.get("/getprofile", profileController.getUserProfile);

module.exports = router;
