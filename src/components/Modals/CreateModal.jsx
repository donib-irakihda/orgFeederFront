import React, { useState } from "react";
import InputField from "../Shared/InputFiled";
import { createOrg } from "../../axios/axios";
import { ToastContainer, toast } from "react-toastify";

const CreateModal = ({ setToggle }) => {
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
      // console.log(res);
      toast.success("Organisations Created Succesfully");
      setToggle(true);
    } catch (err) {
      err.response.data.errors
        ? toast.error(err.response.data.errors[0].msg)
        : toast.error(err.response.data.error);
    }
  };
  return (
    <>
      <ToastContainer theme="colored" autoClose={3000} />
      <div className="modal" id="createorg">
        <div className="modal-box">
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
          <div className="modal-action">
            <a href="#" className="btn w-[5.5rem]">
              NO
            </a>
            <a href="#" className="btn w-[5.5rem]" onClick={onSubmitHandler}>
              Create
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateModal;
