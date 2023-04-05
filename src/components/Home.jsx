import React from "react";
import homeGif from "../assets/home.gif";
import wave from "../assets/effectsVawe.png";

const Home = () => {
  return (
    <div className="homeCont">
      <div className="home" id="home">
        <div className="descCont hidden left">
          <div className="header">Odaklanamıyor musunuz ?</div>
          <div className="desc">
            "Teknoloji bagımlılıgı, günümüzde birçok kisinin karsılastıgı bir
            sorundur. Bu bagımlılık, odaklanma süresini olumsuz yönde
            etkileyebilir.Sosyal medya platformlarının kullanımı son yıllarda
            artmıs olsa da, dikkatimizi bir sey üzerinde yogunlastırma süremizi
            kısalttıgına dair birçok kanıt var. Sosyal medya kullanımı sırasında
            hızlı bir sekilde hareket etmek zorunda kalmamız ve birbirinden
            farklı içeriklere maruz kalmamız, odaklanma süremizi azaltıyor."
          </div>
        </div>
        <img src={homeGif} className="hidden" />
      </div>
      <img src={wave} className="waves" />
    </div>
  );
};

export default Home;
