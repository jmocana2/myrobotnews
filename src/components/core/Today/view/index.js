import React from 'react';
import StyledDate from './style';

/** utils */
import { getWeekDay, getDay, getMonth, getYear } from '../../../../utils/dates';

const Today = ({ className }) => {
  return (
    <StyledDate dateTime="2019-01-07 08:19" className={className}>
      <span className="Today-weekday">{`${getWeekDay()}`}</span>
      {`, ${getDay()} de ${getMonth().toLowerCase()} de ${getYear()}`}
    </StyledDate>
  );
};

export default Today;
