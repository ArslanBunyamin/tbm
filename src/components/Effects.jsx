import React from "react";
import wave from "../assets/effectsVawe.png";
import exhausted from "../assets/exhausted.png";
import depressed from "../assets/depression.png";
import neckPain from "../assets/neck.png";

const Effects = () => {
  return (
    <div className="effectsCont">
      <img src={wave} />
      <div className="effects" id="effects">
        <div className="card">
          <img className="icon" src={exhausted} />
          <div className="descCont">
            <div className="descHeader">yorgunluk</div>
            <div className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              finibus sapien nisl, non iaculis lectus commodo id. Duis gravida
              leo quis velit dignissim ornare. Duis fringilla orci nisi. Mauris
              urna libero, venenatis pulvinar enim in, sollicitudin elementum
              magna. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Aliquam interdum ante sed eros
              tincidunt blandit.
            </div>
          </div>
        </div>
        <div className="card">
          <img className="icon" src={depressed} />
          <div className="descCont">
            <div className="descHeader">stres</div>
            <div className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              finibus sapien nisl, non iaculis lectus commodo id. Duis gravida
              leo quis velit dignissim ornare. Duis fringilla orci nisi. Mauris
              urna libero, venenatis pulvinar enim in, sollicitudin elementum
              magna. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Aliquam interdum ante sed eros
              tincidunt blandit.
            </div>
          </div>
        </div>
        <div className="card">
          <img className="icon" src={neckPain} />
          <div className="descCont">
            <div className="descHeader">erken yaşta saglık problemleri</div>
            <div className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              finibus sapien nisl, non iaculis lectus commodo id. Duis gravida
              leo quis velit dignissim ornare. Duis fringilla orci nisi. Mauris
              urna libero, venenatis pulvinar enim in, sollicitudin elementum
              magna.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Effects;
