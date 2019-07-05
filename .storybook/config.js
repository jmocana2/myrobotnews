import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { addReadme } from 'storybook-readme';
import { ThemeProvider } from 'styled-components';
import  Theme  from '../src/config/themes';

const req = require.context('../src/components/', true, /stories\.js$/);

addDecorator(addReadme);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator((story) => (
  <ThemeProvider theme={Theme}> 
    {story()} 
  </ThemeProvider>
));

configure(loadStories, module);
