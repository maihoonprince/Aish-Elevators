// Navbar.jsx
import React from 'react';
import '../styles/components/Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">AISH ELEVATORS</div>
      <ul className="navbar__links">
        <li>Home</li>
        <li>Services</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
