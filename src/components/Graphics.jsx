import React from "react";
import graph from "../assets/graphic.jpg";
import graphGif from "../assets/graph.gif";

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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
            erat vitae lorem faucibus suscipit eu non ipsum. Pellentesque et
            bibendum ipsum, eget placerat sapien. Phasellus et tellus quis
            mauris fringilla blandit sed quis eros. Cras porttitor erat
            faucibus, dictum massa sit amet, condimentum nibh."
          </div>
          <img src={graphGif} className="hidden right" />
        </div>
      </div>
    </div>
  );
};

export default Graphics;
