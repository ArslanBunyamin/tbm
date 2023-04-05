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
                Birçok insan, teknoloji cihazlarına uzun saatler boyunca bakarak
                yorgunluk, bas agrısı, göz yorgunlugu ve uyku problemleri
                yasayabilir. Ayrıca, sosyal medya ve diger teknolojik
                uygulamaların sürekli olarak yenilenen içerikleriyle ugrasmak da
                zihinsel yorgunluga neden olabilir.
              </div>
            </div>
          </div>
          <div className="card hidden bottom">
            <img className="icon" src={depressed} />
            <div className="descCont">
              <div className="descHeader">Stres</div>
              <div className="desc">
                Teknoloji bagımlılıgı ile depresyon ve anksiyete arasında bir
                iliski olabilecegine dair bazı kanıtlar bulunmaktadır.
                Teknoloji, son derece kullanıslı ve pratik bir araç olabilirken,
                asırı kullanım bagımlılıga neden olabilir ve bu da zihinsel
                saglık üzerinde olumsuz etkilere yol açabilir.
              </div>
            </div>
          </div>
          <div className="card hidden right">
            <img className="icon" src={neckPain} />
            <div className="descCont">
              <div className="descHeader">Erken yasta saglık problemleri</div>
              <div className="desc">
                Ekran basında uzun saatler geçirmek boyun ve omuz bölgesindeki
                kaslarda agrıya neden olmakla beraber omurga egriligi, kamburluk
                gibi sorunlara sebebiyet veriyor. Bu durum özellikle de
                çocukları ve gelisme çagındaki gençleri olumsuz etkiliyor. Durus
                ve oturus bozuklugundan kaynaklanan kas gerilmeleri kas ve
                iskelet sistemi bozukluklarına yol açıyor
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
