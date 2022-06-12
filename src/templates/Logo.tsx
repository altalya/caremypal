import Image from 'next/image';

const Logo = () => {
  return (
    <div className="container flex justify-center">
      <Image
        src="/caremypal/logo_ajp5qj.png"
        width={410}
        height={149}
        alt="CareMyPal"
        quality={100}
        layout="responsive"
        objectFit="contain"
      />
    </div>
  );
};

export { Logo };
