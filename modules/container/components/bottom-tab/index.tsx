/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import {
  IconHomeOutline,
  IconHomeFlat,
  IconChatOutline,
  IconChatFlat,
  IconGraphOutline,
  IconGraphFlat,
  IconPlusOutline,
  IconPlusFlat,
  IconProfileOutline,
  IconProfileFlat
} from 'config/svgs';

const menuList = [
  { path: '/', icon: IconHomeOutline, iconActive: IconHomeFlat },
  { path: '/social', icon: IconGraphOutline, iconActive: IconGraphFlat },
  { path: '/post', icon: IconPlusOutline, iconActive: IconPlusFlat },
  { path: '/chats', icon: IconChatOutline, iconActive: IconChatFlat },
  { path: '/profile', icon: IconProfileOutline, iconActive: IconProfileFlat }
];

export default function BottomTab(): React.ReactElement {
  const router = useRouter();

  return (
    <div className="fixed w-full bottom-0 left-0 py-4 bg-white border-t">
      <div className="max-w-sm mx-auto flex justify-around">
        {menuList.map((v) => (
          <button type="button" onClick={() => router.push(v.path)} key={v.path}>
            <Image src={router.asPath === v.path ? v.iconActive : v.icon} alt={v.path} />
          </button>
        ))}
      </div>
    </div>
  );
}
