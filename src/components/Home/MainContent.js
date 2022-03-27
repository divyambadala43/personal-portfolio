import React from "react";
import About from "../NavLinks/About/About";
import Navbar from "../Navbar";
import Resume from "../NavLinks/Resume";


const MainContent = () => {
  return (
    <div className="main-content">
      <Navbar />
      {/* <About /> */}
      <Resume />
    </div>
  );
};

export default MainContent;
