import React from 'react';
import { Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Hero, Navigation } from "./components"

import "./assets/scss/base.scss"

function App() {
  return (
    <Router>    
      <div className="App">
        <Navigation />
        <Switch>

        </Switch>
        <Hero />
    
      </div>
    </Router>

  );
}

export default App;
