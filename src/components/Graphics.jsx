import React from "react";
import graph from "../assets/graphic.jpg";
import graphGif from "../assets/graph.gif";
import wave from "../assets/whatToDoWave.png";

const Graphics = () => {
  return (
    <div className="graphicsCont">
      <div className="graphics" id="graphics">
        <img
          src={graph}
          className="hidden left"
          alt="www.iremyalugulubil.com"
        />

        <div className="descCont hidden right">
          <div className="header">Sayısal veriler</div>
          <div className="desc">
            "Tabloda; teknoloji bagımlılıgının cihaz, platform ve saat bazında
            agırlık yüzdeleri görülüyor. Kolay ulasılabilirlikleri ve hızlı
            arayüzleriyle büyük çogunlugu akıllı telefonlar olusturuyor. Sosyal
            medya ise kısa videolar ile anlık dopamin etkisi yaratarak
            saatlerimizi harcıyor."
          </div>
          <img src={graphGif} className="hidden" />
        </div>
      </div>
      <img src={wave} className="waves" />
    </div>
  );
};

export default Graphics;
