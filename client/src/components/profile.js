import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import base_url from "../services/Apis";
import loader from "../assets/loader.gif";

const ProfileCard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${base_url}/getprofile`);
        setUserData(response.data);
        setLoading(false);
        toast.success("Successfully Fetched Details.", {
          position: "top-center",
        });
      } catch (error) {
        console.error("Something Went Wrong", error);
        toast.error("Something Went Wrong.", {
          position: "top-center",
        });
      }
    };

    fetchProfile();
  }, []);

  return (
    <>
      <Toaster />
      {loading && (
        <div class="flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
          <span class="sr-only">Loading...</span>
          <div class="h-6 w-6 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div class="h-6 w-6 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div class="h-6 w-6 bg-black rounded-full animate-bounce"></div>
        </div>
      )}
      {!loading && userData && (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary to-purple-800 dark:from-blue-400 dark:to-purple-800">
          <div className="w-full max-w-md p-8 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
            <div className="flex flex-col items-center gap-y-6">
              <div className="flex flex-col items-center gap-y-2">
                <div className="shrink-0 w-20">{/* <img src={}/> */}</div>
                <div className="relative text-center">
                  <p className="font-bold text-xl text-white mb-1">
                    {userData.name}
                  </p>
                  <div className="text-sm p-0.5 inline-block rounded-md bg-gradient-to-tr from-primary to-secondary">
                    <button className="px-2 rounded-md font-bold text-white">
                      FREE
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200/70 rounded-xl px-8 py-8 w-full flex gap-y-4 flex-wrap">
                <div className="relative w-full">
                  <p className="text-sm text-gray-700">Display Name</p>
                  <p className="font-semibold">{userData.name}</p>
                </div>
                <div className="relative w-full">
                  <p className="text-sm text-gray-700">Email Id</p>
                  <p className="font-semibold">{userData.email}</p>
                </div>
                <div className="relative w-full">
                  <p className="text-sm text-gray-700">Phone Number</p>
                  <p className="font-semibold">{userData.mobile}</p>
                </div>
                {/* Additional fields */}
              </div>
              <div className="w-full flex justify-center">
                <a
                  href={"/login"}
                  className="bg-gradient-to-tr from-primary to-secondary justify-center rounded-xl py-2 px-6 inline-block text-white hover:from-secondary hover:to-primary duration-150 shadow-md"
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileCard;
