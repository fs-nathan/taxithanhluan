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
        Cc: [
          {
            Email: 'nathan.makeitpro@gmail.com',
            Name: 'Nathan',
          },
        ],
        Subject:
          subject || process.env.NODE_ENV === 'production'
            ? '[taxisanbaypro.vn] New Booking'
            : '[taxisanbaypro.vn] Warning',
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

  const res = await axios(config);

  return res.data;
};

export const generateBookingHTMLEmailContent = (booking: IBooking) => {
  return `
  <div style="width: 80%; border: 0.5px; border-style: dashed; padding: 1rem;">
  <p>Code: <b>${booking.id || ''}</b></p>
  <p>Booking: <b>${
    booking.type === EBookingType.Airport ? 'Sân bay' : 'Đường dài'
  }</b></p>
  <p>Điểm đón: <b>${booking.source}</b></p>
  <p>Điểm trả: <b>${booking.destination}</b></p>
  <p>Hai chiều: <b>${booking.isTwoWaysBooking ? 'Có' : 'Không'}</b></p>
  <p>Xuất hóa đơn: <b>${booking.isBillRequired ? 'Có' : 'Không'}</b></p>
  <p>Loại xe: <b>${booking.carType} chỗ</b></p>
  <p>Ngày đón: <b>${booking.pickupDate}</b></p>
  <p>Thời gian đón: <b>${booking.pickupTime}</b></p>
  <p>Điểm dừng: <b>${booking.breakPoints}</b></p>
  <p>Tên khách: <b>${booking.customer.name}</b></p>
  <p>SĐT khách: <a href="tel:${booking.customer.phone}">${
    booking.customer.phone
  }</a></p>
  <p>Email khách: <b>${booking.customer.email || 'Không có'}</b></p>
  <p>Ghi chú: <b>${booking.note || 'Không có'}</b></p>
  <p>Mã chuyến bay (nếu có): <b>${booking.flightNo || 'Không có'}</b></p>
  <a href="https://${process.env.NEXT_PUBLIC_WEB_DOMAIN}/booking/ket-qua/${
    booking.id
  }" target="_blank">Booking Link</a>
  </div>
  `;
};
