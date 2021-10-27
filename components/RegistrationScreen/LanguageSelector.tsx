import { NextPage } from 'next';
import { useState } from 'react';

type Props = {
  extraClassnames?: string;
};

export const LanguageSelector: NextPage<Props> = ({ extraClassnames }) => {
  const [select, setSelect] = useState(false);
  const handleClick = () => {
    setSelect(!select);
  };
  const commonClassnames = ` w-[50%] rounded-lg h-[36px] flex items-center justify-center cursor-pointer`;
  return (
    <div
      className={`flex items-center w-[358px] h-[40px] rounded-lg border-2 justify-between ${extraClassnames}`}
    >
      <div onClick={handleClick} className={`bg-[#00CC99] ${commonClassnames}`}>
        <p className="font-bold ">English</p>
      </div>
      <div onClick={handleClick} className={`${commonClassnames}`}>
        <p>Español</p>
      </div>
    </div>
  );
};
