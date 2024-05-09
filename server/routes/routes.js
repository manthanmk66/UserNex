const express = require("express");
const router = new express.Router();
const controllers = require("../controllers/userController");
const { sendEmail } = require("../controllers/emailController");
// Routes
router.post("/user/register", controllers.userregister);

router.post("/user/login", controllers.userLogin);
router.post("/sendEmail", sendEmail);

module.exports = router;
