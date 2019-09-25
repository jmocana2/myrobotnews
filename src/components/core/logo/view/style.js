import styled from 'styled-components';
import { rem } from 'polished';
import mediaqueries from '../../../../config/themes/variables/mediaqueries';

const StyledLogo = styled.h1`
  font-family: 'Impact', 'sans-serif';
  font-size: ${rem('40px')};
  line-height: ${rem('12px')};
  color: ${props => props.theme.colors.light};
  font-weight: normal;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  max-width: ${rem('240px')};
  margin-bottom: ${rem('20px')};
  & > svg {
    display: none;
  }
  ${mediaqueries.greaterThan('tabletLandscape')`
      font-size: ${rem('30px')};
      order: 2;
      margin-bottom: 0;
      position: relative;
      top: ${rem('3px')};
      & > svg {
        display: block;
      }
    `};
`;

export default StyledLogo;
