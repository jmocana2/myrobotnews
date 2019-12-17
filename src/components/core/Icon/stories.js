import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '.';
import IconReadme from './README.md';

/** Icon library */
import { Hourglass, Alert } from '../../../assets/images/svg';

storiesOf('core/Icons', module)
  .addParameters({
    readme: {
      sidebar: IconReadme,
    },
  })
  .add('Lbrería iconos', () => (
    <div style={{ backgroundColor: '#000', color: '#FFF' }}>
      <ul
        style={{
          display: 'flex',
          listStyle: 'none',
          justifyContent: 'space-around',
        }}
      >
        <li>
          <Icon width="40px" svg={Hourglass} fill="white" />
        </li>
        <li>
          <Icon width="40px" svg={Alert} />
        </li>
      </ul>
    </div>
  ));
