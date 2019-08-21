import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import { addReadme } from 'storybook-readme';
import { ThemeProvider } from 'styled-components';
import  { GlobalStyle }  from '../src/config/themes';
import Theme from '../src/config/themes';

const req = require.context('../src/components/', true, /stories\.js$/);

const styleNode = document.createComment('insertion-point-jss');
document.head.insertBefore(styleNode, document.head.firstChild);

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  insertionPoint: 'insertion-point-jss',
});

addDecorator(addReadme);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator((story) => (
<JssProvider jss={jss} generateClassName={generateClassName}>
  <ThemeProvider theme={Theme}>     
    <React.Fragment>
      <GlobalStyle />   
      {story()} 
    </React.Fragment>
  </ThemeProvider>
</JssProvider>
));

configure(loadStories, module);
