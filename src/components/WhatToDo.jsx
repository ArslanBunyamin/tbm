import React from "react";
import reading from "../assets/reading.gif";
import pilates from "../assets/pilates.gif";
import hobby from "../assets/hobby.gif";
import psychologist from "../assets/psychologist.gif";
const WhatToDo = () => {
  return (
    <div className="whatToDoCont">
      <div className="whatToDo" id="whatToDo">
        <div className="header">Ne yapabilirsiniz ?</div>
        <div className="suggestions">
          <div className="suggestion hidden left">
            <img src={reading} className="hidden" />
            <div className="descCont">
              <div className="descHeader">Teknolojisiz zamanlar yaratın</div>
              <div className="desc">
                Günlük rutininizin bir parçası olarak teknolojisiz zamanlar
                yaratın. Bu, kitap okumak, yürüyüs yapmak veya arkadaslarınızla
                zaman geçirmek gibi aktiviteleri içerebilir.
              </div>
            </div>
          </div>
          <div className="suggestion hidden right">
            <img src={pilates} className="hidden" />
            <div className="descCont">
              <div className="descHeader">Fiziksel aktiviteye zaman ayırın</div>
              <div className="desc">
                Düzenli olarak egzersiz yapmak, hem bedeninizi hem de zihninizi
                rahatlatır ve teknoloji kullanımını azaltabilir.
              </div>
            </div>
          </div>
          <div className="suggestion hidden left">
            <img src={hobby} className="hidden" />
            <div className="descCont">
              <div className="descHeader">Kendinize baska hobiler edinin</div>
              <div className="desc">
                Yemek yapmak, müzik dinlemek, el isleri yapmak veya bahçe isleri
                gibi aktiviteler size hem keyifli bir zaman geçirme fırsatı
                sunar hem de teknoloji kullanımınızı azaltabilir.
              </div>
            </div>
          </div>
          <div className="suggestion hidden right">
            <img src={psychologist} className="hidden" />
            <div className="descCont">
              <div className="descHeader">Profesyonel yardım alın</div>
              <div className="desc">
                Eger teknoloji bagımlılıgı konusunda ciddi bir sorununuz varsa,
                profesyonel yardım alabilirsiniz. Bir terapist veya danısmanla
                çalısmak size yardımcı olabilir.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatToDo;
