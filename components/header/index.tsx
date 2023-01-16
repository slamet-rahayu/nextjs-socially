import { ReactElement } from 'react';
import { IHeaderProps } from './interface';

export default function Header({
  title,
  leftComponent,
  rightComponent
}: IHeaderProps): ReactElement {
  return (
    <div className="flex justify-between bg-white max-w-md items-center border-b py-2">
      {leftComponent}
      <p className="font-semibold">{title}</p>
      {rightComponent}
    </div>
  );
}
