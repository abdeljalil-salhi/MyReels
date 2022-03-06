import React, { useEffect, useRef, useState } from "react";

import "../styles/Video.css";
import { VideoFooter } from "./VideoFooter";
import { VideoSidebar } from "./VideoSidebar";
import useElementOnScreen from "../hooks/useElementOnScreen";

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

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };
  const isVisibile = useElementOnScreen(options, videoRef);

  const onVideoTouch = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  useEffect(() => {
    if (isVisibile) {
      if (!playing) {
        videoRef.current.play();
        setPlaying(true);
      }
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisibile]);

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        preload="true"
        src={url}
        ref={videoRef}
        onClick={onVideoTouch}
      ></video>
      <VideoFooter user={user} description={description} song={song} />
      <VideoSidebar likes={likes} comments={comments} shares={shares} />
    </div>
  );
};
