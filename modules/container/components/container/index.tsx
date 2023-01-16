import React from 'react';

interface IContainer {
  children: React.ReactNode;
}

export default function Container({ children }: IContainer): React.ReactElement {
  return <div className="max-w-md mx-auto pb-10">{children}</div>;
}
