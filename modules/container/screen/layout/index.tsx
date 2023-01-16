import React from 'react';
import Container from 'modules/container/components/container';
import BottomTab from 'modules/container/components/bottom-tab';

interface IContainer {
  children: React.ReactNode;
}

export default function ContainerModule({ children }: IContainer): React.ReactElement {
  return (
    <Container>
      <div>{children}</div>
      <BottomTab />
    </Container>
  );
}
