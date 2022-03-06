import { useEffect, useState } from "react";
import db from "./firebase";
import { Video } from "./components/Video";

import "./styles/App.css";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("reels").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, [videos]);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, user, description, song, likes, comments, shares }) => (
            <Video
              key={url}
              url={url}
              user={user}
              description={description}
              song={song}
              likes={likes}
              comments={comments}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
