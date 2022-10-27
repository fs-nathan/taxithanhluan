import Link from 'next/link';

import { Button } from '../../button/Button';
import { VerticalFeatureRow } from '../../feature/VerticalFeatureRow';
import { HeroOneButton } from '../../hero/HeroOneButton';
import { Section } from '../../layout/Section';
import { Base } from '../../templates/Base';
import { Routes } from '../../utils/Constants';

const GioiThieu = () => (
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
          'Dàn xe chất lượng cao, đa dạng từ 4 chỗ đến 16 chỗ',
          'Giá cước rẻ nhất thị trường, niêm yết trọn gói, có hóa đơn VAT',
          'Đón trả khách đúng giờ, đúng tuyến',
          'Miễn thời gian chờ khách 60 phút',
          'Tổng đài hỗ trợ luôn sẵn sàng 24/7',
          'Hệ thống quản lý booking chuyên nghiệp',
        ]}
      />
    </Section>
  </Base>
);

export default GioiThieu;
