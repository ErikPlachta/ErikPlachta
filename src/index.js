import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './utils/reportWebVitals';
import { v4 as uuidv4 } from 'uuid';

//-- Service Worker
import * as serviceWorkerRegistration from './utils/serviceWorkerRegistration';

//-- My imports
import './assets/css/styles.css';
import './assets/js/script.js';

const container = document.getElementById('root');
const root = createRoot(container); // 
root.render(
  <React.StrictMode key={uuidv4()}>
    <App key={uuidv4()} uuidv4={uuidv4} />
  </React.StrictMode>,
);

// if in Development, report vitals and print to log for awareness
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development'){
  console.log('dev');
  reportWebVitals(); // ( SRC -> https://bit.ly/CRA-vitals )
} 

serviceWorkerRegistration.register(); //-- Register service worker for pwa
