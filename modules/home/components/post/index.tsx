import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import { IconButton } from '@mui/material';

export default function PostComponent() {
  return (
    <div>
      {Array.from(new Array(5).keys()).map((y) => (
        <div className="rounded-xl bg-gray-100 p-4 mb-4" key={y}>
          <div className="flex mb-2" id="user">
            <div className="w-[46px] h-[46px] rounded-full bg-slate-200 mr-2" />
            <div>
              <p className="font-semibold text-black">El kamcy speaks</p>
              <p className="text-sm font-semibold">1hr ago</p>
            </div>
          </div>
          <div className="mb-2">
            <p className="text-sm mb-2" id="post_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra{' '}
            </p>
            <div className="w-full h-[186px] bg-slate-200 rounded-xl" />
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
                  <IconButton color="error">
                    <FavoriteIcon />
                  </IconButton>
                  <p className="text-sm font-semibold">237</p>
                </div>
                <div className="flex items-center">
                  <IconButton color="default">
                    <CommentIcon />
                  </IconButton>
                  <p className="text-sm font-semibold">237</p>
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
