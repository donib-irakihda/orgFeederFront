import React from "react";
import SideNav from "../SideNav";
import Footer from "../Footer";
import Navbar from "../Navbar";
import MyOrganisation from "../MyOrganisation";
import { Route, Routes } from "react-router-dom";
import Board from "./Board";
import PostExplore from "./PostExplore";
import Dashboard from "../Dashboard";

const Home = () => {
  //   const [modal, setModal] = useState(false);
  return (
    <>
      <Dashboard>
        <MyOrganisation />
      </Dashboard>
    </>
  );
};

export default Home;
