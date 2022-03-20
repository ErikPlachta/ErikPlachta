//-- React Specific
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './utils/reportWebVitals';

//-- 
import { v4 as uuidv4 } from 'uuid';

//-- Mine
import './assets/css/styles.css';
import './assets/js/script.js';

ReactDOM.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Having web-vitals print for awarness.  ( SRC -> https://bit.ly/CRA-vitals )
reportWebVitals();
