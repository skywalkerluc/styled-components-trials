import React from 'react';

import { Button } from './styles';
import { ThemeProvider } from 'styled-components';

export default function Theming() {
  const theme = {
    main: 'mediumseagreen',
  };

  return (
    <>
      <Button>Normal</Button>
      <ThemeProvider theme={theme}>
        <Button>Themed</Button>
      </ThemeProvider>
    </>
  );
}
