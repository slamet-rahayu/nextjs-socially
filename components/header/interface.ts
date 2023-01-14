import React from 'react';

export interface INotifProps {
  title?: String;
  onBackClick?: () => void;
  rightComponent?: React.ReactNode;
}
