import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/app';
import TodoItems from './components/todoItems/todoItems.container';

export default () => (
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={TodoItems} />
      </Switch>
    </App>
  </Router>
)
