import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Navbar.scss';
import logo from "../assets/Logo/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img className="navbar__logo" height="45px" width="45px" src={logo} alt="" />
      </div>
      <ul className="navbar__links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        {/* <li><Link to="/products">Products</Link></li> */}
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
