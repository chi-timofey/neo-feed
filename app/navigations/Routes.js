import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NeoFeed from 'containers/NeoFeed';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={NeoFeed} exact />
      </Switch>
    </Router>
  );
};

export default Root;

