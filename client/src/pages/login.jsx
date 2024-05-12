import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import base_url from "../services/Apis";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("in handlesubmit");

    try {
      if (email === "") {
        toast.error("Please Enter EmailId");
      } else if (!email.includes("@")) {
        toast.error("Please Enter Valid Email");
      } else {
        // Send request to generate OTP
        const response = await axios.post(`${base_url}/generate-otp`, {
          email,
        });
        console.log("Response:", response.data);
        navigate(`/otppage/${email}`);
        toast.success("OTP Sent Successfully");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send OTP. Please try again later.");
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center font-sans text-white">
      <Toaster />
      <div className="max-w-sm p-8 rounded-lg shadow-lg">
        <h1 className="mb-4 text-3xl font-black">Login</h1>
        <p className="mb-4 text-lg">
          Let's do this! Start your free trial by filling in our simple form
          below. You will be hearing from us soon!
        </p>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <label className="block text-sm font-semibold" htmlFor="email">
              Email
            </label>
            <input
              className="w-full py-2 px-3 rounded border text-black border-gray-700 focus:outline-none focus:border-blue-500"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <a href="/signup" className="text-white mt-10 underline ml-1">
              Signup Here
            </a>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-blue-600 text-white py-2 px-8 rounded-lg font-semibold"
              type="submit"
            >
              Send OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
