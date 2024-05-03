import React from "react";
import toast, { Toaster } from "react-hot-toast";

const OTP = () => {
  toast.success("OTP Sent Succesfully");
  return (
    <div>
      <Toaster />

      <div className="bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center h-screen w-full">
        <div className="w-full max-w-md px-8 py-10 bg-white dark:bg-gray-950 dark:text-gray-200 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold text-center mb-6">Enter OTP</h1>
          <p className="text-gray-600 text-center mb-4">
            Code sent to +880-123456789
          </p>
          <div className="grid grid-cols-5 gap-x-4 my-2">
            {[1, 9, 6, 4, 3].map((digit, index) => (
              <div
                key={index}
                contentEditable="true"
                className="rounded-lg bg-gray-100 dark:bg-gray-800 cursor-text w-14 aspect-square flex items-center justify-center"
              >
                <span className="text-gray-700 dark:text-gray-400">
                  {digit}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600 text-sm">Didn't receive code?</p>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-2 text-sm font-medium text-center rounded text-gray-500 hover:text-blue-500">
                Request via Call
              </button>
              <button className="px-3 py-2 text-sm font-medium text-center rounded text-gray-500 hover:text-blue-500">
                Request Again (00:00:36)
              </button>
            </div>
          </div>
          <button className="w-full px-4 py-2 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md">
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTP;
