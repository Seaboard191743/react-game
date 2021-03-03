import React from "react";
import { Switch, Route } from "react-router-dom";
import StartPage from "./components/StartPage/StartPage";
import GamePage from "./components/GamePage/GamePage";

export default function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/">
          <StartPage />
        </Route>
        <Route path="/gamepage">
          <GamePage />
        </Route>
      </Switch>
    </div>
  );
}
