import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/signup");
  };

  useEffect(() => {}, []);

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center font-sans text-white">
      <div className="max-w-sm p-8 rounded-lg shadow-lg">
        <h1 className="mb-4 text-3xl font-black">Sign up</h1>
        <p className="mb-4 text-lg">
          Let's do this! Start your free trial by filling in our simple form
          below. You will be hearing from us soon!
        </p>
        <form className="mb-4">
          <div className="mb-4">
            <label className="block text-sm font-semibold" htmlFor="name">
              Name
            </label>
            <input
              className="w-full py-2 px-3 rounded border border-gray-700 focus:outline-none text-white focus:border-blue-500"
              id="name"
              type="text"
              placeholder="Name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold" htmlFor="email">
              E-mail
            </label>
            <input
              className="w-full py-2 px-3 rounded border border-gray-700 focus:outline-none text-white focus:border-blue-500"
              id="email"
              type="text"
              placeholder="Email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold" htmlFor="Department">
              Department
            </label>
            <input
              className="w-full py-2 px-3 rounded border border-gray-700 focus:outline-none text-white focus:border-blue-500"
              id="department"
              type="text"
              placeholder="Department"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold" htmlFor="department">
              Department
            </label>
            <input
              className="w-full py-2 px-3 rounded border border-gray-700 focus:outline-none text-white focus:border-blue-500"
              id="department"
              type="password"
              placeholder="Password"
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
              onClick={handleSubmit}
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
