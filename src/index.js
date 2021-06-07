import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from '@lyket/react';
ReactDOM.render(
  <Provider apiKey="c72f55f2712e098a1f562023d435f0">
  <App />
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
