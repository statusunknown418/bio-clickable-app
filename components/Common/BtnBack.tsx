import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
type Props = {
  backUrl: string;
};

export const BtnBack: NextPage<Props> = ({ backUrl }) => {
  return (
    <Link href={backUrl} passHref>
      <button
        onClick={() => {
          console.log('went back!');
        }}
        className="absolute text-[#C4c4c4] text-3xl ml-10 mt-5 rotate-180"
      >
        ➜
      </button>
    </Link>
  );
};
