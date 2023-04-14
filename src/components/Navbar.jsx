import React, { useEffect } from "react";
import wave from "../assets/navbarWave.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Sling as Hamburger } from "hamburger-react";

const Navbar = () => {
  const toggle = (e) => {
    e.stopPropagation();
    document.querySelector(".links").classList.toggle("active");
    const spans = document.querySelectorAll(".span");
    spans.forEach((span) => {
      span.classList.toggle("active");
    });
  };

  return (
    <div className="navbarCont">
      <div className="navbar">
        <div className="siteName">Teknoloji Bağımlılığıyla Mücadele</div>
        <div className="links">
          <a onClick={toggle} className="link left" href="#home">
            Nedir?
          </a>
          <a onClick={toggle} className="link right" href="#effects">
            Etkileri
          </a>
          <a onClick={toggle} className="link left" href="#graphics">
            Sayısal veriler
          </a>
          <a onClick={toggle} className="link right" href="#whatToDo">
            Ne yapılmalı?
          </a>
        </div>
        <div className="hamburger" onClick={toggle}>
          <span className="span top"></span>
          <span className="span mid"></span>
          <span className="span bot"></span>
        </div>
      </div>
      <img className="navbarWave" src={wave} />
    </div>
  );
};

export default Navbar;
