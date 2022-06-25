//-- React Specific
import React from 'react';
import reportWebVitals from './utils/reportWebVitals';
import { createRoot } from 'react-dom/client';
import App from './App';
import { v4 as uuidv4 } from 'uuid'; //-- Being used to generate unique keys for react

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


// if in Development
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development'){
  console.log('dev')
  reportWebVitals(); // Having web-vitals print for awareness.  ( SRC -> https://bit.ly/CRA-vitals )
} 
// else { console.log('prod')}// production 
