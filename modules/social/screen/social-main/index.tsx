import { ReactElement } from 'react';
import { ContainerModule } from 'modules/container/screen';
import { SearhBar } from 'components';
import socialData from 'modules/social/constant/social-data';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function SocialMain(): ReactElement {
  return (
    <>
      <SearhBar />
      <ContainerModule>
        <div className="my-4 px-4 pb-10">
          {socialData.map((v) => {
            return (
              <div key={v.heading.title}>
                <div className="mb-4 mt-8">
                  <p className="font-bold text-lg">{v.heading.title}</p>
                  <p className="text-xs">{v.heading.description}</p>
                </div>
                {v.room.map((r) => {
                  return (
                    <div key={r.title} className="rounded-lg bg-[#1c6758d9] p-4 text-white mb-4">
                      <p className="font-semibold text-xs mb-1">Live</p>
                      <p className="text-sm font-semibold mb-2">{r.title}</p>
                      <div className="flex items-center">
                        <div className="flex mb-1 mr-1">
                          {Array.from(new Array(3).keys()).map((j, k) => (
                            <div
                              className={`w-[20px] h-[20px] rounded-full bg-slate-200 ${
                                k > 0 && 'ml-[-7px]'
                              } border border-[#1c6758d9]`}
                              key={j}
                            />
                          ))}
                        </div>
                        <p className="text-xs">{r.participants} partisipan</p>
                      </div>
                      <p className="text-xs">Host Oyin Saratu</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </ContainerModule>
    </>
  );
}
