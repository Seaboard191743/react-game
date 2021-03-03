import React, { useState, useEffect, useRef } from "react";
import Header from "./header/Header";
import "./game-page.css";

export default function GamePage() {
  const textRef = useRef(null);
  const [level, setLevel] = useState({
    text: "Easy",
    STARTING_TIME: 60,
    index: 0,
  });
  const [state, setState] = useState({
    timer: level.STARTING_TIME,
    isActive: false,
    text: "",
    wordCount: 0,
    bestResult: [0],
  });
  function chooseLevel() {
    if (level.index < 2) {
      setLevel((prev) => ({
        ...prev,
        index: prev.index + 1,
        STARTING_TIME: prev.STARTING_TIME - 20,
      }));
      setState((prev) => ({ ...prev, timer: prev.timer - 20 }));
      if (level.index < 1) {
        setLevel((prev) => ({
          ...prev,
          text: "Hard",
        }));
      }
      if (level.index >= 1) {
        setLevel((prev) => ({
          ...prev,
          text: "World Class",
        }));
      }
    } else {
      setLevel({ text: "Easy", STARTING_TIME: 60, index: 0 });
      setState((prev) => ({ ...prev, timer: 60 }));
    }
  }

  function startGame() {
    setState((prev) => ({
      ...prev,
      isActive: true,
      timer: level.STARTING_TIME,
      text: "",
    }));
    textRef.current.focus();
    textRef.current.disabled = false;
  }
  function saveResult() {
    setState((prev) => ({
      ...prev,
      isActive: false,
      bestResult: [...prev.bestResult, prev.wordCount],
    }));
    localStorage.setItem("pb", JSON.stringify(state.bestResult));
  }

  function endGame() {
    setState((prev) => ({
      ...prev,
      isActive: false,
    }));
  }
  function handleChange(e) {
    const { value } = e.target;
    setState((prev) => ({ ...prev, text: value }));
  }
  function countWords() {
    const arr = state.text.trim().split(" ");
    const words = arr.filter((word) => word).length;
    setState((prev) => ({ ...prev, wordCount: words }));
  }
  useEffect(() => {
    if (state.isActive && state.timer > 0) {
      setTimeout(
        () => setState((prev) => ({ ...prev, timer: prev.timer - 1 })),
        1000
      );
    } else if (state.timer === 0) {
      countWords();
      endGame();
    }
  }, [state.isActive, state.timer]);
  return (
    <div className="gamePage">
      <Header
        {...level}
        active={state.isActive}
        handleClick={chooseLevel}
        handleEnd={endGame}
        handleResult={saveResult}
      />
      <h1 className="gamePage__heading">Start the Challenge!</h1>
      <textarea
        className="gamePage__text"
        ref={textRef}
        onChange={handleChange}
        value={state.text}
        disabled={!state.isActive}
      />
      <h4 className="gamePage__timer">Time remaining: {state.timer}</h4>
      <button className="start" onClick={startGame} disabled={state.isActive}>
        Start
      </button>
      <h1>Word count: {state.wordCount}</h1>
    </div>
  );
}
