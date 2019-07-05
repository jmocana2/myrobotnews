import React from 'react';
import StyledDate from './style';

/** utils */
import { getWeekDay, getDay, getMonth, getYear } from '../../../../utils/dates';

const Today = () => {
  return (
    <StyledDate dateTime="2019-01-07 08:19">
      {`${getWeekDay()}, ${getDay()} de ${getMonth()} de ${getYear()}`}
    </StyledDate>
  );
};

export default Today;
