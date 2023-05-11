import React from "react";
import Dashboard from "../Dashboard";

const Profile = () => {
  return (
    <Dashboard>
      <div className="w-screen flex justify-center bg-[#f5f5f5]">
        <div className="w-5/6 flex flex-row bg-white p-8 border rounded-2xl mt-4 shadow-md">
          <h1 className="text-xl">Account Settings</h1>
        </div>
      </div>
    </Dashboard>
  );
};

export default Profile;
