import React from 'react';
import { Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import PageRenderer from "./page-renderer"
import { EducationSkills, Hero, Navigation } from "./components/index.jsx"

import "./assets/scss/base.scss"
import { ThemeContextProvider } from './components/theme-provider';
// import {ProjectsComp} from "./components/ui-components";
import {Experience, Projects} from "../src/components";


function App() {

  const state = {
    userIsScolled: false,
  }



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
          <Projects />
          <EducationSkills />
          <Experience />
      
        {/* </div> */}
      </ThemeContextProvider> 
    </Router>

  );
}

export default App;
