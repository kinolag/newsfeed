import React, {Fragment} from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <Main />
      </Fragment>
    </Router>
  );
}

export default App;
