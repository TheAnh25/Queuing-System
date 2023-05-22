import React from "react";
import avatarTest from "../../../assets/images/avatarTest.jpg";
import data from "../../../data/dataDevice";
import NavbarDashboard from "../../../common/navbarDashboard";
import NotiUser from "../../../common/notiUser";
import PaginationItem from "../../../common/pagination";
import { Link } from "react-router-dom";

const Device = () => {
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
                <p className="text-[#FF7506] font-bold text-[20px] ">
                  Danh sách thiết bị
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
            <span>Danh sách thiết bị</span>
          </div>

          {/* Nội dung thiết bị */}
          <div className="flex flex-col gap-4">
            <div className="max-w-full flex justify-between h-[72px] ">
              <div className="flex max-w-[624px] w-full gap-6">
                {/* Trạnh thái hoạt động */}
                <div className="max-w-[300px] w-full ">
                  <span className="font-semibold text-base text-[#282739]">
                    Trạng thái hoạt động
                  </span>
                  <div className="relative group">
                    <div className="flex justify-between cursor-pointer items-center px-3 py-[10px]  border-[1.5px] border-solid border-[#D4D4D7] rounded-lg ">
                      <li className=" text-base cursor-pointer font-normal text-[#7E7D88] list-none">
                        Tất cả
                      </li>
                      <i className="fa-solid fa-caret-down text-[#FF7506]"></i>
                    </div>

                    <div className="invisible rounded-lg opacity-0 absolute  bg-white w-full shadow-lg group-hover:opacity-100 group-hover:visible group-hover:mt-0">
                      <div className=" w-full h-[1px] bg-[#F6F6F6] rounded-t-[10px]"></div>

                      <div className="flex flex-col items-center w-full  rounded-b-[10px]">
                        {/* Thông báo 1 */}
                        <div className="w-full ">
                          <div className="px-3 py-2  flex text-base font-normal text-[#535261] hover:cursor-pointer hover:bg-[#FFF2E7]">
                            Tất cả
                          </div>
                        </div>

                        {/* Thông báo 2 */}
                        <div className="w-full  ">
                          <div className="px-3 py-2  flex text-base font-normal text-[#535261] hover:cursor-pointer hover:bg-[#FFF2E7]">
                            Hoạt động
                          </div>
                        </div>

                        {/* Thông báo 3 */}
                        <div className="w-full  ">
                          <div className="px-3 py-2  flex text-base font-normal text-[#535261] hover:cursor-pointer hover:bg-[#FFF2E7]">
                            Ngưng hoạt động
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Trạng thái kết nối  */}
                <div className="max-w-[300px] w-full ">
                  <span className="font-semibold text-base text-[#282739]">
                    Trạng thái kết nối
                  </span>
                  <div className="relative group ">
                    <div className="flex justify-between cursor-pointer items-center px-3 py-[10px]  border-[1.5px] border-solid border-[#D4D4D7] rounded-lg ">
                      <li className=" text-base cursor-pointer font-normal text-[#7E7D88] list-none">
                        Tất cả
                      </li>
                      <i className="fa-solid fa-caret-down text-[#FF7506]"></i>
                    </div>

                    <div className="invisible rounded-lg opacity-0 absolute  bg-white w-full shadow-lg group-hover:opacity-100 group-hover:visible group-hover:mt-0">
                      <div className=" w-full h-[1px] bg-[#F6F6F6] rounded-t-[10px]"></div>

                      <div className="flex flex-col items-center w-full  rounded-b-[10px]">
                        {/* Thông báo 1 */}
                        <div className="w-full ">
                          <div className="px-3 py-2  flex text-base font-normal text-[#535261] hover:cursor-pointer hover:bg-[#FFF2E7]">
                            Tất cả
                          </div>
                        </div>

                        {/* Thông báo 2 */}
                        <div className="w-full  ">
                          <div className="px-3 py-2  flex text-base font-normal text-[#535261] hover:cursor-pointer hover:bg-[#FFF2E7]">
                            Kết nối
                          </div>
                        </div>

                        {/* Thông báo 3 */}
                        <div className="w-full  ">
                          <div className="px-3 py-2  flex text-base font-normal text-[#535261] hover:cursor-pointer hover:bg-[#FFF2E7]">
                            Mất kết nối
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Từ khóa  */}
              <div className="max-w-[300px] w-full mr-[104px]">
                <span className="font-semibold text-base text-[#282739]">
                  Từ khóa
                </span>
                <div className="flex cursor-pointer gap-1 px-3 items-center bg-[#FFFFFF] max-h-11 h-full border-[1.5px] border-solid border-[#D4D4D7] rounded-lg ">
                  <input
                    className=" focus:outline-none text-base cursor-pointer font-normal text-[#7E7D88] w-full h-full"
                    placeholder="Nhập từ khóa"
                  />
                  <i className="fa-solid fa-magnifying-glass text-[#FF7506]"></i>
                </div>
              </div>
            </div>
            {/* Nội dung thiết bị */}
            <div className="max-w-full h-[490px] flex gap-4">
              <div className="max-w-[1112px] w-full h-full  shrink-0 flex">
                <thead>
                  <table className="shadow-lg w-full table-fixed tab">
                    <tr className="text-[#FFFFFF] text-base font-bold bg-[#FF9138]">
                      <th className="border-r-[1px] border-r-solid border-r-white py-3">
                        Mã thiết bị
                      </th>
                      <th className="border-r-[1px] border-r-solid border-r-white py-3 ">
                        Tên thiết bị
                      </th>
                      <th className="border-r-[1px] border-r-solid border-r-white py-3">
                        Địa chỉ IP
                      </th>
                      <th className="border-r-[1px] border-r-solid border-r-white py-3 w-[180px]">
                        Trạng thái hoạt động
                      </th>
                      <th className="border-r-[1px] border-r-solid border-r-white py-3 w-[145px]">
                        Trạng thái kết nối
                      </th>
                      <th className="border-r-[1px] border-r-solid border-r-white py-3 w-[268px] ">
                        Dịch vụ sử dụng
                      </th>
                      <th className="border-r-[1px] border-r-solid border-r-white py-3 "></th>
                      <th className="border-b-[1px] border-b-solid border-b-white py-3 "></th>
                    </tr>
                    {data.map((val) => {
                      return (
                        <tbody className="odd:bg-[#FFF2E7] ">
                          <tr
                            key={val.id}
                            className="text[#535261] text-[14px] font-normal ">
                            <td className="text-center py-3 border-r-[1px] border-r-solid border-r-[#FFE3CD]">
                              {val.idDevice}
                            </td>
                            <td className="text-center border-r-[1px] border-r-solid border-r-[#FFE3CD]">
                              {val.nameDevice}
                            </td>
                            <td className="text-center border-r-[1px] border-r-solid border-r-[#FFE3CD]">
                              {val.ipAddress}
                            </td>

                            {val.activeStatus ? (
                              <td className=" border-r-[1px] border-r-solid border-r-[#FFE3CD] ">
                                <div className=" flex px-1 items-center gap-1">
                                  <i className="fa-solid fa-circle text-[6px]  text-[#34CD26]"></i>
                                  <p>Hoạt động</p>
                                </div>
                              </td>
                            ) : (
                              <td className=" border-r-[1px] border-r-solid border-r-[#FFE3CD] ">
                                <div className=" flex px-1 items-center gap-1">
                                  <i className="fa-solid fa-circle text-[6px] text-[#E73F3F]"></i>
                                  <p>Ngưng hoạt động</p>
                                </div>
                              </td>
                            )}

                            {val.connectStatus ? (
                              <td className=" border-r-[1px] border-r-solid border-r-[#FFE3CD] ">
                                <div className=" flex px-1 items-center gap-1">
                                  <i className="fa-solid fa-circle text-[6px]  text-[#34CD26]"></i>
                                  <p>Kết nối</p>
                                </div>
                              </td>
                            ) : (
                              <td className=" border-r-[1px] border-r-solid border-r-[#FFE3CD] ">
                                <div className=" flex px-1 items-center gap-1">
                                  <i className="fa-solid fa-circle text-[6px] text-[#E73F3F]"></i>
                                  <p>Mất kết nối</p>
                                </div>
                              </td>
                            )}

                            <td className="border-r-[1px] border-r-solid border-r-[#FFE3CD] px-4">
                              <tr className="flex flex-col">
                                <td className="line-clamp-1 ">
                                  {val.deviceUse}
                                </td>
                                <td className="text-[#4277FF] underline">
                                  Xem thêm
                                </td>
                              </tr>
                            </td>
                            <td>
                              <Link to={`/device/detaildevice/${val.id}`}>
                                <td className="text-center flex justify-center border-r-[1px] border-r-solid text-[#4277FF] underline border-r-[#FFE3CD]">
                                  Chi tiết
                                </td>
                              </Link>
                            </td>
                            <td>
                              <Link to={`/device/updatedevice/${val.id}`}>
                                <td className=" flex justify-center border-r-[1px] border-r-solid text-[#4277FF] underline border-r-[#FFE3CD]">
                                  Cập nhật
                                </td>
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </thead>
              </div>
              <Link to="/device/adddevice">
                <div className=" bg-[#FFF2E7]  max-h-[94px] w-full h-full">
                  <div className="flex flex-col h-full justify-center items-center px-3 pt-2 gap-1">
                    <div className="w-7 flex justify-center rounded-lg items-center bg-[#FF9138]">
                      <i className="fa-solid fa-plus text-white p-1"></i>
                    </div>

                    <p className="text-[#FF7506] text-[16px] text-center pl-3 w-[72px] font-semibold h-full">
                      Thêm thiết bị
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="max-w-[1112px] w-full flex justify-end">
              <PaginationItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Device;
