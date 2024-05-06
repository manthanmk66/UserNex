const users = require("../models/user");
// const userotp = require("../models/userOtp");
const nodemailer = require("nodemailer");

const { Resend } = require("resend");

const resend = new Resend("MAIL_API");

// email config
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
});

exports.userregister = async (req, res) => {
  const { name, email, department, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ error: "Please Enter All Input Data" });
  }

  try {
    const presuer = await users.findOne({ email: email });

    if (presuer) {
      res.status(400).json({ error: "This User Allready exist in our db" });
    } else {
      const userregister = new users({
        name,
        email,
        department,
        password,
        image: `https://api.dicebear.com/5.x/initials/svg?seed=${name}`,
      });
      console.log(name);

      // here password hashing

      const storeData = await userregister.save();
      res.status(200).json(storeData);
    }
  } catch (error) {
    res.status(400).json({ error: "Invalid Details", error });
  }
};

// user send otp
exports.userOtpSend = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    res.status(400).json({ error: "Please Enter Your Email" });
  }

  try {
    const presuer = await users.findOne({ email: email });

    if (presuer) {
      const OTP = Math.floor(100000 + Math.random() * 900000);

      const existEmail = await userotp.findOne({ email: email });

      if (existEmail) {
        const updateData = await userotp.findByIdAndUpdate(
          { _id: existEmail._id },
          {
            otp: OTP,
          },
          { new: true }
        );
        await updateData.save();

        const mailOptions = {
          from: process.env.EMAIL,
          to: email,
          subject: "Sending Eamil For Otp Validation",
          text: `OTP:- ${OTP}`,
        };

        tarnsporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log("error", error);
            res.status(400).json({ error: "email not send" });
          } else {
            console.log("Email sent", info.response);
            res.status(200).json({ message: "Email sent Successfully" });
          }
        });
      } else {
        const saveOtpData = new userotp({
          email,
          otp: OTP,
        });

        await saveOtpData.save();
        const mailOptions = {
          from: process.env.EMAIL,
          to: email,
          subject: "Sending Eamil For Otp Validation",
          text: `OTP:- ${OTP}`,
        };

        tarnsporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log("error", error);
            res.status(400).json({ error: "email not send" });
          } else {
            console.log("Email sent", info.response);
            res.status(200).json({ message: "Email sent Successfully" });
          }
        });
      }
    } else {
      res.status(400).json({ error: "This User Not Exist In our Db" });
    }
  } catch (error) {
    res.status(400).json({ error: "Invalid Details", error });
  }
};

exports.userLogin = async (req, res) => {
  const { email, otp } = req.body;

  if (!otp || !email) {
    res.status(400).json({ error: "Please Enter Your OTP and email" });
    return; // Add return statement to exit the function
  }

  try {
    const otpVerification = await userotp.findOne({ email: email });

    if (otpVerification && otpVerification.otp === otp) {
      // Delete the OTP from the database once it's verified
      await userotp.deleteOne({ email: email });

      const preuser = await users.findOne({ email: email });

      // token generate
      const token = await preuser.generateAuthtoken();
      res
        .status(200)
        .json({ message: "User Login Successfully Done", userToken: token });
    } else {
      res.status(400).json({ error: "Invalid OTP" });
    }
  } catch (error) {
    res.status(400).json({ error: "Invalid Details", error });
  }
};
