const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const UserOTP = require("../models/userOtp");
const nodemailer = require("nodemailer");

function generateOTP(length) {
  const digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < length; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

const sendOTPByEmail = async (email, otp) => {
  try {
    if (!email) {
      throw new Error("No recipient email address provided");
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

    const mailOptions = {
      from: process.env.SMTP_MAIL,
      to: email, // Ensure that the 'email' variable is properly defined
      subject: "OTP for User Registration",
      text: `Your OTP is: ${otp}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("OTP email sent successfully!");
  } catch (error) {
    console.error("Error sending OTP email:", error.message);
    throw error; // Rethrow the error to be handled by the caller
  }
};

const userRegister = async (req, res) => {
  const { name, email, password, mobile, department } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Please Enter All Input Data" });
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      mobile,
      department,
      password: hashedPassword,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${name}`,
    });

    await newUser.save();

    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  if (!otp) {
    console.error("No recipient email address provided");
    return; // Exit function early if email is not defined
  }

  try {
    // Retrieve OTP from the database
    const userOTP = await UserOTP.findOne({ email });

    if (!userOTP || userOTP.otp !== otp) {
      return res.status(400).json({ error: "Invalid OTP" });
    }

    // Clear the OTP after successful verification
    await UserOTP.findOneAndDelete({ email });

    res.status(200).json({ message: "OTP verified successfully" });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { userRegister, verifyOTP, generateOTP, sendOTPByEmail };
