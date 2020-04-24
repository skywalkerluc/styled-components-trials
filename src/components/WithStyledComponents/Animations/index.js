/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import { Rotate } from './styles';

export default function Animations() {
  return (
    <>
      <Rotate aria-label='rotating emoji' role='img'>
        &lt; 💅 &gt;
      </Rotate>
    </>
  );
}
