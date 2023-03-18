/* eslint-disable react/button-has-type */
import { ReactElement, ReactNode } from 'react';
import cx from 'classnames';
import Loader from '../loader';

interface IBtnProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  isLoading,
  type,
  onClick,
  disabled
}: IBtnProps): ReactElement {
  return (
    <button
      type={type || 'button'}
      disabled={disabled || isLoading}
      className={cx(
        'w-full',
        'rounded-xl',
        isLoading || disabled ? 'bg-gray-400' : 'bg-[#1C6758]',
        'flex',
        'justify-center',
        'items-center',
        'h-12'
      )}
      onClick={onClick}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <div className="font-semibold text-center text-white text-sm">{children}</div>
      )}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  disabled: false,
  isLoading: false,
  onClick: () => {}
};
