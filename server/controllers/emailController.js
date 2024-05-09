const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

function generateOTP(length) {
  const digits = "0123456789";
  let OTP = "";

  for (let i = 0; i < length; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }

  return OTP;
}

let transporter = nodemailer.createTransport({
  host: process.env.SMTP,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_MAIL, // generated ethereal user
    pass: process.env.SMTP_PASSWORD, // generated ethereal password
  },
});

const sendEmail = async (req, res) => {
  const { email } = req.body;
  const OTP = generateOTP(6); // Generate OTP here
  console.log(email);

  var mailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject: "Testing Purposes",
    text: `OTP is ${OTP}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions); // Send email
    console.log("Email sent successfully!");
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.log("Error sending email:", error);
    res
      .status(500)
      .json({ error: "Failed to send email. Please try again later." });
  }
};

module.exports = { sendEmail };
