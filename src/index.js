//-- React Specific
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './utils/reportWebVitals';
import { v4 as uuidv4 } from 'uuid';
import * as serviceWorkerRegistration from './utils/serviceWorkerRegistration';

//-- My imports
import './assets/css/styles.css';
import './assets/js/script.js';

 //-- In Development environment
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') console.log('dev') 
// else { console.log('prod')}// production 

ReactDOM.render(
  <React.StrictMode key={uuidv4()}>
    <App key={uuidv4()} uuidv4={uuidv4} />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register(); //-- Register service worker for pwa
reportWebVitals();
