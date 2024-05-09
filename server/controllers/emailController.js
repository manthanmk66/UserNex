const mongoose = require("mongoose");
const User = require("../models/user");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

function generateOTP(length) {
  const digits = "0123456789";
  let OTP = "";

  for (let i = 0; i < length; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }

  return OTP;
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

const saveOTPToUser = async (userId, otp) => {
  try {
    await User.findByIdAndUpdate(userId, { otp: otp });
  } catch (error) {
    console.error("Error saving OTP to user:", error);
    throw error;
  }
};

const sendEmail = async (req, res) => {
  const { email, userId } = req.body;
  const OTP = generateOTP(6);

  try {
    await saveOTPToUser(userId, OTP);
  } catch (error) {
    console.error("Error saving OTP to user:", error);
    return res.status(500).json({ error: "Failed to save OTP to user." });
  }

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject: "Testing Purposes",
    text: `OTP is ${OTP}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.log("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email. Please try again later." });
  }
};

module.exports = { sendEmail };
