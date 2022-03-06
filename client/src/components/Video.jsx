import React, { useRef, useState } from "react";

import "../styles/Video.css";
import { VideoFooter } from "./VideoFooter";
import { VideoSidebar } from "./VideoSidebar";

export const Video = ({
  url,
  user,
  description,
  song,
  likes,
  comments,
  shares,
}) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoTouch = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        src={url}
        ref={videoRef}
        onClick={onVideoTouch}
      ></video>
      <VideoFooter
        user={user}
        description={description}
        song={song}
      />
      <VideoSidebar likes={likes} comments={comments} shares={shares} />
    </div>
  );
};
