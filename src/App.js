import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import RTL from './components/RTL';
import MainPage from './pages/mainPage';

const theme = createMuiTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});

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
