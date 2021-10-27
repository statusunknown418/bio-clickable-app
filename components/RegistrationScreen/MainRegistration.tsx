import { NextPage } from 'next';
import { Inputs } from './Inputs';
import { LanguageSelector } from './LanguageSelector';
import Link from 'next/link';
import { BtnNext } from '../Common/BtnNext';
type Props = {};

export const MainRegistration: NextPage<Props> = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="mt-[144px]">
        <h1 className="text-[55px] font-bold ">Quick registration</h1>
        <h2 className="text-[16px] text-center text-[#BBBBBB] ">
          Please enter the required information
        </h2>
      </div>
      <LanguageSelector extraClassnames="mt-[130px]" />
      <Inputs extraClassnames="mt-[120px]" />

      <BtnNext href={'/treatmentSettings'} />

      <div className="fixed bottom-0 overflow-hidden rounded-2xl">
        <img alt="" src="/svg/Vector.svg" />
      </div>
    </main>
  );
};
