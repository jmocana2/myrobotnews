import React from 'react';
import PropTypes from 'prop-types';
import StyledDate from './style';

/** utils */
import { getWeekDay, getDay, getMonth, getYear } from '../../../utils/dates';

const Today = ({ className }) => {
  return (
    <StyledDate dateTime="2019-01-07 08:19" className={className}>
      <span className="Today-weekday">{`${getWeekDay()}`}</span>
      {`, ${getDay()} de ${getMonth().toLowerCase()} de ${getYear()}`}
    </StyledDate>
  );
};

Today.propTypes = {
  className: PropTypes.string,
};

Today.defaultProps = {
  className: undefined,
};

export default Today;
