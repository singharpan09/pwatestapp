import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './service-worker';
import 'bootstrap/dist/css/bootstrap.min.css';
import swDev from './swDev'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


swDev();

