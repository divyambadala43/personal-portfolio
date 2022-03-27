import React from "react";
import About from "../NavLinks/About/About";
import Resume from "../NavLinks/Resume";
import Navbar from "../Navbar";
import Portfolio from "../NavLinks/Portfolio";
import Blogs from "../NavLinks/Blog";
import Contact from "../NavLinks/Contact";

const MainContent = () => {
  return (
    <div className="main-content">
      <Navbar />
      <About />
      {/* <Resume />
      <Portfolio />
      <Blogs />
      <Contact /> */}
    </div>
  );
};

export default MainContent;
