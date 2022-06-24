// import Link from 'next/link';

const Logo = () => {
  return (
    <div className="container flex justify-between">
      <div className="flex justify-left">
        <img
          src="https://res.cloudinary.com/altalya/image/upload/v1655049947/caremypal/logo_ajp5qj.png"
          alt="CareMyPal"
        />
      </div>
      <div className="flex justify-center mt-10">
        {/* <img className="rounded-t-lg" src="/assets/images/icon-whatsapp-16.png" alt=""/> */}
        <div className="text-3xl text-gray-900 font-bold">75600756003</div>

        {/* <Link href="/RegForm">
          <h1>Form</h1>
        </Link> */}
      </div>
    </div>
  );
};

export { Logo };
