import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./navigation";
import Addition from "./addition";
import Multiplication from "./multiplication";

const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <div className="container mt-4">
        <Switch>
          <Route path="/addition/:term">
            <Addition />
          </Route>
          <Route path="/addition">
            <Addition />
          </Route>
          <Route path="/subtraktion">
            <Multiplication />
          </Route>
          <Route path="/multiplikation/:table">
            <Multiplication />
          </Route>
          <Route path="/multiplikation">
            <Multiplication />
          </Route>
          <Route path="/division">
            <Multiplication />
          </Route>
          <Route path="*">
            <Multiplication />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
