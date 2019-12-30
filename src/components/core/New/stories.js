import React from 'react';
import { storiesOf } from '@storybook/react';
import NewReadme from './README.md';

import New from '.';

storiesOf('core/New', module)
  .addParameters({
    readme: {
      sidebar: NewReadme,
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
      <New />
    </div>
  ));
