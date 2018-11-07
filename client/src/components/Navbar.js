import React from "react";
import { Link } from "react-router-dom";
import '../index.css';

const Navbar = () => (
    <div className="topnav">
      <Link className="navlink" to="/">Home</Link>
      <Link className="navlink" to="/about">About</Link>
      <Link className="navlink" to="/ships">Ships</Link>
      <Link className="navlink" to="/berths">Berths</Link>
      <Link className="navlink" to="/passengers">Passengers</Link>
      <Link className="navlink" to="/dockOfficers">Dock Officers</Link>
      <Link className="navlink" to="/inspections">Inspections</Link>
      </div>
  // <ul>
  //   <li className="navlink">
  //     <Link to="/">Home</Link>
  //   </li>
  //   <li className="navlink">
  //     <Link to="/about">About</Link>
  //   </li>
  //   <li className="navlink">
  //     <Link to="/ships">Ships</Link>
  //   </li>
  //   <li className="navlink">
  //     <Link to="/berths">Berths</Link>
  //   </li>
  //   <li className="navlink">
  //     <Link to="/passengers">Passengers</Link>
  //   </li>
  //   <li className="navlink">
  //     <Link to="/dockOfficers">Dock Officers</Link>
  //   </li>
  //   <li className="navlink">
  //     <Link to="/inspections">Inspections</Link>
  //   </li>
  // </ul>
);

export default Navbar;
