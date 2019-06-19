import { createGlobalStyle } from 'styled-components';
import { rem } from 'polished';
import normalize from '../../utils/normalize';
import colors from './variables/colors';
import { fonts, fontsFace } from './variables/fonts';
import mediaqueries from './variables/mediaqueries';

/* eslint-disable */
export const GlobalStyle = createGlobalStyle`
${normalize()}
${fontsFace}

  *, *::after, *::before {
    font-family: ${fonts.book};
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0.0625rem dotted ${colors.gray};
  }
  html {
    font-size: 100%;
  }
  body {
    font-size: ${rem("16px")};
    line-height: ${rem("25px")};
    margin: 0;
    color: ${colors.dark};
  }
  p {
    font-size: ${rem("15px")};
    margin: 0 0 ${rem("8px")} 0;
    ${mediaqueries.greaterThan("mobile")`
      font-size: ${rem("16px")};
    `};
  }
  strong {
    font-family: ${fonts.bold};
  }
  a {
    color: ${colors.primary};
    text-decoration: none;
  }
  a, button {
    cursor: pointer;
  }
  table {
    font-size: ${rem("16px")};
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${colors.dark};
    font-family: ${fonts.bold};
    font-weight: normal;
    margin: 0 0 ${rem("8px")} 0;
  }
  h1 {
    color: ${colors.dark};
    font-size: ${rem("23px")};
    line-height: ${rem("21px")};
    text-transform: uppercase;
    ${mediaqueries.lessThan("mobile")`
      font-size: ${rem("21px")};
    `};
    ${mediaqueries.greaterThan("desktop")`
      font-size: ${rem("28px")};
      line-height: ${rem("29px")};
    `};
  }
  h2 {
    color: ${colors.grayDarkest};
    font-size: ${rem("18px")};
    line-height: ${rem("20px")};
    margin-bottom:${rem("17px")};
    ${mediaqueries.lessThan("mobile")`
      margin-bottom: ${rem("17px")};
    `};
    ${mediaqueries.greaterThan("desktop")`
      font-size: ${rem("20px")};
    `};
  }
  h3 {
    font-size: ${rem("18px")};
    line-height: ${rem("24px")};
    margin-bottom:0;
    margin-top:${rem("17px")};
    text-transform: uppercase;
    ${mediaqueries.lessThan("mobile")`
      font-size: ${rem("16px")};
    `};
    ${mediaqueries.greaterThan("desktop")`
      font-size: ${rem("20px")};
      margin-bottom:${rem("8px")};
    `};
  }

  /* h5, h6  NO indicado en diseño para artítulos */

  h4 {
    font-size: ${rem("20px")};
    line-height: ${rem("22px")};
  }

  h5 {
    font-size: ${rem("18px")};
    line-height: ${rem("20px")};
  }
  h6 {
    font-size: ${rem("16px")};
    line-height: ${rem("18px")};
  }

  /** listas **/
  ul, ol {
    list-style-type: none;
    padding: 0;
    padding-left: ${rem("15px")};
  }

  ul, ol, dl {
    font-size: ${rem("16px")};
  }
  
  ul {
    margin: ${rem("4px")} 0 ${rem("9px")} 0;
    ${mediaqueries.lessThan("mobile")`
      padding-left: ${rem("15px")};
    `};
  }

  li {
    position: relative;
    margin-left: 0;
    padding-left: ${rem("28px")};
    &:before {
      position: absolute;
    }
  }

  ol {
    margin: 0;
    > li {
      counter-increment: step-counter;
      &:before {
        color: ${colors.primary};
        content: counter(step-counter) '. ';
        left: 0;
        font-family: ${fonts.bold};
        top: ${rem("-1px")};
      }
    }
  }

  ul {
    > li {
      &:before {
        background-color: ${colors.primary};
        content: '';
        height: ${rem("5px")};
        top: ${rem("10px")};
        left: 0;
        width: ${rem("8px")};
      }
    }
  }

  ul ul, ol ul {
    padding-left: 0;
  }

  dd {
    margin-left: 0;
    padding: 0;
  }

  dt {
    font-family: ${fonts.semibold};
    font-size: ${rem("18px")};
    margin-bottom: ${rem("15px")}; 
  }

  input, textarea {
    border: ${rem("1px")} solid ${colors.grayLight};
    caret-color: ${colors.primary};
    font-size: ${rem("16px")};
    &::placeholder {
      font-family: ${fonts.bookItalic};
    }
  }

`;

const Theme = {
  colors,
  fonts,
  fontsFace,  
};

export default Theme;
