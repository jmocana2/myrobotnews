import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './style';

const Button = ({ children, color, className }) => {
  return (
    <StyledButton color={color} className={className}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'inherit']),
};

Button.defaultProps = {
  /** children */
  children: undefined,
  /** colors of the button */
  color: 'default',
  className: undefined,
};

export default Button;
