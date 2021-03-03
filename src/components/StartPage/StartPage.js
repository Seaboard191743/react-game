import React from "react";
import { Link } from "react-router-dom";

import "./start-page.css";

export default function StartPage() {
  return (
    <div className="startPage">
      <div className="container__startInstruction">
        <h1 className="startHeading">Start Typing</h1>
        <h3 className="startHeading__subtitle">Aim of the game</h3>
        <p className="startHeading__desc">
          Type in as many numbers as possible before the timer runs out!
        </p>
      </div>
      <h2 className="startStats__result">Personal best: 0</h2>
      <Link to="gamepage">
        <button className="startButton">Open</button>
      </Link>
    </div>
  );
}
