import Header from 'components/header';
import { ContainerModule } from 'modules/container/screen';
import SearchBar from 'components/search-bar';
import React from 'react';
import { Avatar, IconButton } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import { useRouter } from 'next/router';

const peopleOnline = [
  { name: 'Cunonx', msg: 'Ayok mas' },
  { name: 'Bujanx', msg: 'Hmm... leh ugha' },
  { name: 'Poejangga', msg: 'Amin Paling Serius' },
  { name: 'A. Dezek', msg: 'kalo kangen suaraku kamu tinggal call' },
  { name: 'Dedek Gemez', msg: 'ihh abang ihh..' }
];

export default function ChatsComponent(): React.ReactElement {
  const router = useRouter();
  return (
    <ContainerModule>
      <Header title="Chats" />
      <SearchBar isFixed={false} />
      <div className="p-4">
        <div className="flex">
          {peopleOnline.map((v) => (
            <div key={v.name} className="mr-5">
              <div className="mx-auto w-fit mb-1">
                <Avatar />
                <div className="w-3 h-3 rounded-full bg-green-500 mt-[-10px] relative" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="font-bold">All Chats</p>
          <IconButton size="small">
            <CreateIcon />
          </IconButton>
        </div>
        <div className="my-6">
          {peopleOnline.map((v) => (
            <button
              type="button"
              key={v.name}
              className="mb-4 flex items-center w-full"
              onClick={() => router.push('/chats/open')}
            >
              <div className="w-[15%]">
                <Avatar className="w-[55px] h-[55px]" />
              </div>
              <div className="ml-2 w-[75%]">
                <p className="font-bold text-left">{v.name}</p>
                <p className="text-sm text-left truncate">{v.msg}</p>
              </div>
              <div>
                <p className="text-xs text-[#B3B9C9]">08:43</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </ContainerModule>
  );
}
