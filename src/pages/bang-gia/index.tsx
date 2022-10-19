import { Base } from '../../templates/Base';

const BangGia = () => (
  <Base>
    <div className="mt-10 flex flex-wrap items-center">
      <div className="w-full text-center sm:px-6">
        <h3 className="text-3xl text-gray-900 font-semibold">
          Bảng giá dịch vụ
        </h3>
        <div className="mt-6 text-base leading-9 px-6">
          Đặt xe ngay để nhận báo giá cụ thể chi tiết
        </div>
      </div>

      {/* Table */}

      <div className="w-full pl-[calc(50vw-300px)] rounded-xl mt-10 sm:hidden xs:hidden">
        <table className="w-[600px] text-sm text-left text-gray-500 dark:text-gray-400 rounded-xl">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Hành trình
              </th>
              <th scope="col" className="py-3 px-6">
                4 chỗ
              </th>
              <th scope="col" className="py-3 px-6">
                5 chỗ
              </th>
              <th scope="col" className="py-3 px-6">
                7 chỗ
              </th>
              <th scope="col" className="py-3 px-6">
                16 chỗ
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Hà Nội - Nội Bài
              </th>
              <td className="py-4 px-6 after:content-['K']">180</td>
              <td className="py-4 px-6 after:content-['K']">200</td>
              <td className="py-4 px-6 after:content-['K']">250</td>
              <td className="py-4 px-6 after:content-['K']">450</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Nội Bài - Hà Nội
              </th>
              <td className="py-4 px-6 after:content-['K']">250</td>
              <td className="py-4 px-6 after:content-['K']">270</td>
              <td className="py-4 px-6 after:content-['K']">300</td>
              <td className="py-4 px-6 after:content-['K']">500</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Hà Nội - Nội Bài - Hà Nội
              </th>
              <td className="py-4 px-6 after:content-['K']">430</td>
              <td className="py-4 px-6 after:content-['K']">450</td>
              <td className="py-4 px-6 after:content-['K']">500</td>
              <td className="py-4 px-6 after:content-['K']">850</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="hidden w-full rounded-xl mt-10 sm:block xs:block">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-xl">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-3">
                Hành trình
              </th>
              <th scope="col" className="py-3 px-3">
                Xe 04 chỗ
              </th>
              <th scope="col" className="py-3 px-3">
                Xe 05 chỗ
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Hà Nội - Nội Bài
              </th>
              <td className="py-4 px-3 after:content-['K']">180</td>
              <td className="py-4 px-3 after:content-['K']">200</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Nội Bài - Hà Nội
              </th>
              <td className="py-4 px-3 after:content-['K']">250</td>
              <td className="py-4 px-3 after:content-['K']">270</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="py-4 px-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Hà Nội - Nội Bài - Hà Nội
              </th>
              <td className="py-4 px-3 after:content-['K']">430</td>
              <td className="py-4 px-3 after:content-['K']">450</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="hidden w-full rounded-xl mt-10 sm:block xs:block">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-xl">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-3">
                Hành trình
              </th>
              <th scope="col" className="py-3 px-3">
                Xe 07 chỗ
              </th>
              <th scope="col" className="py-3 px-3">
                Xe 16 chỗ
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Hà Nội - Nội Bài
              </th>
              <td className="py-4 px-3 after:content-['K']">250</td>
              <td className="py-4 px-3 after:content-['K']">450</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Nội Bài - Hà Nội
              </th>
              <td className="py-4 px-3 after:content-['K']">300</td>
              <td className="py-4 px-3 after:content-['K']">500</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="py-4 px-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Hà Nội - Nội Bài - Hà Nội
              </th>
              <td className="py-4 px-3 after:content-['K']">500</td>
              <td className="py-4 px-3 after:content-['K']">850</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="text-sm text-gray-900 px-3 my-10 text-center leading-9">
      <ul>
        <li>
          Áp dụng 5 quận nội thành Cầu Giấy, Đống Đa, Ba Đình, Hoàn Kiếm, Tây
          Hồ.
        </li>
        <li>Quận huyện khác phụ thu 20k – 50k (Tùy địa điểm+ giờ đi).</li>
        <li>
          Đón khách tại sảnh sân bay, bê biển tên: Phụ thu 30.000đ – 50.000đ
          biển (Tùy giờ).
        </li>
      </ul>
    </div>
  </Base>
);

export default BangGia;
