import React from "react";
import videoo from "../assets/videoo.mp4";

const Video = () => {
  return (
    <div className="presentationCont">
      <div className="presentation" id="presentation">
        <div className="header">Video Sunum</div>
        <div className="videoCont">
          <iframe
            className="video"
            src="https://drive.google.com/file/d/1-Bfk1njwCgi0dslAeyHH-hDtVuCCc5Hp/preview"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
