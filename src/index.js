import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/styles.css';
import './assets/js/script.js';
import App from './App';
import reportWebVitals from './utils/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Having web-vitals print for awarness.  ( SRC -> https://bit.ly/CRA-vitals )
reportWebVitals();
