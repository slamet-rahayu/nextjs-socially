import React from 'react';
import Container from 'modules/container/components/container';
import BottomTab from 'modules/container/components/bottom-tab';

interface IContainer {
  children: React.ReactNode;
  withBottomTab?: boolean;
}

export default function ContainerModule({
  children,
  withBottomTab
}: IContainer): React.ReactElement {
  return (
    <Container>
      <div>{children}</div>
      {withBottomTab && <BottomTab />}
    </Container>
  );
}

ContainerModule.defaultProps = {
  withBottomTab: true
};
