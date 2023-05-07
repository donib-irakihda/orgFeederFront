import React from "react";
import SideNav from "../SideNav";
import Footer from "../Footer";
import Navbar from "../Navbar";
import MyOrganisation from "../MyOrganisation";
import { Route, Routes } from "react-router-dom";
import Board from "./Board";

const Home = () => {
  //   const [modal, setModal] = useState(false);
  return (
    <>
      <Navbar />
      <div className="flex flex-row bg-white">
        <SideNav />

        <Routes>
          <Route path="/" element={<MyOrganisation />}></Route>
          <Route path="/board" element={<Board />}></Route>
        </Routes>
      </div>

      <Footer />
    </>
  );
};

export default Home;
