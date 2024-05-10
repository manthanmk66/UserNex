import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios"; // Import Axios
import { useNavigate, useParams } from "react-router-dom";
import base_url from "../services/Apis";

const OTP = () => {
  const [otp, setOtp] = useState("");
  const { email } = useParams();
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${base_url}/verifyotp`, {
        email,
        otp,
      });

      if (response.status === 200) {
        toast.success("OTP verified successfully");
        Navigate("/profile");
      } else {
        toast.error("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error("Failed to verify OTP. Please try again later.");
    }
  };
  console.log(otp);

  return (
    <div>
      <Toaster />

      <div className="bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center h-screen w-full">
        <div className="w-full max-w-md px-8 py-10 bg-white dark:bg-gray-950 dark:text-gray-200 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold text-center mb-6">Enter OTP</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full text-black px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter OTP"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
            >
              Verify
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OTP;
