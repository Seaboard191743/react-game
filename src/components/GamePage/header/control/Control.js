import React from "react";
import SaveResult from "./saveResult/SaveResult";
import EndGame from "./endGame/EndGame";
import "./control.css";

export default function Control(props) {
  return (
    <div className="controlPanel">
      <SaveResult {...props} />
      <EndGame {...props} />
    </div>
  );
}
