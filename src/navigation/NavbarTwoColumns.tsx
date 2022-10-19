import { ReactNode } from 'react';

import Link from 'next/link';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap justify-between items-center sm:flex-nowrap sm:flex-col xs:flex-nowrap xs:flex-col">
    <div>
      <Link href="/">
        <a>{props.logo}</a>
      </Link>
    </div>

    <nav className="sm:mt-[1rem] xs:mt-[1rem]">
      <ul className="navbar flex items-center justify-center font-medium text-xl text-gray-800 sm:text-sm xs:text-xs">
        {props.children}
      </ul>
    </nav>

    {/* Hotline */}

    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }
      `}
    </style>
  </div>
);

export { NavbarTwoColumns };
