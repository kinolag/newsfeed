import React from "react";
import { HashRouter as Router } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <Router>
      <div className="center-wrapper" style={{ width: "100%" }}>
        <div className="content-area mar-5 radius-8">
          <Header />
          <Main />
        </div>
      </div>
    </Router>
  );
}

export default App;
