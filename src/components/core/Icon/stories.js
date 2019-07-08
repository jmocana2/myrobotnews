import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '.';

/** Icon library */
import IconAlert from '../../../../assets/images/svg/alert-icon.svg';

storiesOf('core/Icons', module).add('Iconos Canales', () => (
  <div>
    <ul>
      <li>
        <Icon svg={IconAlert} />
      </li>
    </ul>
  </div>
));
