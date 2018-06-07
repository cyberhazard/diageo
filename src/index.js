import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './_assets/css/fonts.css';
import './_assets/css/global.css';

import App from './App';

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root')
);
