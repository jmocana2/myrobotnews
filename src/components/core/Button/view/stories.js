import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '.';
import ButtonReadme from './README.md';

storiesOf('core/Buttons', module)
  .addParameters({
    readme: {
      sidebar: ButtonReadme,
    },
  })
  .add('type buttons', () => (
    <div>
      <ul
        style={{
          display: 'flex',
          listStyle: 'none',
          justifyContent: 'space-around',
        }}
      >
        <li>
          <Button color="lightPrimary">lightPrimary</Button>
        </li>
        <li>
          <Button color="primary">primary</Button>
        </li>
        <li>
          <Button color="darkPrimary">darkPrimary</Button>
        </li>
        <li>
          <Button color="accent">accent</Button>
        </li>
        <li>
          <Button color="light">light</Button>
        </li>
        <li>
          <Button color="dark">dark</Button>
        </li>
      </ul>
    </div>
  ));
