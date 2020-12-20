import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./components/login/";
import Game from "./components/game/";
import PageNotFound from "./components/page404";

function App() {
  return (
    // Application router
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/game/:playerName" exact component={Game} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
