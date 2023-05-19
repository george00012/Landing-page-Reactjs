import React, { useState } from "react";
import logo from "../nav/img/logo.svg";
import "../nav/Estilo.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("open");
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a className="navbar-brand" href="_blank">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <button
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="hamburguer-menu">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </button>

        <ul className="menu">
          <li className="menu-item">
            <a className="menu-link" href="_blank">
              About
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="_blank">
              Services
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="_blank">
              Projects
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link contact" href="_blank">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
