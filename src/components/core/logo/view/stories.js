import React from 'react';
import { storiesOf } from '@storybook/react';
import LogoReadme from './README.md';

import Logo from '.';

storiesOf('core/Logo', module)
  .addParameters({
    readme: {
      sidebar: LogoReadme,
    },
  })
  .add('default', () => (
    <div
      style={{
        backgroundColor: '#3e50b4',
        height: '85px',
        padding: '20px 20px 0 20px',
      }}
    >
      <Logo />
    </div>
  ));
