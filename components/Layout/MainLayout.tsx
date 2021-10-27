import { motion } from 'framer-motion';
import { NextPage } from 'next';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  extraClassnames?: string;
};

const variants = {
  hidden: { opacity: 1, x: '-100vw', y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 1, x: '-100vw', y: 0 },
};

export const MainLayout: NextPage<Props> = ({ children, extraClassnames }) => {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear' }}
    >
      <div
        className={`${extraClassnames} border border-gray-500 h-[96vh] w-[834px] rounded-2xl mx-auto my-5 shadow-xl overflow-hidden`}
      >
        {children}
      </div>
    </motion.div>
  );
};
