import { ChangeEvent, ReactElement, useState, useEffect } from 'react';
import cx from 'classnames';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IconButton } from '@mui/material';

interface IInputProps {
  // eslint-disable-next-line no-unused-vars
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  name: string;
  className?: string;
  placeholder?: string;
  invalidMsg?: string | undefined;
}

export default function Input({
  onChange,
  type,
  name,
  placeholder,
  className,
  invalidMsg
}: IInputProps): ReactElement {
  const [sType, setStype] = useState<string>(type);

  useEffect(() => {
    setStype(type);
  }, [type]);

  const toggleRevealPass = (): void => {
    setStype((prev) => (prev === 'password' ? 'text' : 'password'));
  };

  return (
    <div>
      <div className="relative">
        <input
          type={sType}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          className={cx(
            'bg-gray-50',
            'w-full',
            'p-3',
            'rounded-xl',
            invalidMsg ? 'outline-red-600 border-red-600' : 'outline-[#006175]',
            'border-2',
            className
          )}
        />
        {type === 'password' && (
          <IconButton className="absolute right-3 top-1" onClick={toggleRevealPass}>
            {sType === 'password' ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </IconButton>
        )}
      </div>
      {invalidMsg && <p className="text-red-600 mt-2 text-xs">{invalidMsg}</p>}
    </div>
  );
}

Input.defaultProps = {
  className: '',
  placeholder: '',
  invalidMsg: undefined
};
