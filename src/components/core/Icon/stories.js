import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '.';

/** Icon library */
import IconAlert from '../../../../assets/images/svg/alert-icon.svg';
import IconClock from '../../../../assets/images/svg/reloj-arena.svg';

storiesOf('core/Icons', module).add('Iconos Canales', () => (
  <div style={{ backgroundColor: '#000' }}>
    <ul>
      <li>
        <Icon svg={IconAlert} fill="white" />
      </li>
      <li>
        <Icon svg={IconClock} />
      </li>
    </ul>
  </div>
));
