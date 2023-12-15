import React from "react";
import { useFetch } from "../../utils/useFetch";

import ListGroup from "react-bootstrap/ListGroup";
import { AudioControlador} from "./audioControlador";

export const Playlist = () => {
  const URL = "https://playground.4geeks.com/apis/fake/sound/";

  const [data] = useFetch(`${URL}/songs`);
  const audioRef = React.useRef(null);
  const [currentSongIndex, setCurrentSongIndex] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);

  function playSong(songURL, index) {
    audioRef.current.src = songURL;
    audioRef.current.play();
    setIsPlaying(true);
    setCurrentSongIndex(index);
  }

  function playNext(songURL) {
    audioRef.current.src = songURL;
    audioRef.current.play();
    setIsPlaying(true);
    setCurrentSongIndex((currentSongIndex + 1) % data.length);
  }

  function playPrevious(songURl) {
    audioRef.current.src = songURl;
    audioRef.current.play();
    setIsPlaying(true);
    setCurrentSongIndex((currentSongIndex - 1 + data.length) % data.length);
  }

  function togglePause() {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="container-fluid custom ">
      {data.map((song, index) => {
        return (
          <ul variant="flush" key={song.id} className="list">
            <li
              onClick={() => playSong(URL + song.url, index)}
              className={
                index === currentSongIndex ? "list-item selected" : "list-item"
              }
            >
              <span>{index + 1}</span>
              <p>{song.name} -</p>
            </li>
            <hr />
          </ul>
        );
      })}
      <AudioControlador
        data={data}
        playNext={playNext}
        playPrevious={playPrevious}
        currentSongIndex={currentSongIndex}
        togglePause={togglePause}
        isPlaying={isPlaying}
      />

      <audio ref={audioRef} controls></audio>
    </div>
  );
};
