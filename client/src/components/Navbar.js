import React from "react";
import { Link } from "react-router-dom";
import '../index.css';

const Navbar = () => (
    <div className="topnav">
      <Link className="navlink" to="/">Home</Link>
      <Link className="navlink" to="/ships">Ships</Link>
      <Link className="navlink" to="/berths">Berths</Link>
      <Link className="navlink" to="/passengers">Passengers</Link>
      <Link className="navlink" to="/dockOfficers">Dock Officers</Link>
      <Link className="navlink" to="/inspections">Inspections</Link>
      <Link className="navlink" to="/about">About</Link>
    </div>
  );

export default Navbar;
