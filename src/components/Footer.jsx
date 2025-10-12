import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-branding">
          <h2>DOUBLE S ENTERPRISES</h2>
          <p>WE ARE HERE TO MAKE YOUR DREAM WEDDING A ULTIMATE REALITY.</p>
        </div>
        <div className="footer-sections">
          <div className="footer-column">
            <h4>ABOUT</h4>
            <ul>
              <li>About Us</li>
              <li>Our Story</li>
              <li>Testimonials</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Careers</li>
            </ul>
          </div>
          {/* <div className="footer-column">
            <h4>SERVICES</h4>
            <ul>
              <li>Venue</li>
              <li>Catering</li>
              <li>Decoration</li>
              <li>Band Music</li>
              <li>Attire & Gowns</li>
              <li>Photo & Video</li>
            </ul>
          </div> */}
          <div className="footer-column">
            <h4>CONTACT</h4>
            <ul>
              <li>
                <a href="tel:+919833568957">+91 98335 68957</a>
              </li>
              <li>
                <a href="mailto:shanaya@double-s.in">shanaya@double-s.in</a>
              </li>
              <li>Our Location</li>
              <li>
                <a
                  href="https://www.instagram.com/weddingsby_double_s?igsh=MWN5OGtmYjRhY2VvYg%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>User Policy</li>
              <li>Customer Support</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>Copyright ©2025. All rights reserved. rudrLabs</p>
      </div>
    </footer>
  );
};

export default Footer;
