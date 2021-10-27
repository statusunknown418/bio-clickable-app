import { NextPage } from 'next';
import Image from 'next/image';
type Props = {
  extraClassnames?: string;
};

export const Inputs: NextPage<Props> = ({ extraClassnames }) => {
  return (
    <div
      className={`relative flex items-center justify-center gap-[43px]  ${extraClassnames}`}
    >
      <i className="absolute left-2 pb-[12px]">
        <Image
          alt=""
          src={'/icons/akar-icons_person.svg'}
          width={30}
          height={30}
        />
      </i>
      <input
        className="w-[390px] text-center bg-transparent border-b-2 border-[#C4C4C4] pb-3 outline-none"
        type="text"
        placeholder="Please enter your name"
      />
      <input
        className="outline-none bg-transparent border-b-2 border-[#C4C4C4] w-[70px] text-center
    pb-3"
        type="text"
        placeholder="Age"
      />
    </div>
  );
};
