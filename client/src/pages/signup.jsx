import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import base_url from "../services/Apis";

const Signup = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    mobile: "",
    department: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${base_url}/user/register`, inputData);
      console.log(response.data);
      toast.success("Account Registration successful! Please login.", {
        position: "top-center",
      });
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error("Registration failed. Please try again later.", {
        position: "top-center",
      });
    }
  };

  const handleInputChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center font-sans text-white">
      <Toaster />
      <div className="max-w-sm p-8 rounded-lg shadow-lg">
        <h1 className="mb-4 text-3xl font-black">Sign up</h1>
        <p className="mb-4 text-lg">
          Let's do this! Start your free trial by filling in our simple form
          below. You will be hearing from us soon!
        </p>
        <form className="mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold" htmlFor="name">
              Name
            </label>
            <input
              className="w-full py-2 px-3 rounded border border-gray-700 focus:outline-none text-black focus:border-blue-500"
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold" htmlFor="email">
              E-mail
            </label>
            <input
              className="w-full py-2 px-3 rounded border border-gray-700 focus:outline-none text-black focus:border-blue-500"
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold" htmlFor="mobile">
              Mobile
            </label>
            <input
              className="w-full py-2 px-3 rounded border border-gray-700 focus:outline-none text-black focus:border-blue-500"
              id="mobile"
              type="number"
              name="mobile"
              placeholder="Mobile"
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold" htmlFor="department">
              Department
            </label>
            <input
              className="w-full py-2 px-3 rounded border border-gray-700 focus:outline-none text-black focus:border-blue-500"
              id="department"
              type="text"
              name="department"
              placeholder="Department"
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold" htmlFor="password">
              PassWord
            </label>
            <input
              className="w-full py-2 px-3 rounded border border-gray-700 focus:outline-none text-black focus:border-blue-500"
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-6">
            <label className="flex items-center text-sm">
              <input type="checkbox" name="accept" className="mr-2" required />
              <span>
                I accept the
                <a href="#" className="text-white underline ml-1">
                  terms of use
                </a>
                and
                <a href="#" className="text-white underline ml-1">
                  privacy policy
                </a>
              </span>
            </label>
            <a href="/login" className="text-white mt-10 underline ml-1">
              Login Here
            </a>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-blue-600 text-white py-2 px-8 rounded-lg font-semibold"
              type="submit"
            >
              Create account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
