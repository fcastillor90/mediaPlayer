import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStop,
  faPlay,
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
export const AudioControlador = ({
  data,
  currentSongIndex,
  playNext,
  playPrevious,
  togglePause,
  isPlaying,
}) => {
  const URL = "https://playground.4geeks.com/apis/fake/sound/";
  const nextSongIndex = (currentSongIndex + 1) % data.length;
  const previousSongIndex = (currentSongIndex - 1 + data.length) % data.length;
  return (
    <div className="audio-control">
      <FontAwesomeIcon
        icon={faBackwardStep}
        onClick={() => playPrevious(URL + data[previousSongIndex].url)}
        className="fa-2x"
        style={{ paddingLeft: "1rem", cursor: "pointer" }}
      >
        prev
      </FontAwesomeIcon>
      <FontAwesomeIcon
        className="fa-2x"
        icon={isPlaying ? faStop : faPlay}
        onClick={togglePause}
        style={{ paddingLeft: "1rem", cursor: "pointer" }}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        style={{ paddingLeft: "1rem", cursor: "pointer" }}
        className="fa-2x"
        icon={faForwardStep}
        onClick={() => playNext(URL + data[nextSongIndex].url)}
      >
        next
      </FontAwesomeIcon>
    </div>
  );
};
