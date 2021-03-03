import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./end-game.css";

export default function EndGame({ handleEnd, active }) {
  const { push } = useHistory();
  function goToMainPage() {
    setTimeout(() => push("/"), 2000);
  }
  return (
    <button
      onClick={() => {
        handleEnd();
        goToMainPage();
      }}
      className="endGame"
    >
      Finish
    </button>
  );
}
