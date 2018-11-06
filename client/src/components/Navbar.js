import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/ships">Ships</Link>
    </li>
    <li>
      <Link to="/berths">Berths</Link>
    </li>
    <li>
      <Link to="/passengers">Passengers</Link>
    </li>
    <li>
      <Link to="/dockOfficers">Dock Officers</Link>
    </li>
  </ul>
);

export default Navbar;
