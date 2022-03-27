import React from "react";
import About from "../NavLinks/About/About";
import Navbar from "../Navbar";
import Portfolio from "../NavLinks/Portfolio";

const MainContent = () => {
  return (
    <div className="main-content">
      <Navbar />
      {/* <About /> */}
      <Portfolio />
    </div>
  );
};

export default MainContent;
