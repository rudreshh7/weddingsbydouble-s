"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scrolling when menu is open
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        {/* Mobile Logo */}
        <div className="mobile-logo">
          <Link className="nav-home-link" href="/">
            <span className="logo-text-group">
              <img src="/images/Logo.png" alt="logo" className="logo" />
              <span className="text mobile-logo-text">DOUBLE ENTERPRISES</span>
            </span>
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className={`hamburger ${isMenuOpen ? "is-active" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Desktop Nav */}
        <ul className="nav-list desktop-nav">
          {/* <li className="nav-list-item">
            <Link href="/">HOME</Link>
          </li> */}
          <li className="nav-list-item">
            <Link href="/about">ABOUT US</Link>
          </li>
          <li className="nav-list-item">
            <Link href="/services">SERVICES</Link>
          </li>
          <li className="nav-list-item nav-home">
            <Link className="nav-home-link" href="/">
              <span className="logo-text-group">
                <span className="text">DOUBLE</span>
                <img src="/images/Logo.png" alt="logo" className="logo" />
                <span className="text">ENTERPRISES</span>
              </span>
            </Link>
          </li>
          <li className="nav-list-item">
            <Link href="/decor">GALLERY</Link>
          </li>
          <li className="nav-list-item">
            <Link href="/plan">PLANNING</Link>
          </li>
          {/* <li className="nav-list-item">
            <a href="https://www.instagram.com/weddingsby_double_s?igsh=MWN5OGtmYjRhY2VvYg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
              CONTACT
            </a>
          </li> */}
        </ul>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <div className="mobile-menu-content">
            <Link href="/" onClick={closeMenu} className="mobile-menu-logo">
              <img src="/images/Logo.png" alt="logo" className="logo" />
              <div className="mobile-logo-text">DOUBLE S ENTERPRISES</div>
            </Link>
            <ul className="mobile-nav-list">
              <li className="mobile-nav-item">
                <Link href="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className="mobile-nav-item">
                <Link href="/about" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li className="mobile-nav-item">
                <Link href="/services" onClick={closeMenu}>
                  Services
                </Link>
              </li>
              <li className="mobile-nav-item">
                <Link href="/plan" onClick={closeMenu}>
                  Plan
                </Link>
              </li>
              <li className="mobile-nav-item">
                <Link href="/decor" onClick={closeMenu}>
                  Decor
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
