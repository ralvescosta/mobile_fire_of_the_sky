import React from 'react';

import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {theme} from './Theme';

import App from './App';
import store from './store';

const Index: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="#c42f33" barStyle="light-content" />
      <App />
    </ThemeProvider>
  </Provider>
);

export default Index;
