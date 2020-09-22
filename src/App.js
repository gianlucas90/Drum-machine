import React from "react";
import "./App.css";
import Display from "./Components/Display";
import DrumPad from "./Components/DrumPad";

function App() {
  return (
    <div className="App">
      <div id="drum-machine" className="App">
        <DrumPad />
        <Display />
      </div>
    </div>
  );
}

export default App;
