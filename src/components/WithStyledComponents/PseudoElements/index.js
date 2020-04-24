import React from 'react';

import { Thing, BlueThing, GlobalStyle } from './styles';

export default function PseudoElements() {
  return (
    <>
      <Thing>Hello world!</Thing>
      <Thing>How ya doing?</Thing>
      <Thing className='something'>The sun is shining...</Thing>
      <div>Pretty nice day today.</div>
      <Thing>Don't you think?</Thing>
      <div className='something-else'>
        <Thing>Splendid.</Thing>
      </div>

      <GlobalStyle />
      <BlueThing>Try this!</BlueThing>
    </>
  );
}
