import React from "react";
import dotico from "../../assets/dots.svg";
import updateico from "../../assets/edit.svg";
import deleteico from "../../assets/delete.svg";
import { deleteOrg } from "../../axios/axios";

const DropMenu = ({ setdToggle, setToggle }) => {
  return (
    <>
      <div className="dropdown">
        <label tabIndex={0} className=" m-1">
          <img src={dotico} alt="dot" />
        </label>

        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 relative"
        >
          {" "}
          <li>update</li>
          <li>
            <a href="#my-modal-2" className="btn">
              <img src={deleteico} className="w-5" alt="" /> Delete
            </a>
          </li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default DropMenu;
