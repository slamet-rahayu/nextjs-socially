import { ReactElement } from 'react';
import Header from 'components/header';
import { IconButton } from '@mui/material';
import DeleteOutline from '@mui/icons-material/DeleteOutline';

export default function NotificationComp(): ReactElement {
  return (
    <div className="bg-white w-full h-screen fixed z-10 bottom-0 border max-w-sm">
      <Header
        title="Notifications"
        onBackClick={() => {}}
        rightComponent={
          <IconButton>
            <DeleteOutline />
          </IconButton>
        }
      />
    </div>
  );
}
