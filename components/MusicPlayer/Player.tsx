import { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
type Props = {};

export const Player: NextPage<Props> = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center bg-no-repeat">
      <div className="flex gap-10 items-center justify-center mt-20">
        <div className="border border-[#5E5E5E] p-2 w-44 h-44 rounded-xl">
          <Image src="/The_Eminem_Show 1.png" width={176} height={176} alt="" />
        </div>
        <div>
          <h2 className="text-[19px] font-bold">Sample Track</h2>
          <p className="text-[#c4c4c4] text-sm">Sample Artist</p>
        </div>
      </div>
      <div className="flex gap-20 mt-20">
        <div
          onClick={() => setIsPlaying(!isPlaying)}
          className={`hover:bg-purple-700 duration-200 w-28 h-28 border ${
            isPlaying ? 'pl-2' : 'animate-pulse'
          } border-purple-700 rounded-full flex items-center justify-center  cursor-pointer`}
        >
          {isPlaying ? (
            <Image src={'/svg/Polygon 1.svg'} width={40} height={40} alt="" />
          ) : (
            <Image
              src={'/svg/bi_pause-fill.svg'}
              width={60}
              height={60}
              alt=""
            />
          )}
        </div>
      </div>
    </div>
  );
};
