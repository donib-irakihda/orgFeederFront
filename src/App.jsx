import React, { useEffect } from "react";
import SignUp from "./components/SignUp";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import ForgotPW from "./components/ForgotPW";
import ResetPw from "./components/ResetPw";
import Home from "./components/Pages/Home";
import ProtectedRoutes from "./components/protectedroutes/protected-routes";
import ProtectedLogin from "./components/protectedroutes/protected-login";
import BoardFeat from "./components/Pages/Board";
import PostExplore from "./components/Pages/PostExplore";
import BoardOP from "./components/Pages/BoardOP";

const App = () => {
  // useEffect(() => {
  //   const token = localStorage.getItem("userID");
  //   console.log(token);
  // }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/board"
          element={
            <ProtectedRoutes>
              <BoardFeat />
            </ProtectedRoutes>
          }
        ></Route>{" "}
        <Route
          path="/login"
          element={
            <ProtectedLogin>
              <Login />
            </ProtectedLogin>
          }
        ></Route>
        <Route path="/board-list" element={<BoardOP />}></Route>
        <Route path="/postexplore" element={<PostExplore />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/forgotPW" element={<ForgotPW />}></Route>
        <Route path="/ResetPassword" element={<ResetPw />}></Route>
      </Routes>
    </>
  );
};

export default App;
