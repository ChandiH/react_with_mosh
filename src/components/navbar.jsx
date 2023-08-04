import React from "react";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">Navbar {props.totalCounters}</span>
    </nav>
  );
};

export default NavBar;
