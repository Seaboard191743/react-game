import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./start-page.css";

export default function StartPage() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const dataFromLS = JSON.parse(localStorage.getItem("pb"));
    setValue(Math.max(...dataFromLS));
  }, []);
  return (
    <div className="startPage">
      <div className="container__startInstruction">
        <h1 className="startHeading">Start Typing</h1>
        <h3 className="startHeading__subtitle">Aim of the game</h3>
        <p className="startHeading__desc">
          Type in as many words as possible before the timer runs out!
        </p>
      </div>
      <h2 className="startStats__result">Your latest Result: {value}</h2>
      <Link to="gamepage">
        <button className="startButton">Open</button>
      </Link>
    </div>
  );
}
