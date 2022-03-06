import React from "react";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";
import { Twemoji } from "react-emoji-render";

import "../styles/VideoFooter.css";

export const VideoFooter = ({ user, description, song }) => {
  return (
    <div className="video__footer">
      <div className="video__footer__text">
        <h3>@ {user}</h3>
        <p>
          <Twemoji text={description} />
        </p>
        <div className="video__footer__ticker">
          <MusicNoteIcon className="video__footer__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="video__footer__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
};
