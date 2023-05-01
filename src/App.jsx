import React from "react";
import SignUp from "./components/SignUp";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import ForgotPW from "./components/ForgotPW";
import ResetPw from "./components/ResetPw";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/forgotPW" element={<ForgotPW />}></Route>
        <Route path="/ResetPassword" element={<ResetPw />}></Route>
      </Routes>
    </>
  );
};

export default App;
