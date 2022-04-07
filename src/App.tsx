import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './routes/index.routes';
import light from './styles/themes/light';
import ModalProvider from './context/Modal';

const App = (): JSX.Element => (
  <ThemeProvider theme={light}>
    <ModalProvider>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ModalProvider>
  </ThemeProvider>
);

export default App;
