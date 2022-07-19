import React from 'react';
import {ThemeProvider} from 'styled-components'

import { Dashboard } from './src/pages/Dashboard/';
import { AddQuestion } from './src/pages/AddQuestion/';
import {theme} from './src/styles/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AddQuestion />
    </ThemeProvider>
  );
}


