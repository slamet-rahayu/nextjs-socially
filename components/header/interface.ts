import React from 'react';

export interface IHeaderProps {
  title?: string | React.ReactNode;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
}
