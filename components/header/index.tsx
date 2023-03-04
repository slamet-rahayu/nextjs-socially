import { ReactElement, ReactNode } from 'react';

interface IHeaderProps {
  title?: string | ReactNode;
  leftComponent?: ReactNode | null;
  rightComponent?: ReactNode | null;
}

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

Header.defaultProps = {
  title: '',
  leftComponent: null,
  rightComponent: null
};
