import { motion } from 'framer-motion';
import { NextPage } from 'next';
import { MainLayout } from '../components/Layout/MainLayout';
import { MainRegistration } from '../components/RegistrationScreen/MainRegistration';

type Props = {};

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Home: NextPage<Props> = () => {
  return (
    <MainLayout>
      <MainRegistration />
    </MainLayout>
  );
};

export default Home;
