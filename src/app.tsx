import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./navigation";
import MultiplicationTable from "./multiplication-table";

const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <div className="container mt-4">
        <Switch>
          <Route path="/:multiplicationTable">
            <MultiplicationTable />
          </Route>
          <Route path="*">
            <MultiplicationTable />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
