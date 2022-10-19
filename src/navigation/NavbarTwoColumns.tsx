import { ReactNode, useEffect, useRef } from 'react';

import Link from 'next/link';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => {
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (
      containerRef &&
      logoRef &&
      navRef &&
      containerRef.current &&
      logoRef.current &&
      navRef.current
    ) {
      // const distX =
      //   containerRef.current.offsetWidth -
      //   navRef.current.offsetWidth -
      //   logoRef.current.offsetWidth;
      // console.log(distX);
    }
  }, []);
  return (
    <div
      ref={containerRef}
      className="flex flex-wrap justify-between items-center sm:flex-nowrap sm:flex-col xs:flex-nowrap xs:flex-col"
    >
      <div ref={logoRef}>
        <Link href="/">
          <a>{props.logo}</a>
        </Link>
      </div>

      <nav ref={navRef} className="sm:mt-[1rem] xs:mt-[1rem]">
        <ul className="navbar flex items-center justify-center font-medium text-xl text-gray-800 sm:text-base xs:text-base">
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
};

export { NavbarTwoColumns };
