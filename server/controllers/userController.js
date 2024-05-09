const users = require("../models/user");



exports.userregister = async (req, res) => {
  const { name, email, department, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ error: "Please Enter All Input Data" });
    return;
  }

  try {
    const presuer = await users.findOne({ email: email });

    if (presuer) {
      res
        .status(400)
        .json({ error: "This User Already Exists in our database" });
    } else {
      const userregister = new users({
        name,
        email,
        department,
        password,
        image: `https://api.dicebear.com/5.x/initials/svg?seed=${name}`,
      });

      // Here you can add password hashing if needed

      const storeData = await userregister.save();
      res.status(200).json(storeData);
    }
  } catch (error) {
    res.status(400).json({ error: "Invalid Details", error });
  }
};

exports.userLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Please Enter Your Email and Password" });
  }

  try {
    const user = await users.findOne({ email: email });

    if (!user) {
      return res.status(400).json({ error: "Invalid Email or Password" });
    }

    // Handle password verification securely (replace with actual hashing logic)
    const isPasswordValid = await bcrypt.compare(password, user.password); // Assuming password hashing with bcrypt

    if (!isPasswordValid) {
      // Consider implementing rate limiting to prevent brute-force attacks
      return res.status(400).json({ error: "Invalid Email or Password" });
    }

    // OTP logic (assuming you have an `otp` field in the user model)
    if (!user.otp || !user.otpExpiry || new Date() > user.otpExpiry) {
      // Generate a new OTP (replace with your preferred OTP generation method)
      const otp = Math.floor(100000 + Math.random() * 900000);
      user.otp = otp;
      user.otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes expiry

      // Send the OTP email (replace with your email sending logic)
      await sendOtpEmail(user.email, otp);

      await user.save();

      return res.status(200).json({
        message: "A one-time password (OTP) has been sent to your email for verification.",
        otpRequired: true
      });
    }

    // User has a valid OTP, handle verification (replace with your OTP verification logic)
    // const verified = req.body.otp && req.body.otp === user.otp;
    // if (!verified) {
    //   return res.status(400).json({ error: "Invalid OTP" });
    // }

    // Successful login (replace with token generation and authentication logic)
    // ...

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
