/* eslint-disable @next/next/no-img-element */
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import { IconButton } from '@mui/material';
import { useGetPost } from 'modules/post/hooks';
import { useEffect } from 'react';
import { baseURL } from 'utils/constant';

export default function PostComponent() {
  const { isLoading, dispatchGetPost, getPostRes, isError } = useGetPost();

  useEffect(() => {
    dispatchGetPost({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {!isLoading &&
        !isError &&
        getPostRes.map((post) => (
          <div className="rounded-xl bg-gray-100 p-4 mb-4" key={post.id}>
            <div className="flex mb-4">
              <div className="w-[46px] h-[46px] rounded-full bg-slate-200 mr-2" />
              <div>
                <p className="font-semibold text-black">{post.user_id.username}</p>
                <p className="text-xs font-semibold">1hr ago</p>
              </div>
            </div>
            <div className="mb-2">
              <img
                className="rounded-xl"
                src={`${baseURL}${post.post[0].url}`}
                alt={post.caption}
              />
              <p className="text-sm text-black mb-2 mt-3">{post.caption}</p>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <div className="flex">
                  {Array.from(new Array(3).keys()).map((v, k) => (
                    <div
                      className={`w-[22px] h-[22px] rounded-full bg-slate-200 ${
                        k > 0 && 'ml-[-7px]'
                      } border border-white`}
                      key={v}
                    />
                  ))}
                </div>
                <div className="flex">
                  <div className="flex items-center">
                    <IconButton size="small" color="error">
                      <FavoriteIcon />
                    </IconButton>
                  </div>
                  <div className="flex items-center">
                    <IconButton size="small" color="default">
                      <CommentIcon />
                    </IconButton>
                  </div>
                </div>
              </div>
              <p className="text-xs font-semibold text-black">Liked by Annabel and 100+ others</p>
              <p className="text-xs font-semibold">View all 78 comments</p>
            </div>
          </div>
        ))}
    </div>
  );
}
