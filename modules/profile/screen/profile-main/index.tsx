import Header from 'components/header';
import { ContainerModule } from 'modules/container/screen';
import { ReactElement, useEffect } from 'react';
import { Avatar } from '@mui/material';
import { useGetProfile } from 'modules/profile/hooks';
import Skeleton from '@mui/material/Skeleton';

const summary = [
  {
    name: 'Post',
    value: '98'
  },
  {
    name: 'Following',
    value: '980'
  },
  {
    name: 'Followers',
    value: '980'
  }
];

export default function ProfileMain(): ReactElement {
  const { dispatchGetProfile, getProfileRes, isLoading } = useGetProfile();

  useEffect(() => {
    dispatchGetProfile();
  }, []);

  return (
    <ContainerModule>
      <Header title="My Profile" />
      <div className="px-6 py-4 mt-10">
        <div className="flex items-center">
          <Avatar sx={{ width: '67px', height: '67px', mr: 2 }} />
          <div>
            <p className="text-lg font-semibold">
              {isLoading ? <Skeleton width={120} height={35} /> : getProfileRes.fullname}
            </p>
            <p className="text-sm font-semibold">
              {isLoading ? <Skeleton width={100} height={28} /> : getProfileRes.city}
            </p>
          </div>
        </div>
        <p className="my-5 text-sm">
          {isLoading ? <Skeleton width={100} height={28} /> : getProfileRes.bio}
        </p>
        <button type="button" className="w-full py-3 rounded-xl bg-[#1C6758]">
          <p className="font-semibold text-center text-white">Edit Profile</p>
        </button>
        <div className="flex justify-between mt-8 pb-6">
          {summary.map((v, k) => (
            <div
              key={v.name}
              className={`text-center w-1/3 ${k === 1 ? 'border-l border-r border-black' : ''}`}
            >
              <p className="text-sm font-semibold">{v.value}</p>
              <p className="text-sm font-semibold">{v.name}</p>
            </div>
          ))}
        </div>
        <div className="mb-5">
          <p className="font-semibold mb-3">Highlight</p>
          <div className="flex">
            {[1, 2, 3].map((v) => (
              <Avatar key={v} sx={{ mr: 2, width: '60px', height: '60px' }} />
            ))}
          </div>
        </div>
        <div className="pb-8">
          <p className="font-semibold mb-5">Post</p>
          <div className="flex flex-wrap m-[-5px]">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((v) => (
              <div key={v} className="h-[99px] w-1/3 p-[5px]">
                <div className="bg-gray-100 rounded-xl w-full h-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContainerModule>
  );
}
