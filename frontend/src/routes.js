import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Timeline from './pages/Timeline';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/timeline" component={Timeline} />
      </Switch>
    </BrowserRouter>
  );
}
