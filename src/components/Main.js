import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import List from "./List";
import NotFound from "./NotFound";

export default function Main() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={List} />
        <Route path="/:badLink" component={NotFound} />
      </Switch>
    </Router>
  );
}
