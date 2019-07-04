import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import './index.css';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';
import Theme from './config/themes';

ReactDOM.render(
  <div style={{ backgroundColor: 'red' }}>
    <ThemeProvider theme={Theme}>
      <Routes />
    </ThemeProvider>
  </div>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
