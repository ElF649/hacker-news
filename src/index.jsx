import React from 'react';
import { render } from 'react-dom';
import { App } from './components/App/App';
import './index.css';
import reportWebVitals from './reportWebVitals';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
