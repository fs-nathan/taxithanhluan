export enum EBookingType {
  Airport = 1,
  Normal = 2,
}

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
  customer: ICustomer;
  flightNo?: string;
  note?: string;
  driver?: IDriver;
  status: EBookingStatus;
}

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
