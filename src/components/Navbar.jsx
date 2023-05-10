import React from "react";
import CreateModal from "./Modals/CreateModal";
import createico from "../assets/create.svg";
import settingico from "../assets/icons8-settings.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const logoutHandler = () => {
    localStorage.removeItem("token");
    location.reload();
  };
  return (
    <>
      <CreateModal />
      <div className="w-full text-center py-5 bg-[#3E363F] flex flex-row justify-between p-5">
        <Link className="text-white text-3xl" to="/">
          NAVBAR 🔥
        </Link>

        <div className="flex flex-row">
          {" "}
          {window.location.href == "http://localhost:5173/" ? (
            <div>
              {/* The button to open modal */}
              <label
                htmlFor="modal"
                className="btn border-none w-full text-white bg-[#3E363F] p-0 h-auto flex flex-row"
              >
                <a href="#createorg">
                  <img src={createico} alt="createico" className="w-5 mx-5" />
                </a>
                Create Organisation{" "}
              </label>
            </div>
          ) : (
            ""
          )}
          <div className=" mx-5">
            <button className="btn border-none bg-g text-white bg-[#3E363F] hover:bg-success  h-auto flex flex-row">
              <img src={settingico} alt="createico" className="w-5 mx-5" />
              Settings{" "}
            </button>{" "}
          </div>
          <button
            type="button"
            className="btn bg-red-700 hover:bg-red-800"
            onClick={logoutHandler}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
