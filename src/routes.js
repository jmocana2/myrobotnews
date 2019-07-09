import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Today from './components/core/Today/view';

const routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/home" component={App} />
      <Route exact path="/new" component={App} />
      <Route exact path="/today" component={Today} />
    </Switch>
  </Router>
);

export default routes;
