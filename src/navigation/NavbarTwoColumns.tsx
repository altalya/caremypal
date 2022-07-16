import { ReactNode } from 'react';

import Link from 'next/link';

type INavbarProps = {
  logo: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap justify-center items-center">
    <div>
      <Link href="/">
        <a>{props.logo}</a>
      </Link>
    </div>
  </div>
);

export { NavbarTwoColumns };
