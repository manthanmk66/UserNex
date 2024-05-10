const bcrypt = require("bcrypt");
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
    to: email,
    subject: "OTP for User Registration",
    text: `Your OTP is: ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("OTP email sent successfully!");
  } catch (error) {
    console.error("Error sending OTP email:", error);
    throw error;
  }
};

exports.userRegister = async (req, res) => {
  const { name, email, password , mobile, department } = req.body;

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

exports.verifyOTP = async (req, res) => {
  const { email, otp } = req.body;
  console.log("Email:", email);
  console.log("OTP:", otp);

  if (!otp) {
    return res.status(400).json({ error: "Please Enter Email and OTP" });
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

exports.generateOTP = async (req, res) => {
  const { email } = req.body;

  try {
    const otp = generateOTP(6);

    // Save OTP to the database
    const newUserOTP = new UserOTP({
      email,
      otp,
    });
    await newUserOTP.save();

    // Send OTP via email
    await sendOTPByEmail(email, otp);

    res
      .status(200)
      .json({ message: "OTP generated and saved successfully", otp });
  } catch (error) {
    console.error("Error generating OTP:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};




