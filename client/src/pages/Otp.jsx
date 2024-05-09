import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const OTP = () => {
  const [otp, setOtp] = useState("");

  const handleInputChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp }),
      });

      if (response.ok) {
        const data = await response.json();
        // Handle successful OTP verification
        console.log(data);
        toast.success("OTP verified successfully");
      } else {
        // Handle failed OTP verification
        toast.error("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error("Failed to verify OTP. Please try again later.");
    }
  };

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
              onChange={handleInputChange}
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
