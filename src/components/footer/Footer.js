import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="footer-section links">
          <h2>Links</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Projects</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section social">
          <h2>Social</h2>
          <ul>
            <li>
              <a href="https://twitter.com/omgabuilds" target="_blank" rel="noreferrer">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/omegaladon" target="_blank" rel="noreferrer">
                <i className="fa fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Tyrus Chuang | Designed by Tyrus Chuang</p>
      </div>
    </footer>
  );
}

export default Footer;
