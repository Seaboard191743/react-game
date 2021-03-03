import React from "react";
import Level from "./level";
import ControlPanel from "./control-panel";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <Level />
      <ControlPanel />
    </header>
  );
}
