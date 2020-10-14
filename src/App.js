import React from 'react';
import { Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import PageRenderer from "./page-renderer"
import { Hero, Navigation } from "./components/index.jsx"

import "./assets/scss/base.scss"
import { ThemeContextProvider } from './components/theme-provider';
import {ProjectsComp} from "./components/ui-components"

function App() {

  const user = { 
    firstName: "Kenny",
    lastName: "Ngo",
  }

  return (
    <Router>  
      <ThemeContextProvider> 
        {/* <div className="App"> */}
          <Navigation />
          {/* <ProjectsComp deployLink="https://google.com" title="COVID Dashboard"  /> */}
          <Switch>
            <Route path="/page" component={PageRenderer} />
            <Route path="/" render={()=> <Redirect to="/home" />} />
            <Route component={() => 404} />
          </Switch>
          <Hero />
      
        {/* </div> */}
      </ThemeContextProvider> 
    </Router>

  );
}

export default App;
