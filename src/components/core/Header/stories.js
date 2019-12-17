import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from '.';
import HeaderReadme from './README.md';

storiesOf('core/Header', module)
  .addParameters({
    readme: {
      sidebar: HeaderReadme,
    },
  })
  .add('default', () => <Header />);
