import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import MainPage from './pages/mainPage';
import { create } from 'jss';
import rtl from 'jss-rtl';
import JssProvider from 'react-jss/lib/JssProvider';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

const theme = createMuiTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

// Custom Material-UI class name generator.
const generateClassName = createGenerateClassName();

function RTL(props) {
  return (
    <JssProvider jss={jss} generateClassName={generateClassName}>
      {props.children}
    </JssProvider>
  );
}
class App extends Component {  
  render() {
    return (
      <RTL>
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <MainPage />
          </div>
        </MuiThemeProvider>
      </RTL>
    );
  }
}

export default App;
