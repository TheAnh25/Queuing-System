import React from "react";
import avatarTest from "../../../assets/images/avatarTest.jpg";
import NavbarDashboard from "../../../common/navbarDashboard";
import NotiUser from "../../../common/notiUser";
import { Link, useParams } from "react-router-dom";

const DetailDevice = () => {
  const param = useParams();
  return (
    <>
      <div className=" flex h-[810px]  bg-[#F7F7F7] rounded-2xl mx-auto">
        {/* Navbar  */}
        <NavbarDashboard />
        {/*Thiết bị*/}
        <div className="max-w-full h-[810px] rounded-r-2xl pl-[24px]">
          {/* Top Nav User */}
          <div className="w-[1240px] h-[88px] flex justify-between items-center">
            <div className="flex gap-4 justify-center items-center h-[30px]">
              <div>
                <p className="  font-bold text-[20px] text-[#7E7D88] ">
                  Thiết bị
                </p>
              </div>
              <div>
                <i className="fa-solid fa-angle-right text-[#7E7D88]"></i>
              </div>
              <div>
                <p className="text-[#7E7D88] font-bold text-[20px] ">
                  Danh sách thiết bị
                </p>
              </div>
              <div>
                <i className="fa-solid fa-angle-right text-[#7E7D88]"></i>
              </div>
              <div>
                <p className="text-[#FF7506] font-bold text-[20px] ">
                  Chi tiết thiết bị
                </p>
              </div>
            </div>

            <div className=" flex gap-6 items-center justify-center pr-16">
              <NotiUser />
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
          {/*Title*/}
          <div className="h-[36px] font-bold text-[24px] text-[#FF7506] mb-5">
            <span>Quản lý thiết bị</span>
          </div>

          {/* Nội dung thiết bị */}
          <div className="flex gap-4 w-full">
            <div className="flex flex-col gap-4 max-w-[1112px] w-full bg-white shadow-xl mb-[50px] max-h-[604px] h-full">
              {/* Nội dung thiết bị */}
              <div className="max-w-[1152px] w-full max-h-[550px] h-full flex gap-6 ">
                <div className="max-w-[1152px] w-full h-full  shrink-0 flex flex-col  px-6">
                  <span className="text-[20px] font-bold text-[#FF7506] my-4">
                    Thông tin thiết bị
                  </span>
                  {/* Chi tiết thông tin */}
                  <div className="flex gap-6">
                    {/* Thông tin thiết bị bên trái  */}
                    <div className="flex flex-col gap-4 mb-4 max-w-[540px] w-full">
                      <div className="flex gap-11 items-center">
                        <span className="text-[#282739] text-base font-semibold">
                          Mã thiết bị:
                        </span>
                        <span className="text-[#535261] text-base font-normal">
                          KIO_01
                        </span>
                      </div>
                      <div className="flex gap-11 items-center">
                        <span className="text-[#282739] text-base font-semibold">
                          Mã thiết bị:
                        </span>
                        <span className="text-[#535261] text-base font-normal">
                          Kiosk
                        </span>
                      </div>{" "}
                      <div className="flex gap-11 items-center">
                        <span className="text-[#282739] text-base font-semibold">
                          Mã thiết bị:
                        </span>
                        <span className="text-[#535261] text-base font-normal">
                          128.172.308
                        </span>
                      </div>
                    </div>
                    {/* Thông tin thiết bị bên phải  */}
                    <div className="flex flex-col gap-4 mb-4 max-w-[540px] w-full">
                      <div className="flex gap-11 items-center">
                        <span className="text-[#282739] text-base font-semibold">
                          Mã thiết bị:
                        </span>
                        <span className="text-[#535261] text-base font-normal">
                          Kiosk
                        </span>
                      </div>
                      <div className="flex gap-11 items-center">
                        <span className="text-[#282739] text-base font-semibold">
                          Mã thiết bị:
                        </span>
                        <span className="text-[#535261] text-base font-normal">
                          Linhkyo011
                        </span>
                      </div>{" "}
                      <div className="flex gap-11 items-center">
                        <span className="text-[#282739] text-base font-semibold">
                          Mã thiết bị:
                        </span>
                        <span className="text-[#535261] text-base font-normal">
                          CMS
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 mb-[400px]">
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <span className="text-[#282739] text-base font-semibold">
                          Dịch vụ sử dụng:
                        </span>
                      </div>
                      <div>
                        <p>
                          Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt,
                          Khám tai mũi họng, Khám hô hấp, Khám tổng quát.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/">
              <div className=" bg-[#FFF2E7]  max-h-[94px] w-full h-full">
                <div className="flex flex-col h-full justify-center items-center px-3 pt-2 gap-1">
                  <div className="w-[30px] h-[50px] flex justify-center rounded-lg items-center bg-[#FF9138]">
                    <i className="fa-solid fa-pen text-white p-1"></i>
                  </div>
                  <Link to={`/device/updatedevice/${param.id}`}>
                    <p className="text-[#FF7506] text-[16px] text-center pl-3 w-[90px] font-semibold h-full">
                      Cập nhật thiết bị
                    </p>
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailDevice;
