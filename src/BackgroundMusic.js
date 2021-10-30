import React, { useState, useEffect } from "react";
import Sound from "./Assets/DinShagnada.mp3";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdMusicNote } from "react-icons/md";
import { MdMusicOff } from "react-icons/md";

const useAudio = (Sound) => {
  const [audio] = useState(new Audio(Sound));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    console.log("play0");
    setPlaying(true);
  }, []);
  useEffect(() => {
    console.log("play");
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    console.log("play1");
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};

const BackgroundMusic = ({ url }) => {
  const [playing, toggle] = useAudio(Sound);

  return (
    <div>
      <Button
        style={{
          position: "fixed",
          bottom: "10%",
          right: "3%",
          borderRadius: "50%",
          background: "#edd8d8",
          color: "#BD3C3C",
          border: "2px solid ",
        }}
        onClick={toggle}
      >
        {playing ? <MdMusicOff /> : <MdMusicNote />}
      </Button>
    </div>
  );
};

export default BackgroundMusic;
