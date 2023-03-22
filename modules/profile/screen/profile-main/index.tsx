/* eslint-disable @next/next/no-img-element */
import Header from 'components/header';
import { ContainerModule } from 'modules/container/screen';
import { ReactElement, useEffect } from 'react';
import { Avatar } from '@mui/material';
import { useGetProfile } from 'modules/profile/hooks';
import { useGetPost } from 'modules/post/hooks';
import { useSelector } from 'react-redux';
import Skeleton from '@mui/material/Skeleton';
import { IAuthState } from 'modules/auth/interface/auth';
import { baseURL } from 'utils/constant';

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
  const { isLoading: isLoadingPost, getPostRes, dispatchGetPost } = useGetPost();

  const {
    auth: {
      userData: {
        user: { id }
      }
    }
  } = useSelector((state: IAuthState) => state);

  useEffect(() => {
    dispatchGetPost({ userId: id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatchGetProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            {getPostRes.map((post) => (
              <div key={post.id} className="w-1/3 p-[5px]">
                <img
                  className="rounded-xl"
                  src={`${baseURL}${post.post[0].url}`}
                  alt={post.caption}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContainerModule>
  );
}
