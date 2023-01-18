import { ReactElement } from 'react';
import { IHeaderProps } from './interface';

export default function Header({
  title,
  leftComponent,
  rightComponent
}: IHeaderProps): ReactElement {
  return (
    <div className="flex justify-between bg-white max-w-md items-center border-b py-4">
      {leftComponent || <div />}
      <div className="font-semibold">{title}</div>
      {rightComponent || <div />}
    </div>
  );
}
