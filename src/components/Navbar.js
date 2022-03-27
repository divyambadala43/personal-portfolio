import React, { useState } from "react";
import NavLink from "./NavLinks/NavLink";

const Navbar = () => {
  const [activeAbout, setActiveAbout] = useState(true);
  const [activeResume, setActiveResume] = useState(false);
  const [activePortfolio, setActivePortfolio] = useState(false);
  const [activeBlog, setActiveBlog] = useState(false);
  const [activeContact, setActiveContact] = useState(false);

  const activeAboutHandler = () => {
    setActiveResume(false);
    setActiveAbout(true);
    setActivePortfolio(false);
    setActiveBlog(false);
    setActiveContact(false);
  };

  const activeResumeHandler = () => {
    setActiveResume(true);
    setActiveAbout(false);
    setActivePortfolio(false);
    setActiveBlog(false);
    setActiveContact(false);
  };

  const activePortfolioHandler = () => {
    setActiveResume(false);
    setActiveAbout(false);
    setActivePortfolio(true);
    setActiveBlog(false);
    setActiveContact(false);
  };

  const activeBlogHandler = () => {
    setActiveResume(false);
    setActiveAbout(false);
    setActivePortfolio(false);
    setActiveBlog(true);
    setActiveContact(false);
  };

  const activeContactHandler = () => {
    setActiveResume(false);
    setActiveAbout(false);
    setActivePortfolio(false);
    setActiveBlog(false);
    setActiveContact(true);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <NavLink
          onClick={activeAboutHandler}
          activeAbout={activeAbout}
          text="About"
        />
        <NavLink
          onClick={activeResumeHandler}
          activeResume={activeResume}
          text="Resume"
        />
        <NavLink
          onClick={activePortfolioHandler}
          activePortfolio={activePortfolio}
          text="Portfolio"
        />
        <NavLink
          onClick={activeBlogHandler}
          activeBlog={activeBlog}
          text="Blog"
        />
        <NavLink
          onClick={activeContactHandler}
          activeContact={activeContact}
          text="Contact"
        />
      </ul>
    </nav>
  );
};

export default Navbar;
