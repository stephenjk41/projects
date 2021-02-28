import React from 'react';
import Navigation from './nav'
import Portfolio from './portfolio'
import About from './about'
import LatestDrop from './latest-drop'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="main-page">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/" exact component={LatestDrop} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
