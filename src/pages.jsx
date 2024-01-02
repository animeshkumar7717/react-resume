import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Skills from './components/pages/skills/Skills';
import Experiences from './components/pages/experiences/Experiences';
import Educations from './components/pages/educations/Educations';
import Portfolios from './components/pages/portfolios/Portfolios';
import './App.css';
import Certification from './components/pages/certification/Certification';

function Pages() {
  return (
      <>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/skills" component={Skills} />
          <Route path="/experiences" component={Experiences} />
          <Route path="/educations" component={Educations} />
          <Route path="/certification" component={Certification} />
          {/* <Route path="/portfolios" component={Portfolios} /> */}
        </Switch>
      </>
  );
}

export default Pages;