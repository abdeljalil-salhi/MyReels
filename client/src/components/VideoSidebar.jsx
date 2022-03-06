import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

import "../styles/VideoSidebar.css";

export const VideoSidebar = ({ likes, comments, shares }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="video__sidebar">
      <div className="video__sidebar__button">
        {liked ? (
          <FavoriteIcon className="favorite" onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon
            className="favorite"
            onClick={(e) => setLiked(true)}
          />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="video__sidebar__button">
        <MessageIcon />
        <p>{comments}</p>
      </div>
      <div className="video__sidebar__button">
        <ShareIcon />
        <p>{shares}</p>
      </div>
    </div>
  );
};
