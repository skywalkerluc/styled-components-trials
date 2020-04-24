import React from 'react';

import { Input } from './styles';

export default function BasedOnPropsExample2() {
  return (
    <>
      <Input defaultValue='@probablyup' type='text' />
      <Input defaultValue='@geelen' type='text' inputColor='rebeccapurple' />
    </>
  );
}
