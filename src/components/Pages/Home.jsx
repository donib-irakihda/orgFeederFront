import React, { useState } from "react";
import SideNav from "../SideNav";
import Footer from "../Footer";
import Organisations from "../Organisations";
import Navbar from "../Navbar";
import CreateModal from "../Modals/CreateModal";
import MyOrganisation from "../MyOrganisation";

const Home = () => {
  //   const [modal, setModal] = useState(false);
  return (
    <>
      <Navbar />
      <div className="flex flex-row bg-slate-50">
        <SideNav />
        <MyOrganisation />

        {/* <Organisations /> */}
      </div>

      <Footer />
    </>
  );
};

export default Home;
