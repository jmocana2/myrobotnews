import React from 'react';
import injectSheet from 'react-jss';
import { styles } from './style'; 

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.


const Button = ({classes, children, active}) => (
  <button className={classes.myButton} active={active}>
    <span className={classes.myLabel}>{children}</span>
  </button>
)

// Finally, inject the stylesheet into the component.
export const JssButton = injectSheet(styles)(Button)