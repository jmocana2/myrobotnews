import styled from 'styled-components';
import { rem } from 'polished';
import mediaqueries from '../../../../config/themes/variables/mediaqueries';

const StyledHeader = styled.header`
  border-top: ${rem('12px')} solid ${props => props.theme.colors.darkPrimary};
  margin-bottom: ${rem('7px')};

  .header-top {
    width: 100%;
    background-color: ${props => props.theme.colors.primary};
    border-bottom: ${rem('5px')} solid ${props => props.theme.colors.light};
    padding: ${rem('30px')} ${rem('20px')} ${rem('20px')} ${rem('20px')};
    & > .centrar {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      ${mediaqueries.greaterThan('tablet')`
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;    
    `};
      ${mediaqueries.greaterThan('tabletLandscape')`
      padding-right: ${rem('20px')};
      padding-left: ${rem('20px')};
    `};
    }
    ${mediaqueries.greaterThan('tabletLandscape')`
      padding: 0;
    `};
  }
  .header-bot {
    background-color: ${props => props.theme.colors.lightPrimary};
    padding-top: ${rem('7px')};
    padding-bottom: ${rem('7px')};
    .centrar {
      padding-right: ${rem('20px')};
      padding-left: ${rem('20px')};
    }
  }
  .header-today {
    padding-bottom: ${rem('6px')};
    order: 2;
    ${mediaqueries.greaterThan('tabletLandscape')`
      order: 1
    `};
  }
  .header-logo {
    order: 1;
    margin-bottom: ${rem('10px')};
    position: relative;
    top: ${rem('5px')};
  }
  .header-list-butons {
    order: 3;
    padding: 0 0 ${rem('12px')} 0;
    margin: ${rem('12px')} 0 0 0;
    display: flex;
    justify-content: space-between;
    width: ${rem('262px')};
  }
  .header-btn {
    font-family: ${props => props.theme.fonts.bold};
    min-width: ${rem('125px')};
  }
`;

export default StyledHeader;
