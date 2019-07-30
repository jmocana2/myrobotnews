import styled from 'styled-components';
import { rem } from 'polished';

const StyledLogo = styled.h1`
  font-family: 'Impact', 'sans-serif';
  font-size: ${rem('30px')};
  color: ${props => props.theme.colors.light};
  font-weight: normal;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  max-width: ${rem('240px')};
`;

export default StyledLogo;
