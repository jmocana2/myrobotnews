import React from 'react';
import { storiesOf } from '@storybook/react';

import Today from '.';

storiesOf('Fecha', module).add('default', () => (
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
