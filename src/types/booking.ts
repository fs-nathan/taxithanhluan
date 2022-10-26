import dayjs from 'dayjs';

import { getId } from '../utils/uuid';

export enum EBookingType {
  Airport = 1,
  Normal = 2,
}

export const CarTypes = [4, 5, 7, 16];
export const BreakPoints = [1, 2, 3, 4, 5];

export enum ECarType {
  FourSeat = 4,
  FiveSeat = 5,
  SevenSeat = 7,
  SixteenSeat = 16,
}

export enum EBookingStatus {
  New = 1,
  Confirmed = 2,
  PickedUp = 3,
  Completed = 4,
  Cancelled = 5,
}

export interface IBooking {
  id?: string;
  type: EBookingType;
  source: string;
  destination: string;
  isTwoWaysBooking: boolean;
  isBillRequired: boolean;
  carType: ECarType;
  pickupTime: string;
  pickupDate: string;
  customer: ICustomer;
  flightNo?: string;
  note?: string;
  driver?: IDriver;
  status: EBookingStatus;
  breakPoints?: number;
}

export const DefaultBookingForm = () => {
  return {
    id: getId(),
    type: EBookingType.Airport,
    source: '',
    destination: '',
    isTwoWaysBooking: false,
    isBillRequired: false,
    carType: ECarType.FourSeat,
    pickupTime: dayjs().format('HH:mm'),
    pickupDate: dayjs().format('YYYY-MM-DD'),
    customer: {
      name: '',
      phone: '',
    },
    flightNo: '',
    note: '',
    status: EBookingStatus.New,
    breakPoints: 1,
  } as IBooking;
};

export interface ICustomer {
  name: string;
  phone: string;
  email?: string;
}

export interface IDriver {
  name: string;
  phone: string;
  licensePlates?: string;
}
