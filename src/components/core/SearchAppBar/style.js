import styled from 'styled-components';
import { rem } from 'polished';
import InputBase from '@material-ui/core/InputBase';
import mediaqueries from '../../../config/themes/variables/mediaqueries';

const StyledSearchAppBar = styled.div`
  background-color: ${props => props.theme.colors.lightPrimary};
  padding: ${rem('14px')} 0;
  display: flex;
  justify-content: space-between;
  .SearchAppBar-App {
    background-color: transparent;
    box-shadow: none;
  }
  .SearchAppBar-App-toolbar {
    display: flex;
    justify-content: space-between;
  }
  .SearchAppBar-BtnMenu {
    padding: 0;
  }

  /** Menú desktop */
  .SearchAppBar-nav {
    display: none;
    ${mediaqueries.greaterThan('tabletLandscape')`
      //versión desktop del menú
    `};
  }
  /** Buscador */
  .SearchAppBar-search {
    position: relative;
  }
  .SearchAppBar-searchIcon {
    fill: ${props => props.theme.colors.grayDark};
    position: absolute;
    top: ${rem('4px')};
    right: ${rem('10px')};
  }
  .SearchAppBar-searchInput {
    background-color: ${props => props.theme.colors.light};
    border-radius: ${rem('4px')}
    font-family: ${props => props.theme.fonts.bold};
    font-size: ${rem('14px')};
    letter-spacing: ${rem('-1px')};
    width: ${rem('206px')};
    padding: ${rem('2px')} ${rem('50px')} ${rem('2px')} ${rem('10px')};
    color: ${props => props.theme.colors.grayDark};
    ${mediaqueries.greaterThan('mobile')`
      width: ${rem('256px')};
    `};
  }
`;

const StyledSide = styled.div`
  background-color: ${props => props.theme.colors.lightPrimary};
  font-family: ${props => props.theme.fonts.semibold};
  width: ${rem('250px')};

  .SideList-title {
    font-size: ${rem('20px')};
    text-transform: uppercase;
    font-family: ${props => props.theme.fonts.extrabold};
    color: ${props => props.theme.colors.graySad};
    margin: ${rem('15px')} 0 ${rem('15px')} ${rem('15px')};
  }

  .SideList-item {
    & > span {
      font-family: ${props => props.theme.fonts.regular};
    }
  }
`;

const StyledInputBase = styled(InputBase)``;

export { StyledSearchAppBar, StyledSide, StyledInputBase };
