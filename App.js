import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import App from './src'

const theme = {
  background : '#fff',
}

export default function Main() {
  return (

    <ThemeProvider theme = {theme}>
        <App/>
    </ThemeProvider>
  );
}
