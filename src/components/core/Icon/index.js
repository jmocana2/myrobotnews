import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/**
 * @param {component} - svg
 * @param {...rest} - rest params
 * @return {component} - Icon
 */

const Icon = ({ svg: SVGR, ...rest }) => (
  <Fragment>{SVGR && <SVGR {...rest} />}</Fragment>
);

/** Proptypes */
Icon.propTypes = {
  svg: PropTypes.elementType.isRequired,
};

export default Icon;
