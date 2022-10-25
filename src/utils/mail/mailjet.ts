/* eslint-disable func-names */
import axios from 'axios';

import { EBookingType, IBooking } from '../../types/booking';

export const sendEmail = async (
  name?: string,
  email?: string,
  subject?: string,
  textPart?: string,
  htmlPart?: string
) => {
  const data = JSON.stringify({
    Messages: [
      {
        From: {
          Email: process.env.NEXT_PUBLIC_GMAIL_SEND_FROM_USER,
          Name: process.env.NEXT_PUBLIC_GMAIL_SEND_FROM_USER,
        },
        To: [
          {
            Email: email || process.env.NEXT_PUBLIC_GMAIL_SEND_TO_USER,
            Name: name || process.env.NEXT_PUBLIC_GMAIL_SEND_TO_USER,
          },
        ],
        Subject: subject || '[taxisanbaypro.vn] Booking Update',
        HTMLPart: htmlPart || 'Đơn booking mới!!!',
        TextPart: textPart || '',
      },
    ],
  });

  const config = {
    method: 'post',
    url: 'https://api.mailjet.com/v3.1/send',
    data,
    headers: { 'Content-Type': 'application/json' },
    auth: {
      username: process.env.NEXT_PUBLIC_MAILJET_API_KEY || '',
      password: process.env.NEXT_PUBLIC_MAILJET_SECRET || '',
    },
  };

  return axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const generateBookingHTMLEmailContent = (booking: IBooking) => {
  return `
  <div style="width: 80%; border: 0.5px; border-style: dashed; padding: 1rem;">
  <p>Booking: <b>${
    booking.type === EBookingType.Airport ? 'Đi sân bay' : 'Đi đường thường'
  }</b></p>
  <p>Điểm đón: <b>${booking.source}</b></p>
  <p>Điểm trả: <b>${booking.destination}</b></p>
  <p>Hai chiều: <b>${booking.isTwoWaysBooking ? 'Có' : 'Không'}</b></p>
  <p>Xuất hóa đơn: <b>${booking.isBillRequired ? 'Có' : 'Không'}</b></p>
  <p>Loại xe: <b>${booking.carType} chỗ</b></p>
  <p>Thời gian đón: <b>${booking.pickupTime}</b></p>
  <p>Tên khách: <b>${booking.customer.name}</b></p>
  <p>SĐT khách: <a href="tel:${booking.customer.phone}">${
    booking.customer.phone
  }</a></p>
  <p>Email khách: <b>${booking.customer.email || 'Không có'}</b></p>
  <p>Ghi chú: <b>${booking.note || 'Không có'}</b></p>
  <p>Mã chuyến bay (nếu có): <b>${booking.flightNo || 'Không có'}</b></p>
  </div>
  `;
};
