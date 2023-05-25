import React from "react";
import avatarTest from "../../../assets/images/avatarTest.jpg";
import NavbarDashboard from "../../../common/navbarDashboard";
import NotiUser from "../../../common/notiUser";
import { Link } from "react-router-dom";
import CheckBox from "../../../common/checkBox";

const AddService = () => {
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
                  Dịch vụ
                </p>
              </div>
              <div>
                <i className="fa-solid fa-angle-right text-[#7E7D88]"></i>
              </div>
              <div>
                <p className="text-[#7E7D88] font-bold text-[20px] ">
                  Danh sách dịch vụ
                </p>
              </div>
              <div>
                <i className="fa-solid fa-angle-right text-[#7E7D88]"></i>
              </div>
              <div>
                <p className="text-[#FF7506] font-bold text-[20px] ">
                  Thêm dịch vụ
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
            <span>Quản lý dịch vụ</span>
          </div>

          {/* Nội dung thiết bị */}
          <div className="flex flex-col gap-4 bg-white shadow-xl mr-16">
            {/* Nội dung thiết bị */}
            <div className="max-w-[1152px] w-full max-h-[550px] h-full flex gap-6 ">
              <div className="max-w-[1152px] w-full h-full  shrink-0 flex flex-col  px-6">
                <span className="text-[20px] font-bold text-[#FF7506] my-4">
                  Thông tin dịch vụ
                </span>
                <div className="flex gap-6">
                  {/* Thông tin thiết bị bên trái  */}
                  <div className="flex flex-col gap-2 mb-4 max-w-[540px] w-full">
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <span className="text-[#282739] text-base font-semibold">
                          Mã dịch vụ:
                        </span>
                        <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                      </div>
                      <div>
                        <input
                          className="rounded-lg border-[1.5px] border-solid w-full border-[#D4D4D7] px-3 py-[10px] text-[#A9A9B0] outline-none text-base font-normal"
                          type="text"
                          placeholder="201"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <span className="text-[#282739] text-base font-semibold">
                          Tên dịch vụ :
                        </span>
                        <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                      </div>
                      <div>
                        <input
                          className="rounded-lg border-[1.5px] border-solid w-full border-[#D4D4D7] px-3 py-[10px] text-[#A9A9B0] outline-none text-base font-normal"
                          type="text"
                          placeholder="Khám tim mạch"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Thông tin thiết bị bên phải  */}
                  <div className="flex flex-col gap-2 mb-4 max-w-[540px] w-full ">
                    {" "}
                    <div className="flex flex-col gap-2  h-full">
                      <div className="flex gap-2 items-center">
                        <span className="text-[#282739] text-base font-semibold">
                          Mô tả:
                        </span>
                        <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                      </div>
                      <div className="">
                        <input
                          className="rounded-lg border-[1.5px] border-solid w-full border-[#D4D4D7] h-[133px] px-3 text-[#A9A9B0] outline-none text-base font-normal"
                          type="text"
                          placeholder="Mô tả dịch vụ"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                      <span className="text-[20px] font-bold text-[#FF7506] ">
                        Thông tin dịch vụ
                      </span>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex gap-4 items-center">
                        <div className="text-[#282739] max-w-[150px] w-full text-base font-semibold ">
                          <CheckBox titleCheckbox="Tăng tự động từ:" />
                        </div>
                        <div className="flex gap-2 justify-center items-center">
                          <div className=" cursor-pointer px-3 py-[10px] items-center bg-[#FFFFFF] border-[1.5px] border-solid border-[#D4D4D7] rounded-lg ">
                            <input
                              className=" max-w-[34px] w-full focus:outline-none text-base cursor-pointer font-normal text-[#7E7D88] "
                              placeholder="0001"
                            />
                          </div>
                          <span className="text-[#282739] text-base font-semibold">
                            đến
                          </span>
                          <div className=" cursor-pointer px-3 py-[10px] items-center bg-[#FFFFFF] border-[1.5px] border-solid border-[#D4D4D7] rounded-lg ">
                            <input
                              className=" focus:outline-none max-w-[34px] w-full text-base cursor-pointer font-normal text-[#7E7D88] "
                              placeholder="9999"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <div className="text-[#282739] max-w-[150px] w-full text-base font-semibold ">
                          <CheckBox titleCheckbox="Prefix:" />
                        </div>
                        <div className="flex  justify-center items-center">
                          <div className=" cursor-pointer px-3 py-[10px] items-center bg-[#FFFFFF] border-[1.5px] border-solid border-[#D4D4D7] rounded-lg ">
                            <input
                              className=" max-w-[34px] w-full focus:outline-none text-base cursor-pointer font-normal text-[#7E7D88] "
                              placeholder="0001"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <div className="text-[#282739] max-w-[150px] w-full text-base font-semibold ">
                          <CheckBox titleCheckbox="Surfix:" />
                        </div>
                        <div className="flex  justify-center items-center">
                          <div className=" cursor-pointer px-3 py-[10px] items-center bg-[#FFFFFF] border-[1.5px] border-solid border-[#D4D4D7] rounded-lg ">
                            <input
                              className=" max-w-[34px] w-full focus:outline-none text-base cursor-pointer font-normal text-[#7E7D88] "
                              placeholder="0001"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <div className="text-[#282739] max-w-[150px] w-full text-base font-semibold ">
                          <CheckBox titleCheckbox="Reset mỗi ngày" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1 items-center mb-[80px]">
                    <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                    <span className="text-[#7E7D88] text-[14px] font-normal">
                      Là trường thông tin bắt buộc
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[1152px] w-full flex items-center justify-center gap-8 mt-9">
            <Link to="/service">
              <div className="border-[1px] border-solid border-[#FF9138] bg-[#FFF2E7] rounded-lg">
                <button className="py-3 px-[46px] text-[#FF9138] text-base font-bold ">
                  Hủy bỏ
                </button>
              </div>
            </Link>
            <div className="border-[1px] border-solid border-[#FF9138] bg-[#FF9138] rounded-lg">
              <button className="py-3 px-6 text-[#FFFFFF] text-base font-bold">
                Thêm dịch vụ
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddService;
