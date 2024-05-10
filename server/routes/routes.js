const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/user/register", userController.userRegister);
router.post("/verifyotp", userController.verifyOTP);
router.post("/generate-otp", userController.generateOTP);

module.exports = router;
