import { useCallback, useState } from 'react';

enum EBookingType {
  Airport = 1,
  Normal = 2,
}

const BookForm = () => {
  const [bookingType, setBookingType] = useState<EBookingType>(
    EBookingType.Airport
  );

  const onClickChangeBookingType = useCallback(
    (type: EBookingType) => () => {
      setBookingType(type);
    },
    []
  );

  return (
    <div className="max-w-screen-lg mx-auto px-3 flex items-center justify-center overflow-y-auto bg-gray-100 xs:py-[1rem] sm:py-[1rem] py-[2rem]">
      {/* Form */}
      <div className="w-[600px] h-[452px] xs:w-full xs:min-h-[452px] sm:w-full sm:min-h-[452px] flex flex-col rounded-[5px] shadow-form">
        {/* Form header */}
        <div className="w-full h-[62px] bg-primary-500 shadow-form-header flex flex-row justify-between rounded-t-[5px]">
          <button
            className={`w-1/2 flex justify-center items-center cursor-pointer border-r border-r-white ${
              bookingType === EBookingType.Airport
                ? 'text-white'
                : 'text-gray-900'
            }`}
            onClick={onClickChangeBookingType(EBookingType.Airport)}
          >
            <i className="fa fa-plane"></i>{' '}
            <span className="ml-[5px]">Đi sân bay</span>
          </button>
          <button
            className={`w-1/2 flex justify-center items-center cursor-pointer ${
              bookingType === EBookingType.Normal
                ? 'text-white'
                : 'text-gray-900'
            }`}
            onClick={onClickChangeBookingType(EBookingType.Normal)}
          >
            <i className="fa fa-road"></i>{' '}
            <span className="ml-[5px]">Đi đường dài</span>
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
              className="pl-[1rem] w-[calc(100%-150px)] sm:w-[calc(100%-66px)] xs:w-[calc(100%-66px)] focus:outline-primary-500 border border-l-0 border-[#ddd] rounded-r-[5px] placeholder:text-gray-600 sm:placeholder:text-sm xs:placeholder:text-xs"
              id="source"
              placeholder="Điểm đón"
              type="text"
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
              className="pl-[1rem] w-[calc(100%-150px)] sm:w-[calc(100%-66px)] xs:w-[calc(100%-66px)] focus:outline-primary-500 border border-l-0 border-[#ddd] rounded-r-[5px] placeholder:text-gray-600 sm:placeholder:text-sm xs:placeholder:text-xs"
              id="destination"
              placeholder="Điểm đến"
              type="text"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BookForm };
