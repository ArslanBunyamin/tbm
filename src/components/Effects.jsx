import React from "react";
import exhausted from "../assets/exhausted.png";
import depressed from "../assets/depression.png";
import neckPain from "../assets/neck.png";
import wave from "../assets/graphicsWave.png";

const Effects = () => {
  return (
    <div className="effectsCont">
      <div className="effects" id="effects">
        <div className="header">Olumsuz Etkileri</div>
        <div className="cards">
          <div className="card hidden left">
            <img className="icon" src={exhausted} />
            <div className="descCont">
              <div className="descHeader">Yorgunluk</div>
              <div className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                finibus sapien nisl, non iaculis lectus commodo id. Duis gravida
                leo quis velit dignissim ornare. Duis fringilla orci nisi.
                Mauris urna libero, venenatis pulvinar enim in, sollicitudin
                elementum magna. Pellentesque habitant morbi tristique senectus
                et netus et malesuada fames ac turpis egestas. Aliquam interdum
                ante sed eros tincidunt blandit.
              </div>
            </div>
          </div>
          <div className="card hidden bottom">
            <img className="icon" src={depressed} />
            <div className="descCont">
              <div className="descHeader">Stres</div>
              <div className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                finibus sapien nisl, non iaculis lectus commodo id. Duis gravida
                leo quis velit dignissim ornare. Duis fringilla orci nisi.
                Mauris urna libero, venenatis pulvinar enim in, sollicitudin
                elementum magna. Pellentesque habitant morbi tristique senectus
                et netus et malesuada fames ac turpis egestas. Aliquam interdum
                ante sed eros tincidunt blandit.
              </div>
            </div>
          </div>
          <div className="card hidden right">
            <img className="icon" src={neckPain} />
            <div className="descCont">
              <div className="descHeader">Erken yasta saglık problemleri</div>
              <div className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                finibus sapien nisl, non iaculis lectus commodo id. Duis gravida
                leo quis velit dignissim ornare. Duis fringilla orci nisi.
                Mauris urna libero, venenatis pulvinar enim in, sollicitudin
                elementum magna.
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={wave} className="waves" />
    </div>
  );
};

export default Effects;
