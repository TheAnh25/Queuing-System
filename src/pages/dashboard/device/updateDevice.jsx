import React, { useState } from "react";
import avatarTest from "../../../assets/images/avatarTest.jpg";
import NavbarDashboard from "../../../common/navbarDashboard";
import NotiUser from "../../../common/notiUser";
import { Link } from "react-router-dom";

const UpdateDevice = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (event) => {
    const options = Array.from(event.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setSelectedOptions(options);
  };

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
                  Cập nhật thiết bị
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
          <div className="flex flex-col gap-4 bg-white shadow-xl mr-16">
            {/* Nội dung thiết bị */}
            <div className="max-w-[1152px] w-full max-h-[550px] h-full flex gap-6 ">
              <div className="max-w-[1152px] w-full h-full  shrink-0 flex flex-col  px-6">
                <span className="text-[20px] font-bold text-[#FF7506] my-4">
                  Thông tin thiết bị
                </span>
                <div className="flex gap-6">
                  {/* Thông tin thiết bị bên trái  */}
                  <div className="flex flex-col gap-2 mb-4 max-w-[540px] w-full">
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <span className="text-[#282739] text-base font-semibold">
                          Mã thiết bị:
                        </span>
                        <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                      </div>
                      <div>
                        <input
                          className="rounded-lg border-[1.5px] border-solid w-full border-[#D4D4D7] px-3 py-[10px] text-[#A9A9B0] outline-none text-base font-normal"
                          type="text"
                          placeholder="KIO_01"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <span className="text-[#282739] text-base font-semibold">
                          Tên thiết bị:
                        </span>
                        <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                      </div>
                      <div>
                        <input
                          className="rounded-lg border-[1.5px] border-solid w-full border-[#D4D4D7] px-3 py-[10px] text-[#A9A9B0] outline-none text-base font-normal"
                          type="text"
                          placeholder="Kiosk"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <span className="text-[#282739] text-base font-semibold">
                          Địa chỉ IP:
                        </span>
                        <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                      </div>
                      <div>
                        <input
                          className="rounded-lg border-[1.5px] border-solid w-full border-[#D4D4D7] px-3 py-[10px] text-[#A9A9B0] outline-none text-base font-normal"
                          type="text"
                          placeholder="128.172.308"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Thông tin thiết bị bên phải  */}
                  <div className="flex flex-col gap-2 mb-4 max-w-[540px] w-full">
                    {" "}
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <span className="text-[#282739] text-base font-semibold">
                          Loại thiết bị:
                        </span>
                        <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                      </div>
                      <div>
                        <div className="relative group">
                          <div className="flex justify-between items-center py-[10px] px-3 gap-6 w-full h-full bg-white border-[1.5px] border-solid border-[#D4D4D7] rounded-lg ">
                            <li className=" text-base cursor-pointer font-normal text-[#7E7D88] list-none">
                              Chọn loại thiết bị
                            </li>
                            <i className="fa-solid fa-caret-down text-[#FF7506]"></i>
                          </div>

                          <div className="invisible opacity-0 absolute  bg-white  w-full shadow-lg group-hover:opacity-100 group-hover:visible group-hover:mt-0">
                            <div className=" w-full h-[1px] bg-[#F6F6F6] rounded-t-[10px]"></div>

                            <div className="flex flex-col items-center w-full rounded-b-[10px]">
                              {/* Thông báo 1 */}
                              <div className="w-full ">
                                <div className="px-3 py-2  flex text-base font-normal text-[#535261] hover:cursor-pointer hover:bg-[#FFF2E7]">
                                  Kiosk
                                </div>
                              </div>

                              {/* Thông báo 2 */}
                              <div className="w-full  ">
                                <div className="px-3 py-2  flex text-base font-normal text-[#535261] hover:cursor-pointer hover:bg-[#FFF2E7]">
                                  Display counter
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <span className="text-[#282739] text-base font-semibold">
                          Tên đăng nhập:
                        </span>
                        <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                      </div>
                      <div>
                        <input
                          className="rounded-lg border-[1.5px] border-solid w-full border-[#D4D4D7] px-3 py-[10px] text-[#A9A9B0] outline-none text-base font-normal"
                          type="text"
                          placeholder="Linhkyo011"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <span className="text-[#282739] text-base font-semibold">
                          Mật khẩu:
                        </span>
                        <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                      </div>
                      <div>
                        <input
                          className="rounded-lg border-[1.5px] border-solid w-full border-[#D4D4D7] px-3 py-[10px] text-[#A9A9B0] outline-none text-base font-normal"
                          type="text"
                          placeholder="CMS"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                      <span className="text-[#282739] text-base font-semibold">
                        Dịch vụ sử dụng:
                      </span>
                      <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                    </div>
                    <div>
                      <div className="relative group">
                        <div className="flex justify-between items-center py-[10px] px-3 gap-6 w-full h-full bg-white border-[1.5px] border-solid border-[#D4D4D7] rounded-lg ">
                          <div className="flex gap-2 px-3 pt-3 mb-11">
                            <div className="rounded-lg border-[1.5px] px-2 max-w-max bg-[#FFAC6A] gap-3 border-solid w-full flex justify-center items-center border-[#D4D4D7]  text-[#FFFFFF]  text-[14px] font-normal">
                              <p className="">Khám tim mạch</p>
                              <i className="fa-solid fa-x"></i>
                            </div>
                            <div className="rounded-lg border-[1.5px]  px-5 max-w-max bg-[#FFAC6A] gap-3 border-solid w-full flex justify-center items-center border-[#D4D4D7]  text-[#FFFFFF]  text-[14px] font-normal">
                              <p>Khám sản phụ khoa</p>
                              <i className="fa-solid fa-x"></i>
                            </div>
                            <div className="rounded-lg border-[1.5px]  px-5 max-w-max bg-[#FFAC6A] gap-3 border-solid w-full flex justify-center items-center border-[#D4D4D7]  text-[#FFFFFF]  text-[14px] font-normal">
                              <p>Khám răng hàm mặt</p>
                              <i className="fa-solid fa-x"></i>
                            </div>
                            <div className="rounded-lg border-[1.5px]  px-5 max-w-max bg-[#FFAC6A] gap-3 border-solid w-full flex justify-center items-center border-[#D4D4D7]  text-[#FFFFFF]  text-[14px] font-normal">
                              <p>Khám tai mũi họng</p>
                              <i className="fa-solid fa-x"></i>
                            </div>
                            <div className="rounded-lg border-[1.5px]  px-5 max-w-max bg-[#FFAC6A] gap-3 border-solid w-full flex justify-center items-center border-[#D4D4D7]  text-[#FFFFFF]  text-[14px] font-normal">
                              <p>Khám hô hấp</p>
                              <i className="fa-solid fa-x"></i>
                            </div>
                            <div className="rounded-lg border-[1.5px]  px-5 max-w-max bg-[#FFAC6A] gap-3 border-solid w-full flex justify-center items-center border-[#D4D4D7]  text-[#FFFFFF]  text-[14px] font-normal">
                              <p>Khám tổng quát</p>
                              <i className="fa-solid fa-x"></i>
                            </div>
                          </div>
                        </div>

                        <div className="invisible opacity-0 absolute  bg-white  w-full shadow-lg group-hover:opacity-100 group-hover:visible group-hover:mt-0">
                          <div className=" w-full h-[1px] bg-[#F6F6F6] rounded-t-[10px]"></div>

                          <div className="flex flex-col items-center w-full  rounded-b-[10px]">
                            <div className="w-full ">
                              <div className="px-3 py-2 flex text-base font-normal text-[#282739] hover:cursor-pointer hover:bg-[#FFF2E7]">
                                Khám răng hàm mặt
                              </div>
                            </div>

                            <div className="w-full  ">
                              <div className="px-3 py-2  flex text-base font-normal text-[#282739] hover:cursor-pointer hover:bg-[#FFF2E7]">
                                Khám tai mũi họng
                              </div>
                            </div>
                          </div>
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
            <Link to="/device">
              <div className="border-[1px] border-solid border-[#FF9138] bg-[#FFF2E7] rounded-lg">
                <button className="py-3 px-[46px] text-[#FF9138] text-base font-bold ">
                  Hủy bỏ
                </button>
              </div>
            </Link>
            <div className="border-[1px] border-solid border-[#FF9138] bg-[#FF9138] rounded-lg">
              <button className="py-3 px-6 text-[#FFFFFF] text-base font-bold">
                Cập nhật
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateDevice;
