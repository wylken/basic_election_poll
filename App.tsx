import React from 'react';
import {ThemeProvider} from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import {AppRoutes} from './src/routes/app.routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

import {theme} from './src/styles/theme'

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}



