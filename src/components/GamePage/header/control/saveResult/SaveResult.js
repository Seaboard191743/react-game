import React from "react";
import { useHistory } from "react-router-dom";
import "./save-result.css";

export default function SaveResult({ active, handleResult }) {
  const { push } = useHistory();
  return (
    <button
      className="saveResult"
      disabled={active}
      onClick={() => {
        handleResult(), setTimeout(() => push("/"), 2000);
      }}
    >
      Save
    </button>
  );
}
