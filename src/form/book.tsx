/* eslint-disable no-nested-ternary */
/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable unused-imports/no-unused-vars */
import { useCallback, useEffect, useMemo, useState } from 'react';

import dayjs from 'dayjs';
import { addDoc, collection } from 'firebase/firestore';
import { get } from 'lodash';
import { useRouter } from 'next/router';

import { database } from '../../firebase/firebaseConfig';
import {
  BreakPoints,
  CarTypes,
  DefaultBookingForm,
  IBooking,
} from '../types/booking';

enum EBookingType {
  Airport = 1,
  Normal = 2,
}

type BookFormProps = {
  bookingData?: IBooking;
};

const BookForm = (props: BookFormProps) => {
  const router = useRouter();
  const defaultBookingFields = DefaultBookingForm();
  const [booking, setBooking] = useState<IBooking>(defaultBookingFields);
  const [mailSent, setMailSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateBookingField = useCallback(
    (field: string) => (value: any) => {
      setBooking((prev) => {
        const fields = { ...prev };
        fields[field] = value;
        return fields;
      });
    },
    []
  );

  const onInputTextChange = useCallback(
    (field: string) => (event: any) => {
      updateBookingField(field)(event.target.value);
    },
    [updateBookingField]
  );

  const sendMailBooking = useCallback(async () => {
    let res = await fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(booking),
    });
    res = await res.json();
    const messages = get(res, 'response.Messages', []);
    if (messages) {
      if (messages[0].Status === 'success') {
        setMailSent(true);
      }
    }
  }, [booking]);

  const addBooking = useCallback(async () => {
    try {
      await addDoc(collection(database, 'booking'), booking);
      await sendMailBooking();
    } catch (e) {
      // console.log(e);
    }
  }, [booking, sendMailBooking]);

  const handleSubmit = useCallback(async () => {
    setLoading(true);
    await addBooking();
    setLoading(false);
  }, [addBooking]);

  const onSelectInputChange = useCallback(
    (field: string) => (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target;
      setBooking((prev) => {
        const fields = { ...prev };
        fields[field] = value;
        return fields;
      });
    },
    []
  );

  const onDateChange = useCallback((e) => {
    const date = dayjs(e.target.value).format('YYYY-MM-DD');

    setBooking((prev) => {
      const fields = { ...prev };
      fields.pickupDate = date;
      return fields;
    });
  }, []);

  const onTimeChange = useCallback((e) => {
    setBooking((prev) => {
      const fields = { ...prev };
      fields.pickupTime = e.target.value;
      return fields;
    });
  }, []);

  const onCustomerInfoChange = useCallback(
    (field: string) => (event: any) => {
      setBooking((prev) => {
        const { customer } = prev;
        customer[field] = event.target.value;
        return { ...prev, customer };
      });
    },
    []
  );

  const onCheckBoxClicked = useCallback(
    (field: string) => () => {
      setBooking((prev) => {
        const fields = { ...prev };
        fields[field] = !fields[field];
        return fields;
      });
    },
    []
  );

  const formDisabled = useMemo(() => {
    return !!props.bookingData;
  }, [props.bookingData]);

  const disabledButton = useMemo(() => {
    return (
      formDisabled ||
      !booking.source ||
      !booking.destination ||
      !booking?.customer.name ||
      !booking?.customer.phone
    );
  }, [booking, formDisabled]);

  useEffect(() => {
    if (booking && mailSent) {
      alert(
        '🙏 Cảm ơn quý khách đã tin tưởng taxisanbaypro.vn 🚕\n Chúng tôi sẽ liên hệ lại trong giây lát'
      );
      router.push(`/booking/success?code=${booking.id}`, undefined, {
        shallow: true,
      });
    }
  }, [mailSent, booking, router]);

  useEffect(() => {
    if (props.bookingData) {
      setBooking(props.bookingData);
    }
  }, [props.bookingData]);

  return (
    <div className="max-w-screen-lg mx-auto px-3 flex items-center justify-center overflow-y-auto bg-gray-100 xs:py-[1rem] sm:py-[1rem] py-[2rem]">
      {/* Form */}
      <div className="w-[600px] min-h-[452px] xs:w-full xs:min-h-[452px] sm:w-full sm:min-h-[452px] flex flex-col rounded-[5px] shadow-form">
        {/* Form header */}
        <div className="w-full h-[62px] bg-primary-500 shadow-form-header flex flex-row justify-between rounded-t-[5px]">
          <button
            className={`w-1/2 rounded-tl-[5px] flex justify-center items-center cursor-pointer border-r border-r-white ${
              booking.type === EBookingType.Airport
                ? 'text-white'
                : 'text-gray-900 bg-gray-500'
            }`}
            onClick={() => updateBookingField('type')(EBookingType.Airport)}
            disabled={formDisabled}
          >
            <i className="fa fa-plane"></i>{' '}
            <span className="ml-[5px]">Sân bay</span>
          </button>
          <button
            className={`w-1/2 rounded-tr-[5px] flex justify-center items-center cursor-pointer ${
              booking.type === EBookingType.Normal
                ? 'text-white'
                : 'text-gray-900 bg-gray-500'
            }`}
            onClick={() => updateBookingField('type')(EBookingType.Normal)}
            disabled={formDisabled}
          >
            <i className="fa fa-road"></i>{' '}
            <span className="ml-[5px]">Đường dài</span>
          </button>
        </div>

        {/* Form body */}
        <div className="w-full h-full bg-white rounded-b-[5px] p-[1rem] text-gray-900 flex flex-col space-y-[1rem]">
          <div className="w-full h-[40px] flex flex-row px-0">
            <div className="w-[150px] sm:w-[66px] xs:w-[66px] h-full bg-[#f1f1f1] flex items-center justify-center p-[5px] rounded-l-[5px]">
              <i className="fa-solid fa-location-dot xs:fa-xs sm:fa-sm"></i>
              <label
                htmlFor="source"
                className="ml-[5px] sm:text-sm xs:text-xs"
              >
                Điểm đón
              </label>
            </div>
            <input
              className="sm:text-sm xs:text-xs pl-[1rem] w-[calc(100%-150px)] sm:w-[calc(100%-66px)] xs:w-[calc(100%-66px)] focus:outline-primary-500 border border-l-0 border-[#ddd] rounded-r-[5px] placeholder:text-gray-600 sm:placeholder:text-sm xs:placeholder:text-xs"
              id="source"
              placeholder="Điểm đón"
              type="text"
              onChange={onInputTextChange('source')}
              disabled={formDisabled}
              defaultValue={booking.source}
            ></input>
          </div>
          <div className="w-full h-[40px] flex flex-row px-0">
            <div className="w-[150px] sm:w-[66px] xs:w-[66px] h-full bg-[#f1f1f1] flex items-center justify-center p-[5px] rounded-l-[5px]">
              <i className="fa-solid fa-location-dot xs:fa-xs sm:fa-sm"></i>
              <label
                htmlFor="destination"
                className="ml-[5px] sm:text-sm xs:text-xs"
              >
                Điểm đến
              </label>
            </div>
            <input
              className="sm:text-sm xs:text-xs pl-[1rem] w-[calc(100%-150px)] sm:w-[calc(100%-66px)] xs:w-[calc(100%-66px)] focus:outline-primary-500 border border-l-0 border-[#ddd] rounded-r-[5px] placeholder:text-gray-600 sm:placeholder:text-sm xs:placeholder:text-xs"
              id="destination"
              placeholder="Điểm đến"
              type="text"
              onChange={onInputTextChange('destination')}
              disabled={formDisabled}
              defaultValue={booking.destination}
            ></input>
          </div>

          <div className="w-full h-[40px] flex flex-row px-0 space-x-2">
            <div className="w-1/2 h-full">
              <input
                className="w-full h-full sm:text-sm xs:text-xs pl-[1rem] sm:pl-[0.5rem] xs:pl-[0.5rem] focus:outline-primary-500 border border-[#ddd] rounded-[5px] placeholder:text-gray-600 sm:placeholder:text-sm xs:placeholder:text-xs"
                id="name"
                placeholder="Họ tên*"
                type="text"
                onChange={onCustomerInfoChange('name')}
                disabled={formDisabled}
                defaultValue={booking.customer.name}
              ></input>
            </div>
            <div className="w-1/2 h-full">
              <input
                className="w-full h-full sm:text-sm xs:text-xs pl-[1rem] sm:pl-[0.5rem] xs:pl-[0.5rem] focus:outline-primary-500 border border-[#ddd] rounded-[5px] placeholder:text-gray-600 sm:placeholder:text-sm xs:placeholder:text-xs"
                id="phone"
                placeholder="Số điện thoại*"
                type="text"
                onChange={onCustomerInfoChange('phone')}
                disabled={formDisabled}
                defaultValue={
                  formDisabled
                    ? `${booking.customer.phone}`.replace(/\d(?=\d{4})/g, '*')
                    : booking.customer.phone
                }
              ></input>
            </div>
          </div>
          <div className="w-full h-[40px] flex flex-row px-0 space-x-2">
            <input
              className="w-full h-full sm:text-sm xs:text-xs pl-[1rem] sm:pl-[0.5rem] xs:pl-[0.5rem] focus:outline-primary-500 border border-[#ddd] rounded-[5px] placeholder:text-gray-600 sm:placeholder:text-sm xs:placeholder:text-xs"
              id="email"
              placeholder="Email (nếu có)"
              type="email"
              onChange={onCustomerInfoChange('email')}
              disabled={formDisabled}
              defaultValue={booking.customer.email}
            ></input>
          </div>
          <div className="w-full h-[40px] flex flex-row px-0 space-x-2">
            <div className="w-1/2 h-full">
              <select
                id="car_type"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm xs:text-xs rounded-lg focus:outline-primary-500 block w-full p-2.5"
                value={booking.carType}
                onChange={onSelectInputChange('carType')}
                disabled={formDisabled}
              >
                {CarTypes.map((type) => (
                  <option key={`${type}-slots`} value={type}>
                    {type} chỗ
                  </option>
                ))}
              </select>
            </div>
            <div className="w-1/2 h-full">
              <select
                id="break_points"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm xs:text-xs rounded-lg focus:outline-primary-500 block w-full p-2.5"
                value={booking.breakPoints}
                onChange={onSelectInputChange('breakPoints')}
                disabled={formDisabled}
              >
                {BreakPoints.map((item) => (
                  <option key={`${item}-slots`} value={item}>
                    {item} điểm dừng
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="w-full h-[40px] flex flex-row px-0 space-x-2">
            <div className="w-1/2 h-full">
              <input
                className="w-full h-full sm:text-sm xs:text-xs pl-[1rem] sm:pl-[0.5rem] xs:pl-[0.5rem] focus:outline-primary-500 border border-[#ddd] rounded-[5px] placeholder:text-gray-600 sm:placeholder:text-sm xs:placeholder:text-xs"
                id="pickup_date"
                type="date"
                value={booking.pickupDate}
                onChange={onDateChange}
                disabled={formDisabled}
              ></input>
            </div>
            <div className="w-1/2 h-full">
              <input
                className="w-full h-full sm:text-sm xs:text-xs pl-[1rem] sm:pl-[0.5rem] xs:pl-[0.5rem] focus:outline-primary-500 border border-[#ddd] rounded-[5px] placeholder:text-gray-600 sm:placeholder:text-sm xs:placeholder:text-xs"
                id="pickup_time"
                placeholder=""
                type="time"
                value={booking.pickupTime}
                onChange={onTimeChange}
                disabled={formDisabled}
              ></input>
            </div>
          </div>
          {booking.type === EBookingType.Airport && (
            <div className="w-full h-[40px] flex flex-row px-0 space-x-2">
              <input
                className="w-full h-full sm:text-sm xs:text-xs pl-[1rem] sm:pl-[0.5rem] xs:pl-[0.5rem] focus:outline-primary-500 border border-[#ddd] rounded-[5px] placeholder:text-gray-600 sm:placeholder:text-sm xs:placeholder:text-xs"
                id="flight_no"
                placeholder="Mã chuyến bay (nếu có)"
                type="text"
                onChange={onInputTextChange('flightNo')}
                disabled={formDisabled}
                defaultValue={booking.flightNo}
              ></input>
            </div>
          )}
          <div className="w-full h-[20px] flex flex-row px-0 space-x-2">
            <div className="w-1/2 h-full flex items-center">
              <div className="flex items-center">
                <input
                  id="twoways"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:outline-none"
                  checked={booking.isTwoWaysBooking}
                  onClick={onCheckBoxClicked('isTwoWaysBooking')}
                  disabled={formDisabled}
                />
                <label
                  htmlFor="twoways"
                  className="ml-2 sm:text-sm xs:text-xs text-gray-900"
                >
                  Hai chiều
                </label>
              </div>
            </div>
            <div className="w-1/2 h-full flex items-center">
              <div className="flex items-center">
                <input
                  id="bill"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:outline-none"
                  checked={booking.isBillRequired}
                  onClick={onCheckBoxClicked('isBillRequired')}
                  disabled={formDisabled}
                />
                <label
                  htmlFor="bill"
                  className="ml-2 sm:text-sm xs:text-xs text-gray-900"
                >
                  Xuất hóa đơn
                </label>
              </div>
            </div>
          </div>
          <button
            className="w-full h-[40px] btn btn-primary bg-primary-500 rounded-[5px] text-white sm:text-sm xs:text-xs disabled:bg-gray-500 text-center"
            onClick={handleSubmit}
            disabled={disabledButton || loading}
          >
            {!loading
              ? props.bookingData
                ? 'Đã đặt xe'
                : 'Đặt xe'
              : 'Đang tiến hành đặt xe ...'}
          </button>
        </div>
      </div>
    </div>
  );
};

export { BookForm };
