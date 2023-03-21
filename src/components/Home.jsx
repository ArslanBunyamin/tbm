import React, { useEffect } from "react";
import homeGif from "../assets/home.gif";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="descCont hidden left">
        <div className="header">Odaklanamıyor musunuz ?</div>
        <div className="desc">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
          erat vitae lorem faucibus suscipit eu non ipsum. Pellentesque et
          bibendum ipsum, eget placerat sapien. Phasellus et tellus quis mauris
          fringilla blandit sed quis eros. Cras porttitor erat faucibus, dictum
          massa sit amet, condimentum nibh. Ut quis quam erat. Sed ornare
          bibendum nulla sit amet scelerisque. Mauris volutpat neque non varius
          ultricies. Nulla efficitur lacinia justo, vitae gravida justo lacinia
          non. Aenean nec justo quis mauris tincidunt mattis id non sapien.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo congue
          accumsan."
        </div>
      </div>
      <img src={homeGif} className="hidden right" />
    </div>
  );
};

export default Home;
