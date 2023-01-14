import { ReactElement } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { IconButton } from '@mui/material';
import { INotifProps } from './interface';

export default function Header({ title, onBackClick, rightComponent }: INotifProps): ReactElement {
  return (
    <div className="flex justify-between bg-white max-w-sm items-center border-b">
      <IconButton onClick={onBackClick}>
        <ArrowBackIosIcon color="disabled" />
      </IconButton>
      <p className="font-semibold">{title}</p>
      {rightComponent}
    </div>
  );
}
