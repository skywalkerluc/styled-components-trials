import React from 'react';

import { Container, Button, TomatoButton } from './styles';

export default function ExtendingStyles() {
  return (
    <Container>
      <Button primary>Regular Button</Button>
      <TomatoButton primary>Tomato Button</TomatoButton>
    </Container>
  );
}
