import React from 'react';
import Container from 'modules/container/components/container';
import BottomTab from 'modules/container/components/bottom-tab';

interface IContainer {
  children: React.ReactNode;
  withBottomTab?: boolean;
  className?: string;
}
export default function ContainerModule({
  children,
  withBottomTab,
  className
}: IContainer): React.ReactElement {
  return (
    <Container>
      <div className={className}>{children}</div>
      {withBottomTab && <BottomTab />}
    </Container>
  );
}

ContainerModule.defaultProps = {
  withBottomTab: true,
  className: ''
};
