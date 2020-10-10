import React from 'react';
import { Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import PageRenderer from "./page-renderer"
import { Hero, Navigation } from "./components"

import "./assets/scss/base.scss"

function App() {

  const user = { 
    firstName: "Kenny",
    lastName: "Ngo",
  }

  return (
    <Router>    
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/page" component={PageRenderer} />
          <Route path="/" render={()=> <Redirect to="/home" />} />
          <Route component={() => 404} />
        </Switch>
        <Hero />
    
      </div>
    </Router>

  );
}

export default App;
