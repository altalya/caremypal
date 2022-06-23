import Link from 'next/link';

const Logo = () => {
  return (
    <div className="container flex justify-center">
      <img
        src="https://res.cloudinary.com/altalya/image/upload/v1655049947/caremypal/logo_ajp5qj.png"
        alt="CareMyPal"
      />
      <div className="container">
        <Link href="/RegForm">
          <h1>Form</h1>
        </Link>
      </div>
    </div>
  );
};

export { Logo };
