import React, { useState } from "react";
import InputField from "../Shared/InputFiled";
import { createOrg } from "../../axios/axios";
import { ToastContainer, toast } from "react-toastify";

const CreateModal = ({ toogleCmodal }) => {
  const [name, setName] = useState("");
  const [web, setWeb] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const onSubmitHandler = async () => {
    try {
      const res = await createOrg({
        name,
        website: web,
        phoneNumber: phone,
        address,
      });
      console.log(res);
    } catch (err) {
      err.response.data.errors
        ? toast.error(err.response.data.errors[0].msg)
        : toast.error(err.response.data.error);
    }
  };
  return (
    <>
      <ToastContainer theme="colored" autoClose={3000} />{" "}
      <div className="fixed top-0 right-0 left-0 bottom-0 z-20 flex justify-center items-center">
        <div
          className=" bg-black opacity-30 absolute top-0 left-0 bottom-0 right-0"
          onClick={toogleCmodal}
        ></div>
        <div className="absolute z-21 m-auto w-2/6">
          <h1
            className="font-bold text-sm text-white mb-2 mr-2 text-right cursor-pointer hover:opacity-80"
            onClick={toogleCmodal}
          >
            X
          </h1>
          <div className="p-10 border rounded-lg bg-white ">
            <h1 className="text-2xl font-semibold text-center">
              Create Organisation
            </h1>
            <InputField
              placeholder={"Organisation Name"}
              name="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />{" "}
            <InputField
              placeholder={"Website Of Your Organisation"}
              name="website"
              type="text"
              onChange={(e) => setWeb(e.target.value)}
            />{" "}
            <InputField
              placeholder={"Contact Of Your Organisation"}
              name="phoneNumber"
              type="text"
              value={phone}
              onChange={(e) => {
                if (isNaN(e.target.value)) return;
                setPhone(e.target.value);
              }}
            />{" "}
            <InputField
              placeholder={"Address Of Your Organisation"}
              name="address"
              type="text"
              onChange={(e) => setAddress(e.target.value)}
            />{" "}
            <button
              className="bg-success2 border rounded-md w-full px-3 py-2"
              onClick={onSubmitHandler}
            >
              <span className=" font-semibold text-xl text-white">Create</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateModal;
