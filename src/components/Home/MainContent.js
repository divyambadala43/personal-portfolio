import React from "react";
import About from "../NavLinks/About/About";
import Navbar from "../Navbar";


const MainContent = () => {
  return (
    <div className="main-content">
      <Navbar />
      <About />
    </div>
  );
};

export default MainContent;
