import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchAppBarReadme from './README.md';

import SearchAppBar from '.';

storiesOf('core/SearchAppBar', module)
  .addParameters({
    readme: {
      sidebar: SearchAppBarReadme,
    },
  })
  .add('default', () => (
    <div
      style={{       
        height: '40px'        
      }}
    >
      <SearchAppBar />
    </div>
  ));
