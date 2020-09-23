import React from "react";
import { useSelector } from "react-redux";

const Display = () => {
  const selection = useSelector((state) => state.selector);

  return (
    <div id="display">
      <p>{selection}</p>
    </div>
  );
};

export default Display;
