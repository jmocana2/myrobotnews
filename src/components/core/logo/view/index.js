import React from 'react';

/** dependencies */
import Icon from '../../Icon/view';

/** styles */
import StyledLogo from './style';

/** assets */
import IconClock from '../../../../../assets/images/svg/reloj-arena.svg';

const Logo = () => {
  return (
    <StyledLogo>
      MyRobotNews <Icon height="65px" svg={IconClock} className="Logo-svg" />
    </StyledLogo>
  );
};

export default Logo;
