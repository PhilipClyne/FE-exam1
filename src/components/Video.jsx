import React from "react";
import background from "../assets/video/Y2meta.app-Best Moment From Battlefield 2042 Trailer (Rendezook Scene)-(1080p60).mp4";

const Video = () => {
  return (
    <div className="video-background">
      <div className="overplay "></div>
      <video autoPlay muted loop>
        <source src={background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
