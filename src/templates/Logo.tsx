import Image from 'next/image';

const Logo = () => {
  return (
    <div className="container flex justify-center">
      <Image
        src="https://res.cloudinary.com/altalya/image/upload/v1655049947/caremypal/logo_ajp5qj.png"
        width={410}
        height={149}
        objectFit="contain"
      />
    </div>
  );
};

export { Logo };
