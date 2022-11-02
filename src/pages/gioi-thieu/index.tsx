import Link from 'next/link';

import { Button } from '../../button/Button';
import { VerticalFeatureRow } from '../../feature/VerticalFeatureRow';
import { HeroOneButton } from '../../hero/HeroOneButton';
import { Section } from '../../layout/Section';
import { Base } from '../../templates/Base';
import { Routes } from '../../utils/Constants';

const GioiThieu = () => (
  <Base>
    <Section yPadding="pt-10 xs:pt-3 sm:pt-3">
      <HeroOneButton
        title={
          <>
            <span className="text-primary-500 capitalize">taxi sân bay</span>
          </>
        }
        description="Chuyên tuyến Hà Nội - Nội Bài và Hà Nội đi các tỉnh 24/7"
        child={
          <Link href={Routes.BookTaxi} passHref>
            <a>
              <Button xl>Đặt xe ngay</Button>
            </a>
          </Link>
        }
      />
    </Section>
    <Section
      title="Giới thiệu về chúng tôi"
      description="Kinh nghiệm hoạt động trên 5 năm. Dàn xe đời mới, sang trọng, chất lượng cao từ 4 chỗ  đến 16 chỗ luôn sẵn sàng phục vụ 24/7 mọi lúc mọi nơi."
    >
      <VerticalFeatureRow
        title="Lợi ích khi chọn taxisanbaypro.vn"
        description=""
        image="/assets/images/service.jpg"
        imageAlt="Dịch vụ taxisanbaypro.vn"
        bulletPoints={[
          'Chúng tôi chuyên tuyến taxi Nội Bài Hà Nội và Hà Nội đi đường dài đến các tỉnh khắp cả nước',
          'Dàn xe chất lượng cao, đa dạng từ 4 chỗ đến 16 chỗ',
          'Giá cước rẻ nhất thị trường, niêm yết trọn gói, có hóa đơn VAT',
          'Đón trả khách đúng giờ, đúng tuyến',
          'Miễn thời gian chờ khách 60 phút',
          'Tổng đài hỗ trợ luôn sẵn sàng 24/7',
          'Hệ thống quản lý đặt xe chuyên nghiệp',
        ]}
      />
    </Section>
  </Base>
);

export default GioiThieu;
