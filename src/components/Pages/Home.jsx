import React from "react";

import MyOrganisation from "../MyOrganisation";

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
