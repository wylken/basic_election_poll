import React from 'react';
import {ThemeProvider} from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import {AppRoutes} from './src/routes/app.routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import { LogBox } from 'react-native';

import {theme} from './src/styles/theme'

const Stack = createNativeStackNavigator();
LogBox.ignoreLogs([
    'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
    "Warning: componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details."
  ]);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}



