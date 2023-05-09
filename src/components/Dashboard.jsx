import React from "react";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import Footer from "./Footer";

const Dashboard = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row bg-white">
        <SideNav />

        {children}
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;
