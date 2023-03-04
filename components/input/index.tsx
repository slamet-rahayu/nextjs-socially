import { ChangeEvent, ReactElement } from 'react';
import cx from 'classnames';

interface IInputProps {
  // eslint-disable-next-line no-unused-vars
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  name: string;
  className?: string;
  placeholder?: string;
}

export default function Input({
  onChange,
  type,
  name,
  placeholder,
  className
}: IInputProps): ReactElement {
  return (
    <input
      type={type}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      className={cx(
        'bg-gray-50',
        'w-full',
        'p-3',
        'rounded-xl',
        'outline-[#006175]',
        'border-2',
        className
      )}
    />
  );
}

Input.defaultProps = {
  className: '',
  placeholder: ''
};
