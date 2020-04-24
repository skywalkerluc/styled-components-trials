import React from 'react';

import { Button } from './styles';
import { ThemeProvider } from 'styled-components';

export default function OverridingTheme() {
  const theme = {
    main: 'mediumseagreen',
  };

  return (
    <>
      <Button theme={{ main: 'royalblue' }}>Ad hoc theme</Button>
      <ThemeProvider theme={theme}>
        <div>
          <Button>Themed</Button>
          <Button theme={{ main: 'darkorange' }}>Overidden</Button>
        </div>
      </ThemeProvider>
    </>
  );
}
