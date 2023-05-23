import React from "react";
import "../footer/footer.css";
import logo from "../footer/img/logo.svg"
import Facebook from "../footer/img/icon-facebook.svg";
import Instagram from "../footer/img/icon-instagram.svg";
import Twitter from "../footer/img/icon-twitter.svg";
import Pinterest from "../footer/img/icon-pinterest.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <a className="brand" href="_blank">
          <img src={logo} alt="Logo" className="logo-footer" />
        </a>
      </div>

      <ul className="footer">
        <li className="item">
          <a className="link" href="_blank">
            About
          </a>
        </li>
        <li className="menu-item">
          <a className="link" href="_blank">
            Services
          </a>
        </li>
        <li className="menu-item">
          <a className="link" href="_blank">
            Projects
          </a>
        </li>
      </ul>

      <div className="redes-container">
        <img src={Facebook} alt="Facebook" className="redes-icon" />
        <img src={Instagram} alt="Instagram" className="redes-icon" />
        <img src={Twitter} alt="Twitter" className="redes-icon" />
        <img src={Pinterest} alt="Pinterest" className="redes-icon" />
      </div>
    </footer>
  );
};

export default Footer;
