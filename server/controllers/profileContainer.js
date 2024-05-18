const User = require("../models/user");
//profilecontroller
const getUserProfile = async (req, res) => {
  try {
    console.log("User ID:", req.userId);

    const user = await User.findById(req.userId);

    if (!user) {
      console.error("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    console.log("User Profile:", user);

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getUserProfile };

const updateUserProfile = async (req, res) => {
  try {
    const userId = req.params.userId;
    const updatedProfile = req.body;
    const user = await User.findByIdAndUpdate(userId, updatedProfile, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res
      .status(200)
      .json({ message: "User profile updated successfully", user });
  } catch (error) {
    console.error("Error updating user profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteUserProfile = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User profile deleted successfully" });
  } catch (error) {
    console.error("Error deleting user profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getUserProfile, updateUserProfile, deleteUserProfile };
