import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { NavItems, Routes } from '../utils/Constants';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href={Routes.HomePage}>
            <a>{NavItems.HomePage}</a>
          </Link>
        </li>
        <li>
          <Link href={Routes.BookTaxi}>
            <a>{NavItems.BookTaxi}</a>
          </Link>
        </li>
        <li>
          <Link href={Routes.Contract}>
            <a>{NavItems.Contract}</a>
          </Link>
        </li>
        <li>
          <Link href={Routes.Pricing}>
            <a>{NavItems.Pricing}</a>
          </Link>
        </li>
        <li>
          <Link href={Routes.Services}>
            <a>{NavItems.Services}</a>
          </Link>
        </li>
        <li>
          <Link href={Routes.CustomerReviews}>
            <a>{NavItems.CustomerReviews}</a>
          </Link>
        </li>
        <li>
          <Link href={Routes.AboutUs}>
            <a>{NavItems.AboutUs}</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'The modern landing page for\n'}
            <span className="text-primary-500">React developers</span>
          </>
        }
        description="The easiest way to build a React landing page in seconds."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <a>
              <Button xl>Download Your Free Theme</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
