import { ReactElement, useEffect } from 'react';
// import Image from 'next/image';
import { INotifCardProps } from '../../interface/interface';

export default function NotifCard({ title, time, thumb }: INotifCardProps): ReactElement {
  useEffect(() => {
    console.log(thumb);
  }, [thumb]);
  return (
    <div className="flex mb-3">
      {/* <Image src={thumb} alt="title" /> */}
      <div className="w-10 h-10 rounded-full bg-gray-400 mr-1" />
      <div>
        <p className="text-black text-base font-bold">{title}</p>
        <p className="text-xs">{time}</p>
      </div>
    </div>
  );
}
