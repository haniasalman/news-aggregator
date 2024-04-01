import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import Themes from "./themes";
import { Provider } from "react-redux";
import store from "./redux-store/ConfigureStore";
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <ThemeProvider theme={Themes.default}>
        <CssBaseline />
        <App />
      </ThemeProvider>
  </React.StrictMode>
   </Provider>,
  document.getElementById('root')
);
