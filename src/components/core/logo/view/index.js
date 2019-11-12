import React from 'react';

/** dependencies */
import Icon from '../../Icon/view';

/** styles */
import StyledLogo from './style';

/** assets */
import { Hourglass } from '../../../../assets/images/svg';

const Logo = () => {
  return (
    <StyledLogo>
      MyRobotNews <Icon height="65px" svg={Hourglass} className="Logo-svg" />
    </StyledLogo>
  );
};

export default Logo;
