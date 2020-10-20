import React from 'react';
import { Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import PageRenderer from "./page-renderer"
import { EducationSkills, Hero, Navigation } from "./components/index.jsx"

import "./assets/scss/base.scss"
import { ThemeContextProvider } from './components/theme-provider';
// import {ProjectsComp} from "./components/ui-components";
import {Experience, Projects} from "../src/components";


function App() {
  return (
    <Router>  
      <ThemeContextProvider> 
        {/* <div className="App"> */}
          <Navigation />
          <Switch>
            {/* <Route path="/page" component={PageRenderer} /> */}
            {/* <Route path="/" render={()=> <Redirect to="/home" />} /> */}
            {/* <Route component={() => 404} /> */}
          </Switch>
          <Hero />
          <EducationSkills />
          <Projects />
          <Experience />
      
        {/* </div> */}
      </ThemeContextProvider> 
    </Router>

  );
}

export default App;
