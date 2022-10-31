import { BookForm } from '../../form/book';
import { Meta } from '../../layout/Meta';
import { Base } from '../../templates/Base';
import { AppConfig } from '../../utils/AppConfig';

const Booking = () => (
  <Base>
    <Meta title={`Đặt xe - ${AppConfig.title}`} />
    <BookForm />
  </Base>
);

export default Booking;
