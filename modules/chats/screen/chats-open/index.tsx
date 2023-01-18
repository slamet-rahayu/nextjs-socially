import { ReactElement } from 'react';
import Header from 'components/header';
import { ContainerModule } from 'modules/container/screen';
import { ChevronLeft, Add } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { MessageBox } from 'react-chat-elements';
import { useRouter } from 'next/router';

export default function ChatsOpenComponent(): ReactElement {
  const router = useRouter();
  return (
    <ContainerModule withBottomTab={false}>
      <Header
        title={
          <div>
            <p className="text-center">A. Dezek</p>
            <p className="font-normal text-xs">Las seen just now</p>
          </div>
        }
        leftComponent={
          <IconButton onClick={() => router.back()}>
            <ChevronLeft />
          </IconButton>
        }
      />
      <div className="p-4">
        <div>
          <MessageBox
            position
            type="text"
            text="Aku sayang Banget sama kamu"
            date={new Date()}
            status="received"
          />
          <MessageBox
            position="right"
            type="text"
            text="Maaf ya, kamu terlalu baik buat aku"
            date={new Date()}
          />
          <MessageBox position="left" type="text" text="😢" date={new Date()} status="received" />
        </div>
      </div>
      <div className="p-4 fixed bottom-0 max-w-md w-full">
        <div className="flex items-center rounded-xl border-2 p-2">
          <button type="button" className="p-1 rounded-xl border-2 mr-2">
            <Add />
          </button>
          <textarea
            className="w-full h-full outline-none resize-none"
            placeholder="Type a message"
          />
        </div>
      </div>
    </ContainerModule>
  );
}
