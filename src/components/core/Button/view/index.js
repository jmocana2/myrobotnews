import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './style';

const Button = ({ children, color }) => {
  return <StyledButton color={color}>{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf([
    'primary',
    'darkPrimary',
    'lightPrimary',
    'accent',
    'light',
    'dark',
  ]),
};

Button.defaultProps = {
  /** children */
  children: undefined,
  /** colors of the button */
  color: 'lightPrimary',
};

export default Button;
