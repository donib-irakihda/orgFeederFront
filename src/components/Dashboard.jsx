import React from "react";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import Footer from "./Footer";

const Dashboard = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="flex flex-row bg-white">{children}</div>

      <Footer />
    </div>
  );
};

export default Dashboard;
