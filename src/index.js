import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import './index.css';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';
import Theme, { GlobalStyle } from './config/themes';

const styleNode = document.createComment('insertion-point-jss');
document.head.insertBefore(styleNode, document.head.firstChild);

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  insertionPoint: 'insertion-point-jss',
});

ReactDOM.render(
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <ThemeProvider theme={Theme}>
      <React.Fragment>
        <GlobalStyle />
        <Routes />
      </React.Fragment>
    </ThemeProvider>
  </JssProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
