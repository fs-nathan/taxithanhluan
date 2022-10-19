import { useCallback } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { NavItems, Routes } from '../utils/Constants';
import { Logo } from './Logo';

const Hero = () => {
  const router = useRouter();
  const getActiveClassName = useCallback(
    (path: string) => {
      return router.pathname.includes(path) ? 'text-primary-500' : '';
    },
    [router]
  );

  const getActiveClassNameHomeRoute = useCallback(() => {
    return router.pathname !== '/' ? '' : 'text-primary-500';
  }, [router]);
  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li className={getActiveClassNameHomeRoute()}>
            <Link href={Routes.HomePage}>
              <a>{NavItems.HomePage}</a>
            </Link>
          </li>
          <li className={getActiveClassName(Routes.BookTaxi)}>
            <Link href={Routes.BookTaxi}>
              <a>{NavItems.BookTaxi}</a>
            </Link>
          </li>
          {/* <li className={getActiveClassName(Routes.Contract)}>
            <Link href={Routes.Contract}>
              <a>{NavItems.Contract}</a>
            </Link>
          </li> */}
          <li className={getActiveClassName(Routes.Pricing)}>
            <Link href={Routes.Pricing}>
              <a>{NavItems.Pricing}</a>
            </Link>
          </li>
          {/* <li className={getActiveClassName(Routes.Services)}>
            <Link href={Routes.Services}>
              <a>{NavItems.Services}</a>
            </Link>
          </li> */}
          {/* <li className={getActiveClassName(Routes.CustomerReviews)}>
            <Link href={Routes.CustomerReviews}>
              <a>{NavItems.CustomerReviews}</a>
            </Link>
          </li> */}
          <li className={getActiveClassName(Routes.AboutUs)}>
            <Link href={Routes.AboutUs}>
              <a>{NavItems.AboutUs}</a>
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>
    </Background>
  );
};

export { Hero };
