import React from "react";

const NavLink = ({
  text,
  activeAbout,
  activeResume,
  activePortfolio,
  activeBlog,
  activeContact,
  onClick,
}) => {
  return (
    <li className="navbar-item">
      <button
        onClick={onClick}
        className={`navbar-link ${
          activeAbout ||
          activeResume ||
          activePortfolio ||
          activeBlog ||
          activeContact
            ? "active"
            : ""
        }`}
        data-nav-link
      >
        {text}
      </button>
    </li>
  );
};

export default NavLink;
