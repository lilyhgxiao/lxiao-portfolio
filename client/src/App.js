/*  React components */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

/* Importing own components */
import Homepage from "./react-components/Homepage";
import Projects from "./react-components/Projects_List";
import Resume from "./react-components/Resume";
import About from "./react-components/About";

import ProjectFlameKeeper from "./react-components/Projects/flamekeeper";
import ProjectPetLabs from "./react-components/Projects/petlabs";

/* Importing CSS */
import "./App.css";

function App() {
    return (
      <div>
        <Helmet>
          <title>Lily Xiao</title>
          <link href="https://fonts.googleapis.com/css?family=Oxanium:600|Karla:50,400|Ubuntu:100,400,600|Titillium+Web:300|Open+Sans&display=swap" rel="stylesheet"></link>
        </Helmet>
        <Router>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/home" exact component={Homepage} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/resume" exact component={Resume} />
            <Route path="/about" exact component={About} />

            <Route path="/flame_keeper" exact component={ProjectFlameKeeper} />
            <Route path="/petlabs" exact component={ProjectPetLabs} />
          </Switch>
        </Router>
      </div>
    );
  }

export default App;
