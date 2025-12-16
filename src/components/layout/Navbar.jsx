import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Brand/Logo */}
        <div className="navbar-brand">
          <a href="/" className="brand-link">
            <span className="brand-name">Halpt</span>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="navbar-links">
          <a href="/about" className="nav-link">About</a>
          <a href="/contact" className="nav-link">Contact</a>
          <span className="nav-separator">—</span>
          <a 
            href="https://www.linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-link linkedin-link"
          >
            <span className="linkedin-icon">in</span> LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;