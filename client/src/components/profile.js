import React from "react";

const ProfileCard = () => {
  const user = {
    name: "John Doe",
    email: "john@example.com",
  };

  return (
    user && (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary to-purple-800 dark:from-blue-400 dark:to-purple-800">
        <div className="w-full max-w-md p-8 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
          <div className="flex flex-col items-center gap-y-6">
            <div className="flex flex-col items-center gap-y-2">
              <div className="shrink-0 w-20">
                {/* <Avatar img="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /> */}
              </div>
              <div className="relative text-center">
                <p className="font-bold text-xl text-white mb-1">{user.name}</p>
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
                <p className="font-semibold">{user.name}</p>
              </div>
              <div className="relative w-full">
                <p className="text-sm text-gray-700">Email Id</p>
                <p className="font-semibold">{user.email}</p>
              </div>
              <div className="relative w-full">
                <p className="text-sm text-gray-700">Phone Number</p>
                <p className="font-semibold">999-888-7777</p>
              </div>
              <div className="relative w-full">
                <p className="text-sm text-gray-700">Password</p>
                <p className="font-semibold">********</p>
              </div>
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
    )
  );
};

export default ProfileCard;
