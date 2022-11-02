import { BookForm } from '../form/book';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { Base } from '../templates/Base';
import { VerticalFeatures } from '../templates/VerticalFeatures';

const Index = () => (
  <Base>
    <Section yPadding="pt-10 xs:pt-3 sm:pt-3">
      <HeroOneButton
        title={
          <>
            <span className="text-primary-500 capitalize">taxi sân bay</span>
          </>
        }
        description="Xe Hà Nội - Nội Bài và Hà Nội đi các tỉnh"
        child={<BookForm />}
      />
    </Section>
    <VerticalFeatures />
  </Base>
);

export default Index;
