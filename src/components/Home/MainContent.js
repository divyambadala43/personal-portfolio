import React from "react";
import About from "../NavLinks/About/About";
import Navbar from "../Navbar";
import Portfolio from "../NavLinks/Portfolio";
import Blogs from "../NavLinks/Blog";

const MainContent = () => {
  return (
    <div className="main-content">
      <Navbar />
      {/* <About /> */}
      {/* <Portfolio /> */}
      <Blogs />
    </div>
  );
};

export default MainContent;
