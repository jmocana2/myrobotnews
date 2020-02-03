import React from 'react';
import { storiesOf } from '@storybook/react';
import NewReadme from './README.md';

import New from '.';

import dataNew from '../../../utils/__mocks__/news';

storiesOf('core/New', module)
  .addParameters({
    readme: {
      sidebar: NewReadme,
    },
  })
  .add('Highlight', () => (
    <div
      style={{
        backgroundColor: '#3e50b4',
        height: '85px',
        padding: '20px 20px 0 20px',
      }}
    >
      <New dataNew={dataNew} />
    </div>
  ));
