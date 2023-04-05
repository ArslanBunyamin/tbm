import React from "react";
import wave from "../assets/navbarWave.png";

const Navbar = () => {
  return (
    <div className="navbarCont">
      <div className="navbar">
        <a href="#home" className="siteName">
          Teknoloji Bağımlılığıyla Mücadele
        </a>
        <div className="links">
          <a className="link" href="#effects">
            Etkileri
          </a>
          <a className="link" href="#graphics">
            Sayısal veriler
          </a>
          <a className="link" href="#whatToDo">
            Ne yapılmalı?
          </a>
          <a className="link" href="#home">
            page5
          </a>
        </div>
      </div>
      <img className="navbarWave" src={wave} />
    </div>
  );
};

export default Navbar;
