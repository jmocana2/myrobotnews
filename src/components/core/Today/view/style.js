import styled from 'styled-components';
import { rem } from 'polished';

const StyledDate = styled.time`
  color: ${props => props.theme.colors.light};
  font-size: ${rem('12px')};
  font-family: ${props => props.theme.fonts.regular};

  .Today-weekday {
    text-transform: capitalize;
  }
`;

export default StyledDate;
