import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';

import './style.css';
import './assets/material-icons.css';

if(module.hot)
    module.hot.accept();

const rootElement = document.getElementById('root');

ReactDOM.render(<App/>, rootElement);