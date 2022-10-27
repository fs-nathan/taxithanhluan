/* eslint-disable no-console */
import { useEffect, useState } from 'react';

import { collection, getDocs, query, where } from 'firebase/firestore';
import { useRouter } from 'next/router';

import { database } from '../../../firebase/firebaseConfig';
import { BookForm } from '../../form/book';
import { Base } from '../../templates/Base';
import { IBooking } from '../../types/booking';
import { FirestoreBookingCollectionName, Routes } from '../../utils/Constants';

const BookingDetail = () => {
  const router = useRouter();
  const [bookingData, setBookingData] = useState<IBooking | undefined>(
    undefined
  );

  useEffect(() => {
    const id = router.query.code;
    if (id) {
      (async () => {
        const q = query(
          collection(database, FirestoreBookingCollectionName),
          where('id', '==', String(id))
        );

        try {
          const querySnapshot = await getDocs(q);
          let found = false;
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            const data = doc.data() as IBooking;
            if (data?.id === String(id)) {
              setBookingData(data);
              found = true;
            }
          });
          if (!found) router.push(Routes.BookTaxi);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [router, router.query.code]);

  return (
    <Base>
      {bookingData && <BookForm bookingData={bookingData} />}
      {!bookingData && <BookForm />}
    </Base>
  );
};

export default BookingDetail;
