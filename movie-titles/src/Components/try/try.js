import React, { useState } from "react";
import Output from "./Output";
export default function Try() {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h1>try</h1>
      {!changedText && <Output>no change</Output>}
      {changedText && <Output>changed</Output>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
}
