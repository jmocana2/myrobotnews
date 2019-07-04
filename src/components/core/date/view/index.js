import React from 'react';
import StyledDate from './style';

/** utils */
import getWeekDay from '../../../../utils/dates';

const Today = () => {
  return (
    <StyledDate dateTime="2019-01-07 08:19">
      {`${getWeekDay()}, 1 de julio de 2019`}
    </StyledDate>
  );
};

export default Today;
