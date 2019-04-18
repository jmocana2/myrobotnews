import React, { Component } from 'react';
import JssProvider from "react-jss/lib/JssProvider";
import { create } from "jss";
import styled from 'styled-components/macro'
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import './App.css';

const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
`;

const styleNode = document.createComment("insertion-point-jss");
document.head.insertBefore(styleNode, document.head.firstChild);

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  insertionPoint: "insertion-point-jss"
});

class App extends Component {
  render() {
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer" 
            css={`margin-bottom: 20px`}           
          >
            Learn React
          </a>
          <StyledButton variant="contained" color="primary">
            Hello, material-UI with styled components
          </StyledButton>
          <p css={`color: red`}>Probando atributo css</p>
        </header>
      </div>
      </JssProvider>
    );
  }
}

export default App;
