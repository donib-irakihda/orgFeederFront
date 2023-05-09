import React from "react";

const Navbar = () => {
  const logoutHandler = () => {
    localStorage.removeItem("token");
    location.reload();
  };
  return (
    <>
      <div className="w-full text-center py-5 bg-gray-700 flex flex-row justify-between p-5">
        <p className="text-white text-2xl">NAVBAR</p>
        <button
          type="button"
          className="btn bg-success2"
          onClick={logoutHandler}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Navbar;
