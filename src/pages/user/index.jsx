import React from "react";
import { Link } from "react-router-dom";
import NavbarDashboard from "../../common/navbarDashboard";
import avatarTest from "../../assets/images/avatarTest.jpg";

const Home = () => {
  return (
    <>
      <div className="w-[1440px] h-[810px] relative bg-[#F7F7F7] rounded-2xl">
        {/* Navbar Dashboard */}
        <NavbarDashboard />
        {/* Info user */}
        <div className="bg-[#B1B1B1]/[.06] absolute left-[200px] w-[1240px] h-[810px] rounded-r-2xl">
          {/* Top Nav User */}
          <div className="absolute w-[1240px] h-[88px] flex">
            <p className="w-[170px] h-[30px] mt-[29px] ml-[24px] font-bold text-[20px] text-[#FF9138] flex-none order-1 flex-grow-0">
              Thông tin cá nhân
            </p>
            <div className="absolute right-[260px] left-[948px] top-[28px] flex gap-6 items-center justify-center">
              <div className="w-8 h-8  shrink-0 bg-orange-200 rounded-full flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.1168 12.0743L15.2834 10.691C15.1084 10.3827 14.9501 9.79935 14.9501 9.45768V7.34935C14.9501 5.39102 13.8001 3.69935 12.1418 2.90768C11.7084 2.14102 10.9084 1.66602 9.99178 1.66602C9.08345 1.66602 8.26678 2.15768 7.83345 2.93268C6.20845 3.74102 5.08345 5.41602 5.08345 7.34935V9.45768C5.08345 9.79935 4.92511 10.3827 4.75012 10.6827L3.90845 12.0743C3.57512 12.6327 3.50012 13.2493 3.70845 13.816C3.90845 14.3743 4.38345 14.8077 5.00012 15.016C6.61678 15.566 8.31678 15.8327 10.0168 15.8327C11.7168 15.8327 13.4168 15.566 15.0334 15.0244C15.6168 14.8327 16.0668 14.391 16.2834 13.816C16.5001 13.241 16.4418 12.6077 16.1168 12.0743Z"
                    fill="#FFAC6A"
                  />
                  <path
                    d="M12.3582 16.6743C12.0082 17.641 11.0832 18.3327 9.9999 18.3327C9.34157 18.3327 8.69157 18.066 8.23324 17.591C7.96657 17.341 7.76657 17.0077 7.6499 16.666C7.75824 16.6827 7.86657 16.691 7.98324 16.7077C8.1749 16.7327 8.3749 16.7577 8.5749 16.7743C9.0499 16.816 9.53324 16.841 10.0166 16.841C10.4916 16.841 10.9666 16.816 11.4332 16.7743C11.6082 16.7577 11.7832 16.7493 11.9499 16.7243C12.0832 16.7077 12.2166 16.691 12.3582 16.6743Z"
                    fill="#FFAC6A"
                  />
                </svg>
              </div>
              <div className="flex gap-2 w-[172px] h-[42px]">
                <div className="w-10 h-10 shrink-0">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src={avatarTest}
                    alt=""
                  />
                </div>
                <div>
                  <div className="flex flex-col w-[172px]">
                    <p className="font-normal text-[12px] text-[#7E7D88] max-w-max w-full">
                      Xin chào
                    </p>
                    <p className="font-bold text-base text-[#535261] max-w-max w-full">
                      Lê Quỳnh Ái Vân
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* show info user */}
          <div className="absolute w-[1112px] h-[397px] left-6 top-[168px] bg-white rounded-xl flex gap-6">
            {/* avatar & username  */}
            <div className="w-[248px] h-[303px] ml-6 mt-10 ">
              <div>
                <div className="absolute w-[248px] h-[248px] ">
                  <img
                    className="rounded-full h-[248px] object-cover"
                    src={avatarTest}
                    alt=""
                  />
                </div>
                <div className="absolute flex items-center justify-center w-[45px] h-[45px] left-[195px] top-[246px] bg-[#FF7506] border-[2px] border-solid border-[#FFFFFF] rounded-full">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.85 3.75C18.3747 3.75014 18.8861 3.91536 19.3116 4.22226C19.7372 4.52916 20.0554 4.96219 20.2213 5.46L20.9 7.5H23.75C24.7446 7.5 25.6984 7.89509 26.4017 8.59835C27.1049 9.30161 27.5 10.2554 27.5 11.25V21.25C27.5 22.2446 27.1049 23.1984 26.4017 23.9017C25.6984 24.6049 24.7446 25 23.75 25H6.25C5.25544 25 4.30161 24.6049 3.59835 23.9017C2.89509 23.1984 2.5 22.2446 2.5 21.25V11.25C2.5 10.2554 2.89509 9.30161 3.59835 8.59835C4.30161 7.89509 5.25544 7.5 6.25 7.5H9.1L9.77875 5.46C9.94462 4.96199 10.263 4.52881 10.6889 4.22189C11.1147 3.91497 11.6263 3.74987 12.1512 3.75H17.8488H17.85ZM17.85 6.25H12.15L11.4713 8.29C11.3054 8.78801 10.987 9.22118 10.5611 9.52811C10.1353 9.83503 9.62366 10.0001 9.09875 10H6.25C5.91848 10 5.60054 10.1317 5.36612 10.3661C5.1317 10.6005 5 10.9185 5 11.25V21.25C5 21.5815 5.1317 21.8995 5.36612 22.1339C5.60054 22.3683 5.91848 22.5 6.25 22.5H23.75C24.0815 22.5 24.3995 22.3683 24.6339 22.1339C24.8683 21.8995 25 21.5815 25 21.25V11.25C25 10.9185 24.8683 10.6005 24.6339 10.3661C24.3995 10.1317 24.0815 10 23.75 10H20.9C20.3753 9.99986 19.8639 9.83464 19.4384 9.52774C19.0128 9.22084 18.6946 8.78781 18.5287 8.29L17.85 6.25ZM11.875 15.625C11.875 14.7962 12.2042 14.0013 12.7903 13.4153C13.3763 12.8292 14.1712 12.5 15 12.5C15.8288 12.5 16.6237 12.8292 17.2097 13.4153C17.7958 14.0013 18.125 14.7962 18.125 15.625C18.125 16.4538 17.7958 17.2487 17.2097 17.8347C16.6237 18.4208 15.8288 18.75 15 18.75C14.1712 18.75 13.3763 18.4208 12.7903 17.8347C12.2042 17.2487 11.875 16.4538 11.875 15.625V15.625ZM15 10C13.5082 10 12.0774 10.5926 11.0225 11.6475C9.96763 12.7024 9.375 14.1332 9.375 15.625C9.375 17.1168 9.96763 18.5476 11.0225 19.6025C12.0774 20.6574 13.5082 21.25 15 21.25C16.4918 21.25 17.9226 20.6574 18.9775 19.6025C20.0324 18.5476 20.625 17.1168 20.625 15.625C20.625 14.1332 20.0324 12.7024 18.9775 11.6475C17.9226 10.5926 16.4918 10 15 10V10Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="absolute w-[186px] mt-[267px] ml-[31px] h-9 font-bold text-base flex items-center justify-center text-[#282739]">
                <span>Lê Quỳnh Ái Vân</span>
              </div>
            </div>
            {/* Info */}
            <div className="w-[792px] h-[276px]  mt-10 flex gap-6">
              {/* Info Trái */}
              <div className="flex flex-col ">
                <div className="w-[384px] h-[76px] mb-6">
                  <span className="w-full h-6 font-semibold text-base text-[#282739] flex-none order-none flex-grow-0 mb-2">
                    Tên người dùng
                  </span>
                  <div className="flex flex-row items-center py-3 px-4 w-[384px] h-11 bg-[#EAEAEC] rounded-md">
                    <p className="text-base font-normal text-[#535261 opacity-50 flex-none order-none flex-grow-0">
                      Lê Quỳnh Ái Vân
                    </p>
                  </div>
                </div>
                <div className=" w-[384px] h-[76px] mb-6">
                  <span className="w-full h-6 font-semibold text-base text-[#282739] flex-none order-none flex-grow-0 mb-2">
                    Số điện thoại
                  </span>
                  <div className="flex flex-row items-center py-3 px-4 w-[384px] h-11 bg-[#EAEAEC] rounded-md">
                    <p className="text-base font-normal text-[#535261 opacity-50 flex-none order-none flex-grow-0">
                      0767375921
                    </p>
                  </div>
                </div>
                <div className=" w-[384px] h-[76px] mb-6">
                  <span className="w-full h-6 font-semibold text-base text-[#282739] flex-none order-none flex-grow-0 mb-2">
                    Email:
                  </span>
                  <div className="flex flex-row items-center py-3 px-4 w-[384px] h-11 bg-[#EAEAEC] rounded-md">
                    <p className="text-base font-normal text-[#535261 opacity-50 flex-none order-none flex-grow-0">
                      adminSSO1@domain.com
                    </p>
                  </div>
                </div>
              </div>
              {/* Info Phải */}
              <div className="flex flex-col ">
                <div className="w-[384px] h-[76px] mb-6">
                  <span className="w-full h-6 font-semibold text-base text-[#282739] flex-none order-none flex-grow-0 mb-2">
                    Tên đăng nhập
                  </span>
                  <div className="flex flex-row items-center py-3 px-4 w-[384px] h-11 bg-[#EAEAEC] rounded-md">
                    <p className="text-base font-normal text-[#535261 opacity-50 flex-none order-none flex-grow-0">
                      lequynhaivan01
                    </p>
                  </div>
                </div>
                <div className=" w-[384px] h-[76px] mb-6">
                  <span className="w-full h-6 font-semibold text-base text-[#282739] flex-none order-none flex-grow-0 mb-2">
                    Mật khẩu
                  </span>
                  <div className="flex flex-row items-center py-3 px-4 w-[384px] h-11 bg-[#EAEAEC] rounded-md">
                    <p className="text-base font-normal text-[#535261 opacity-50 flex-none order-none flex-grow-0">
                      311940211
                    </p>
                  </div>
                </div>
                <div className=" w-[384px] h-[76px] mb-6">
                  <span className="w-full h-6 font-semibold text-base text-[#282739] flex-none order-none flex-grow-0 mb-2">
                    Vai trò:
                  </span>
                  <div className="flex flex-row items-center py-3 px-4 w-[384px] h-11 bg-[#EAEAEC] rounded-md">
                    <p className="text-base font-normal text-[#535261 opacity-50 flex-none order-none flex-grow-0">
                      Kế toán
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
