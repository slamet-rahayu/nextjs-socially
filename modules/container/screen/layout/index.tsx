import React from 'react';
import Container from 'modules/container/components/container';

interface IContainer {
  children: React.ReactNode;
}

export default function ContainerModule({ children }: IContainer): React.ReactElement {
  return (
    <Container>
      <p>container</p>
      {children}
    </Container>
  );
}
