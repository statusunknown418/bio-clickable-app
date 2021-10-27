import { NextPage } from 'next';
import Link from 'next/link';
type Props = {
  text?: string;
  href: string;
};

export const BtnNext: NextPage<Props> = ({ text, href }) => {
  return (
    <Link passHref href={`${href}`}>
      <button className="mt-[100px] border-2 rounded-lg w-[180px] h-[45px] font-bold hover:bg-[#00CC99] duration-200 transition-colors border-[#00CC99]">
        {text ? text : 'Next'}
      </button>
    </Link>
  );
};
