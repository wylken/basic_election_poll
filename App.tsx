import React from 'react';
import {ThemeProvider} from 'styled-components'

import { Dashboard } from './src/pages/Dashboard/';
import { AddPoll } from './src/pages/AddPoll/';
import {theme} from './src/styles/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AddPoll />
    </ThemeProvider>
  );
}


