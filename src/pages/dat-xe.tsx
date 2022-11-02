import Head from 'next/head';

import { BookForm } from '../form/book';
import { Meta } from '../layout/Meta';
import { Base } from '../templates/Base';
import { AppConfig } from '../utils/AppConfig';
import { Routes } from '../utils/Constants';

const Booking = () => (
  <Base>
    <Head>
      <link rel="canonical" href={Routes.BookTaxi} />
    </Head>
    <Meta title={`Đặt xe - ${AppConfig.title}`} />
    <BookForm />
  </Base>
);

export default Booking;
