import loading from '../public/images/loading.gif';
import Image from 'next/image';
import { NextPage } from 'next';

const Loading: NextPage = () => {
  return (
    <div className="text-center justify-content-center">
      <Image src={loading} alt="loading" height={75} width={75} />
    </div>
  );
};

export default Loading;
