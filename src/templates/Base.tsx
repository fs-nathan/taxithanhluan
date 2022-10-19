import { ReactNode } from 'react';

import { Contact } from '../cta/Contact';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Hero } from './Hero';

type IBaseProps = {
  children: ReactNode;
};

const Base = (props: IBaseProps) => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    {props.children}
    {/* <Banner /> */}
    <Footer />
    <Contact />
  </div>
);

export { Base };
