import styled from 'styled-components';
import { Button } from '@material-ui/core';

const StyledButton = styled(Button)`
  background-color: ${props => props.theme.colors[props.color]};
  color: ${props =>
    props.color === 'inherit' || props.color === 'light'
      ? props.theme.colors.dark
      : props.theme.colors.light};
  transition: 0.7s;
  &:hover {
    background-color: ${props => props.theme.colors[props.color]};
    opacity: 0.65;
  }
`;

export default StyledButton;
