import React from 'react';
import {ThemeProvider} from 'styled-components'

import { Dashboard } from './src/pages/Dashboard/';
import { SingleInput } from './src/pages/SingleInput/';
import {theme} from './src/styles/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SingleInput />
    </ThemeProvider>
  );
}


