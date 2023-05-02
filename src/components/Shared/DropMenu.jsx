import React from "react";
import dotico from "../../assets/dots.svg";
import updateico from "../../assets/edit.svg";
import deleteico from "../../assets/delete.svg";

const DropMenu = () => {
  return (
    <div className="group inline-block">
      <button>
        <img src={dotico} alt="dot" />.
      </button>
      <div className="absolute hidden border rounded shadow-md pt-1 text-gray-700 text-start group-hover:flex group-hover:flex-col group-hover:z-50">
        <button
          className="flex flex-row bg-white  rounded py-2 px-4 hover:bg-gray-400  w-32"
          href="#"
        >
          <img src={updateico} className="w-5" alt="" /> Update
        </button>

        <button
          className=" flex flex-row bg-white   rounded py-2 px-4 hover:bg-gray-400  w-32"
          href="#"
        >
          <img src={deleteico} className="w-5" alt="" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default DropMenu;
