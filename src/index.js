import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme  } from '@material-ui/core/styles';

// import './index.css';
import App from './App';


const theme = createTheme({
  palette: {
    primary: {
      main: '#0a0506',
      contrastText: '#fff',
    },
    secondary: {
      main: '#dc232e',
      contrastText: '#fff',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme ={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
