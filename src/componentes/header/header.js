import React from "react";
import "../header/header.css";
import arrow from "../header/img/icon-arrow-down.svg"

const Header = () => {
  return (
    <div className="content-header">
      <h1>We are creatives</h1>
      <div media="(max-width: 768px)" className="img-movil" />
      <div media="(min-width: 768px)" className="img-pc" />
      <img src={arrow} alt="arrow" className="arrow"/>
    </div>
  );
};

export default Header;
