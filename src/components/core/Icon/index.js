import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ className, svg, ...rest }) => (
  <svg className={className} {...rest}>
    <use xlinkHref={`#${svg.id}`} />
  </svg>
);

Icon.propTypes = {
  className: PropTypes.string,
  svg: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};

Icon.defaultProps = {
  className: undefined,
};

export default Icon;
