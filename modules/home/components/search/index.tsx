import { ReactElement, useState } from 'react';
import { IconBell, IconSearch } from 'config/svgs';
import Image from 'next/image';
import NotificationComp from 'modules/notifications/screen';

export default function SearchCompnent(): ReactElement {
  const [notifOpen, setNotifOpen] = useState<boolean>(false);

  const toggleNotif = () => {
    setNotifOpen((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center">
      <div className="px-2 border rounded-2xl flex py-1 border-[#006175] w-[90%]">
        <Image src={IconSearch} alt="icon search" />
        <input
          type="text"
          className="w-full outline-none pl-2 text-[#006175]"
          placeholder="Search..."
        />
      </div>
      <button type="button" onClick={toggleNotif}>
        <Image src={IconBell} alt="icon bell" />
      </button>
      <NotificationComp isOpen={notifOpen} onClose={toggleNotif} />
    </div>
  );
}