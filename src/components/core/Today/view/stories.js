import React from 'react';
import { storiesOf } from '@storybook/react';
import TodayReadme from './README.md';

import Today from '.';

storiesOf('core/Fecha', module)
  .addParameters({
    readme: {
      sidebar: TodayReadme,
    },
  })
  .add('default', () => (
    <div
      style={{
        backgroundColor: '#3e50b4',
        height: '67px',
        padding: '20px',
      }}
    >
      <Today />
    </div>
  ));
