import React, { useEffect } from "react";
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

const soundPlay = (src) => {
  var audio = new Audio(src);
  audio.play();
};

const handleKeydown = (e) => {
  clips.forEach((item) => {
    if (item.label == e.key.toUpperCase()) {
      var audio = new Audio(item.sound);
      audio.play();
    }
  });
};

const renderButtonAndSound = clips.map((soundObj, key) => {
  return (
    <div
      id={soundObj.id}
      key={key}
      className="drum-pad"
      onClick={() => soundPlay(soundObj.sound)}
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
    </div>
  );
});

const DrumPad = () => {
  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
  });

  return <div className="drum-pad-container">{renderButtonAndSound}</div>;
};

export default DrumPad;
