import { ReactElement } from 'react';
import Header from 'components/header';
import { IconButton } from '@mui/material';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import CloseIcon from '@mui/icons-material/Close';
import notifData from '../constant/data';
import NotifCard from '../components/Card';
import { INotifProps } from '../interface/interface';

export default function NotificationComp({ isOpen, onClose }: INotifProps): ReactElement | null {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="bg-white w-full h-screen fixed z-10 bottom-0 border max-w-md">
      <Header
        title="Notifications"
        leftComponent={
          <IconButton onClick={onClose}>
            <CloseIcon color="disabled" />
          </IconButton>
        }
        rightComponent={
          <IconButton>
            <DeleteOutline />
          </IconButton>
        }
      />
      <div className="p-4">
        {notifData.map((v) => (
          <div key={v.date}>
            <p className="mb-2">{v.date}</p>
            {v.data.map((k) => (
              <NotifCard title={k.title} time={k.time} thumb={k.thumb} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
