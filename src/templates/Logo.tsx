const path = require('../../public/assets/images/logo.png');

const Logo = () => {
  return (
    <div className="container flex justify-center">
      <img src={path} alt="logo" />
    </div>
  );
};

export { Logo };
