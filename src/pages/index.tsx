import Link from 'next/link';

import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { Base } from '../templates/Base';
import { VerticalFeatures } from '../templates/VerticalFeatures';
import { Routes } from '../utils/Constants';

const Index = () => (
  <Base>
    <Section yPadding="pt-10">
      <HeroOneButton
        title={
          <>
            {'Chuyên đưa đón\n'}
            <span className="text-primary-500">Khách đi sân bay</span>
          </>
        }
        description="Cung cấp xe đi Hà Nội - Nội Bài và đi các tỉnh 24/7"
        button={
          <Link href={Routes.BookTaxi}>
            <a>
              <Button xl>Đặt xe ngay</Button>
            </a>
          </Link>
        }
      />
    </Section>
    <VerticalFeatures />
  </Base>
);

export default Index;
