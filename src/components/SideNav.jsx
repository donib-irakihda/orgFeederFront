import React, { useState } from "react";
import createico from "../assets/create.svg";
import deleteico from "../assets/delete.svg";
// import editico from "../assets/edit.svg";
import settingico from "../assets/icons8-settings.svg";
// import viewico from "../assets/view.svg";
import CreateModal from "./Modals/CreateModal";

const SideNav = () => {
  const [cmodal, setCmodal] = useState(false);
  const [umodal, setUmodal] = useState(false);
  const toogleCmodal = () => {
    setCmodal((prev) => !prev);
  };
  const toogleUmodal = () => {
    setUmodal((prev) => !prev);
  };

  return (
    <>
      <CreateModal />
      <div className="h-screen w-1/5 bg-gray-600 relative">
        <div className="mt-20 flex flex-col gap-10 ">
          <div className="w-11/12">
            <div>
              {/* The button to open modal */}
              <label
                htmlFor="modal"
                className="btn border-none w-full text-white bg-gray-600 p-0 h-auto flex flex-row"
              >
                <a href="#createorg">
                  <img src={createico} alt="createico" className="w-5 mx-5" />
                </a>
                Create Organisation{" "}
              </label>
            </div>

            {cmodal ? <CreateModal toogleCmodal={toogleCmodal} /> : null}
          </div>

          {/* <div>
            <button className="w-full text-white  h-auto flex flex-row">
              <img src={viewico} alt="createico" className="w-5 mx-5" />
              View All My Organisation{" "}
            </button>{" "}
            {umodal ? <UpdateModal toogleCmodal={toogleUmodal} /> : null}
          </div> */}

          {/* <div>
            <button className="w-full text-white  h-auto flex flex-row">
              <img src={editico} alt="createico" className="w-5 mx-5" />
              Update Your Organisation{" "}
            </button>{" "}
          </div> */}
          {/* <div>
            <button className="w-full text-white  h-auto flex flex-row">
              <img src={deleteico} alt="createico" className="w-5 mx-5" />
              Delete An Organisation{" "}
            </button>{" "}
          </div> */}
          <div>
            <button className="btn border-none bg-gray-600 text-white   h-auto flex flex-row">
              <img src={settingico} alt="createico" className="w-5 mx-5" />
              Settings{" "}
            </button>{" "}
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default SideNav;
