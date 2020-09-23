import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeSelection } from "../Actions";
// import { Howl, Howler } from "howler";

import Cev_H2 from "../Audio/Cev_H2.mp3";
import Dsc_Oh from "../Audio/Dsc_Oh.mp3";
import Heater1 from "../Audio/Heater-1.mp3";
import Heater2 from "../Audio/Heater-2.mp3";
import Heater3 from "../Audio/Heater-3.mp3";
import Heater4 from "../Audio/Heater-4_1.mp3";
import Heater6 from "../Audio/Heater-6.mp3";
import Kick_n_Hat from "../Audio/Kick_n_Hat.mp3";
import RP4_KICK_1 from "../Audio/RP4_KICK_1.mp3";

const clips = [
  { sound: Heater1, id: "Heater1", label: "Q" },
  { sound: Heater2, id: "Heater2", label: "W" },
  { sound: Heater3, id: "Heater3", label: "E" },

  { sound: Heater4, id: "Heater4", label: "A" },
  { sound: Heater6, id: "Clap", label: "S" },
  { sound: Dsc_Oh, id: "Open HH", label: "D" },

  { sound: Kick_n_Hat, id: "Kick n'Hat", label: "Z" },
  { sound: RP4_KICK_1, id: "Kick", label: "X" },
  { sound: Cev_H2, id: "Closed HH", label: "C" },
];

const soundPlay = (id) => {
  document.getElementById(id).play();
};

const handleKeydown = (e) => {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 81:
      document.getElementById("Q").play();
      break;
    case 87:
      document.getElementById("W").play();
      break;
    case 69:
      document.getElementById("E").play();
      break;

    case 65:
      document.getElementById("A").play();
      break;
    case 83:
      document.getElementById("S").play();
      break;
    case 68:
      document.getElementById("D").play();
      break;

    case 90:
      document.getElementById("Z").play();
      break;
    case 88:
      document.getElementById("X").play();
      break;
    case 67:
      document.getElementById("C").play();
      break;
  }
};

const DrumPad = () => {
  const dispatch = useDispatch();

  function handleClick(event) {
    soundPlay(event.target.value);
    dispatch(changeSelection(event.target.id));
  }

  const renderButtonAndSound = clips.map((soundObj, key) => {
    return (
      <button
        id={soundObj.id}
        key={soundObj.label}
        className="drum-pad"
        value={soundObj.label}
        onClick={handleClick}
      >
        <audio
          id={soundObj.label}
          className="clip"
          src={soundObj.sound}
          type="audio/mpeg"
        >
          Your browser does not support the audio tag.
        </audio>
        {soundObj.label}
      </button>
    );
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
  });

  return <div className="drum-pad-container">{renderButtonAndSound}</div>;
};

export default DrumPad;
