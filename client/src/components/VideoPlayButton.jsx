import React from "react";

import "../styles/VideoPlayButton.css";

export const VideoPlayButton = ({ onVideoTouch }) => {
  return (
    <div className="video__play__button">
      <img src="/play.png" onClick={onVideoTouch} alt="Play button" />
    </div>
  );
};
