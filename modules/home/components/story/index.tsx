import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { IconButton } from '@mui/material';

export default function StoryComponent() {
  return (
    <div className="my-3">
      <div className="flex overflow-x-scroll pb-2 -mb-1 overflow-y-hidden">
        {Array.from(new Array(10).keys()).map((v) => (
          <div
            className="w-[70px] h-[100px] bg-slate-200 rounded-2xl mr-3 break-words relative"
            key={v}
          >
            asdasdasdasdas
            <IconButton className="absolute bottom-[-20px] w-full left-0" size="large">
              <AddCircleOutlineRoundedIcon />
            </IconButton>
          </div>
        ))}
      </div>
    </div>
  );
}
