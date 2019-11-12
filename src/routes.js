import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/** views */
import Home from './components/containers/Home';

const routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
);

export default routes;
