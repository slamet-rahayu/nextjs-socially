import { ReactElement, useState } from 'react';
import { IconBell, IconSearch } from 'config/svgs';
import Image from 'next/image';
import NotificationComp from 'modules/notifications/screen';

interface IProps {
  withNotification?: boolean;
}

export default function SearchBar({ withNotification }: IProps): ReactElement {
  const [notifOpen, setNotifOpen] = useState<boolean>(false);

  const toggleNotif = () => {
    setNotifOpen((prev) => !prev);
  };

  return (
    <>
      <div className="flex justify-between items-center fixed bg-white z-10 w-full p-4">
        <div className="px-2 border rounded-2xl flex py-1 border-[#006175] w-[90%]">
          <Image src={IconSearch} alt="icon search" />
          <input
            type="text"
            className="w-full outline-none pl-2 text-[#006175]"
            placeholder="Search..."
          />
        </div>
        {withNotification && (
          <>
            <button type="button" onClick={toggleNotif} className="flex">
              <Image src={IconBell} alt="icon bell" />
            </button>
            <NotificationComp isOpen={notifOpen} onClose={toggleNotif} />
          </>
        )}
      </div>
      <div className="pb-14" />
    </>
  );
}

SearchBar.defaultProps = {
  withNotification: false
};
