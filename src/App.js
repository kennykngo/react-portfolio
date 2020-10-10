import React from 'react';
import { Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Hero, Navigation } from "./components"

import "./assets/scss/base.scss"

function App() {
  return (
    <Router>    
    <Navigation />
      <div className="App">
        <h1>Hi!</h1>
        <Hero />
      </div>
    
    </Router>

  );
}

export default App;
