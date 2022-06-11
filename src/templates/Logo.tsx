import Image from 'next/image';

import logo from '../../public/assets/images/logo.png';

const Logo = () => {
  return (
    <div className="container flex justify-center">
      <Image src={logo} objectFit="contain" />
    </div>
  );
};

export { Logo };
