import React from "react";
import CreateModal from "./Modals/CreateModal";
import createico from "../assets/create.svg";

import { Link } from "react-router-dom";
import profileico from "../assets/profileico.svg";

const Navbar = () => {
  const logoutHandler = () => {
    localStorage.removeItem("token");
    location.reload();
  };
  return (
    <>
      <CreateModal />
      <div className="w-full text-center py-4 bg-[#3E363F] flex flex-row justify-between px-8">
        <Link className="text-white text-3xl" to="/">
          NAVBAR 🔥
        </Link>

        <div className="flex flex-row">
          {" "}
          {window.location.href == "http://localhost:5173/" ||
          "http://localhost:5173/#" ? (
            <div>
              {/* The button to open modal */}
              <label
                htmlFor="modal"
                className="btn border-none w-full bg-[#3E363F]  text-white mr-6 p-0 h-auto flex flex-row"
              >
                <a href="#createorg" className="flex flex-row">
                  <img src={createico} alt="createico" className="w-5 mx-5" />
                  Create Organisation{" "}
                </a>
              </label>
            </div>
          ) : (
            ""
          )}
          <div className="dropdown dropdown-end ">
            <label tabIndex={0} className="  text-white hover:bg-black">
              <img src={profileico} alt="profile" width={30} className="mt-2" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li onClick={logoutHandler}>
                <p className="hover:bg-red-600">→ Logout</p>
              </li>
              <li className="hover:bg-accent">
                <Link to="/profile">⚙️ Setting</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
