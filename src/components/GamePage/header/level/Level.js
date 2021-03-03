import React, { useState } from "react";
import "./level.css";

export default function Level({ text, active, handleClick }) {
  return (
    <div className="levelContainer">
      <button onClick={handleClick} className="level" disabled={active}>
        {text}
      </button>
    </div>
  );
}
