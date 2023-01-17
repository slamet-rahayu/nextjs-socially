import { ReactElement, useState } from 'react';
import { IconBell, IconSearch } from 'config/svgs';
import Image from 'next/image';
import NotificationComp from 'modules/notifications/screen';
import cx from 'classnames';

interface IProps {
  withNotification?: boolean;
  isFixed?: boolean;
}

export default function SearchBar({ withNotification, isFixed }: IProps): ReactElement {
  const [notifOpen, setNotifOpen] = useState<boolean>(false);

  const toggleNotif = () => {
    setNotifOpen((prev) => !prev);
  };

  return (
    <div className="flex justify-center">
      <div
        className={cx(
          'flex',
          'justify-between',
          'items-center',
          'bg-white',
          'z-10',
          'p-4',
          'w-full',
          'max-w-md',
          isFixed && 'fixed'
        )}
      >
        <div className="p-2 border rounded-2xl flex border-[#006175] w-[90%]">
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
    </div>
  );
}

SearchBar.defaultProps = {
  withNotification: false,
  isFixed: true
};
