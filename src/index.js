//-- Layer 1: ROOT for runnning React server

//-- React Specific
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './utils/reportWebVitals';

//-- Being used to generate unique keys for react
import { v4 as uuidv4 } from 'uuid';

//-- My imports
import './assets/css/styles.css';
import './assets/js/script.js';

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') 
{console.log('dev')}  // development
// else { console.log('prod')}// production 


ReactDOM.render(
  <React.StrictMode key={uuidv4()}>
    <App key={uuidv4()} uuidv4={uuidv4} />
  </React.StrictMode>,
  document.getElementById('root')
);

// Having web-vitals print for awarness.  ( SRC -> https://bit.ly/CRA-vitals )
reportWebVitals();
