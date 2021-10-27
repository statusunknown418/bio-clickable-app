import { NextPage } from 'next';
import React from 'react';
import { BtnBack } from '../components/Common/BtnBack';
import { MainLayout } from '../components/Layout/MainLayout';
import { Player } from '../components/MusicPlayer/Player';

interface Props {}

const start: NextPage<Props> = () => {
  return (
    <MainLayout>
      <BtnBack backUrl="/treatmentSettings" />
      <h1 className="text-[55px] font-bold text-center mt-28">
        Select your music
      </h1>
      <h2 className="text-[#C4C4C4] text-center text-[16px]">
        Search for your favorite songs
      </h2>
      <div className="text-center">
        <input
          className="mt-20 bg-[#767680] bg-opacity-25 backdrop-filter backdrop-blur-xl rounded-lg px-4 py-1"
          type="text"
          placeholder="Search"
        />
      </div>
      <Player />
    </MainLayout>
  );
};

export default start;
