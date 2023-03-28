import React from "react";
import wave from "../assets/navbarWave.png";

const Navbar = () => {
  return (
    <div className="navbarCont">
      <div className="navbar">
        <a className="siteName" href="#home">
          Teknoloji Bağımlılığıyla Mücadele
        </a>
        <div className="links">
          <a className="link" href="#effects">
            Etkileri
          </a>
          <a className="link" href="#graphics">
            Sayısal veriler
          </a>
          <a className="link" href="#home">
            page3
          </a>
          <a className="link" href="#home">
            page4
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
