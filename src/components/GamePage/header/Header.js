import React from "react";
import Level from "./level";
import Control from "./control/Control";
import "./header.css";

export default function Header(props) {
  return (
    <header className="header">
      <Level {...props} />
      <Control {...props} />
    </header>
  );
}
