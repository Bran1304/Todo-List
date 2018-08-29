
import React from 'react';
import { render } from 'react-dom';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Routes from './routes';
import reset from './css/reset.css';
import css from './css/style.css';

class AppInitializer {
  run() {
    render(
      <Routes />
      , document.getElementById('app'),
    );
  }
}

new AppInitializer().run();
