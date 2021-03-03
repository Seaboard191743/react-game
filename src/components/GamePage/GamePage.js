import React, { useState, useEffect, useRef } from "react";

import "./game-page.css";

export default function GamePage() {
  const STARTING_TIME = 5;
  const textRef = useRef(null);
  const [state, setState] = useState({
    timer: STARTING_TIME,
    isActive: false,
    text: "",
    wordCount: 0,
  });
  function startGame() {
    setState((prev) => ({
      ...prev,
      isActive: true,
      timer: STARTING_TIME,
      text: "",
    }));
    textRef.current.focus();
    textRef.current.disabled = false;
  }
  function endGame() {
    setState((prev) => ({ ...prev, isActive: false }));
  }
  function handleChange(e) {
    const { value } = e.target;
    setState((prev) => ({ ...prev, text: value }));
  }
  useEffect(() => {
    if (state.isActive && state.timer > 0) {
      setTimeout(
        () => setState((prev) => ({ ...prev, timer: prev.timer - 1 })),
        1000
      );
    } else if (state.timer === 0) {
      endGame();
    }
  }, [state.isActive, state.timer]);
  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        ref={textRef}
        onChange={handleChange}
        value={state.text}
        disabled={!state.isActive}
      />
      <h4>Time remaining: {state.timer}</h4>
      <button onClick={startGame}>Start</button>
      <h1>Word count: {state.wordCount}</h1>
    </div>
  );
}
