import React from "react";
import avatarTest from "../../../assets/images/avatarTest.jpg";
import dataReport from "../../../data/dataReport";
import NavbarDashboard from "../../../common/navbarDashboard";
import NotiUser from "../../../common/notiUser";
import PaginationItem from "../../../common/pagination";
import { Link } from "react-router-dom";
import CalendarFromTo from "../../../common/calendarFromTo";
import CheckBox from "../../../common/checkBox";

const Report = () => {
  return (
    <>
      <div className=" flex max-h-[810px] h-full bg-[#F7F7F7] rounded-2xl mx-auto">
        {/* Navbar  */}
        <NavbarDashboard />
        {/*Báo cáo*/}
        <div className="max-w-full h-[810px] rounded-r-2xl pl-[24px]">
          {/* Top Nav User */}
          <div className="w-[1240px] h-[88px] flex justify-between items-center">
            <div className="flex gap-4 justify-center items-center h-[30px]">
              <div>
                <p className="  font-bold text-[20px] text-[#7E7D88] ">
                  Báo cáo
                </p>
              </div>
              <div>
                <i className="fa-solid fa-angle-right text-[#7E7D88]"></i>
              </div>
              <div>
                <p className="text-[#FF7506] font-bold text-[20px] ">
                  Lập báo cáo
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

          {/* Nội dung thiết bị */}
          <div className="flex flex-col gap-4">
            <div className="max-w-full h-[72px] mb-4">
              <div className="flex max-w-[624px] w-full gap-6">
                {/* Thời gian*/}
                <div className=" w-full flex flex-col gap-2">
                  <span className="font-semibold text-base text-[#282739]">
                    Chọn thời gian
                  </span>
                  <div className="max-h-11 h-full flex gap-2  items-center">
                    <CalendarFromTo />
                  </div>
                </div>
              </div>
            </div>
            {/* Nội dung thiết bị */}
            <div className="max-w-full max-h-[550px] h-full flex gap-4">
              <div className="max-w-[1112px] w-full h-full  shrink-0 flex">
                <table className="shadow-lg w-full table-fixed">
                  <tr className="text-[#FFFFFF] text-base font-bold bg-[#FF9138]">
                    <th className="border-r-[1px] border-r-solid border-r-white py-3">
                      <div className="max-w-[300px] w-full ">
                        <div className="relative group">
                          <div className="flex justify-between cursor-pointer items-center px-3 py-[10px]   rounded-lg ">
                            <li className=" text-base cursor-pointer font-normal text-[#FFFFFF] list-none">
                              Số thứ tự
                            </li>
                            <div className="flex flex-col">
                              <i className="fa-solid fa-caret-up text-[#FFFFFF] mb-[-10px]"></i>
                              <i className="fa-solid fa-caret-down text-[#FFFFFF]"></i>
                            </div>
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
                                  2040001
                                </div>
                              </div>

                              {/* Thông báo 3 */}
                              <div className="w-full  ">
                                <div className="px-3 py-2  flex text-base font-normal text-[#535261] hover:cursor-pointer hover:bg-[#FFF2E7]">
                                  2060001
                                </div>
                              </div>
                              {/* Thông báo 4 */}
                              <div className="w-full  ">
                                <div className="px-3 py-2  flex text-base font-normal text-[#535261] hover:cursor-pointer hover:bg-[#FFF2E7]">
                                  2050002
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </th>
                    <th className="border-r-[1px] border-r-solid border-r-white py-3 ">
                      <div className="max-w-[300px] w-full ">
                        <div className="relative group">
                          <div className="flex justify-between cursor-pointer items-center px-3 py-[10px]   rounded-lg ">
                            <li className=" text-base cursor-pointer font-normal text-[#FFFFFF] list-none">
                              Tên dịch vụ
                            </li>
                            <div className="flex flex-col">
                              <i className="fa-solid fa-caret-up text-[#FFFFFF] mb-[-10px]"></i>
                              <i className="fa-solid fa-caret-down text-[#FFFFFF]"></i>
                            </div>
                          </div>

                          <div className="invisible rounded-lg opacity-0 absolute  bg-white w-full shadow-lg group-hover:opacity-100 group-hover:visible group-hover:mt-0">
                            <div className=" w-full h-[1px] bg-[#F6F6F6] rounded-t-[10px]"></div>

                            <div className="flex flex-col items-center w-full  rounded-b-[10px]">
                              {/* Thông báo 1 */}
                              <div className="w-full ">
                                <div className="px-3 py-2  flex text-base font-normal text-[#535261] hover:cursor-pointer hover:bg-[#FFF2E7]">
                                  <CheckBox titleCheckbox={"Tất cả"} />
                                </div>
                              </div>

                              {/* Thông báo 2 */}
                              <div className="w-full  ">
                                <div className="px-3 py-2  flex text-base font-normal text-[#535261] hover:cursor-pointer hover:bg-[#FFF2E7]">
                                  <CheckBox titleCheckbox={"Khám tim mạch"} />
                                </div>
                              </div>

                              {/* Thông báo 3 */}
                              <div className="w-full  ">
                                <div className="px-3 py-2  flex text-base font-normal text-[#535261] hover:cursor-pointer hover:bg-[#FFF2E7]">
                                  <CheckBox titleCheckbox={"Khám mắt"} />
                                </div>
                              </div>
                              {/* Thông báo 4 */}
                              <div className="w-full  ">
                                <div className="px-3 py-2  flex text-base font-normal text-[#535261] hover:cursor-pointer hover:bg-[#FFF2E7]">
                                  <CheckBox titleCheckbox={" Khám tổng quát"} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </th>
                    <th className="border-r-[1px] border-r-solid border-r-white py-3">
                      <div className="max-w-[300px] w-full ">
                        <div className="relative group">
                          <div className="flex justify-between cursor-pointer items-center px-3 py-[10px]   rounded-lg ">
                            <li className=" text-base cursor-pointer font-normal text-[#FFFFFF] list-none">
                              Thời gian cấp
                            </li>
                            <div className="flex flex-col">
                              <i className="fa-solid fa-caret-up text-[#FFFFFF] mb-[-10px]"></i>
                              <i className="fa-solid fa-caret-down text-[#FFFFFF]"></i>
                            </div>
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
                                  07:10 01/10/2021
                                </div>
                              </div>

                              {/* Thông báo 3 */}
                              <div className="w-full  ">
                                <div className="px-3 py-2  flex text-base font-normal text-[#535261] hover:cursor-pointer hover:bg-[#FFF2E7]">
                                  07:15 01/10/2021
                                </div>
                              </div>
                              {/* Thông báo 4 */}
                              <div className="w-full  ">
                                <div className="px-3 py-2  flex text-base font-normal text-[#535261] hover:cursor-pointer hover:bg-[#FFF2E7]">
                                  07:28 01/10/2021
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </th>
                    <th className="border-r-[1px] border-r-solid border-r-white py-3 w-[180px]">
                      <div className="max-w-[300px] w-full ">
                        <div className="relative group">
                          <div className="flex justify-between cursor-pointer items-center px-3 py-[10px]   rounded-lg ">
                            <li className=" text-base cursor-pointer font-normal text-[#FFFFFF] list-none">
                              Tình trạng
                            </li>
                            <div className="flex flex-col">
                              <i className="fa-solid fa-caret-up text-[#FFFFFF] mb-[-10px]"></i>
                              <i className="fa-solid fa-caret-down text-[#FFFFFF]"></i>
                            </div>
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
                                  Đang chờ
                                </div>
                              </div>

                              {/* Thông báo 3 */}
                              <div className="w-full  ">
                                <div className="px-3 py-2  flex text-base font-normal text-[#535261] hover:cursor-pointer hover:bg-[#FFF2E7]">
                                  Đã sử dụng
                                </div>
                              </div>
                              {/* Thông báo 4 */}
                              <div className="w-full  ">
                                <div className="px-3 py-2  flex text-base font-normal text-[#535261] hover:cursor-pointer hover:bg-[#FFF2E7]">
                                  Bỏ qua
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </th>
                    <th className="border-r-[1px] border-r-solid border-r-white py-3 w-[145px]">
                      <div className="max-w-[300px] w-full ">
                        <div className="relative group">
                          <div className="flex justify-between cursor-pointer items-center px-3 py-[10px]   rounded-lg ">
                            <li className=" text-base cursor-pointer font-normal text-[#FFFFFF] list-none">
                              Nguồn cấp
                            </li>
                            <div className="flex flex-col">
                              <i className="fa-solid fa-caret-up text-[#FFFFFF] mb-[-10px]"></i>
                              <i className="fa-solid fa-caret-down text-[#FFFFFF]"></i>
                            </div>
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
                                  Kiosk
                                </div>
                              </div>

                              {/* Thông báo 3 */}
                              <div className="w-full  ">
                                <div className="px-3 py-2  flex text-base font-normal text-[#535261] hover:cursor-pointer hover:bg-[#FFF2E7]">
                                  Hệ thống
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </th>
                  </tr>
                  {dataReport.map((val) => {
                    return (
                      <tbody className="odd:bg-[#FFF2E7] ">
                        <tr
                          key={val.id}
                          className="text[#535261] text-[14px] font-normal ">
                          <td className="text-center py-3 border-r-[1px] border-r-solid border-r-[#FFE3CD]">
                            {val.idService}
                          </td>
                          <td className="pl-3 border-r-[1px] border-r-solid border-r-[#FFE3CD]">
                            {val.nameService}
                          </td>
                          <td className="pl-3 border-r-[1px] border-r-solid border-r-[#FFE3CD]">
                            {val.dateTime}
                          </td>

                          {val.activeStatus === "Bỏ qua" && (
                            <td className="pl-3  border-r-[1px] border-r-solid border-r-[#FFE3CD] ">
                              <div className=" flex px-1 items-center gap-1">
                                <i className="fa-solid fa-circle text-[6px]  text-[#E73F3F]"></i>
                                <p>Bỏ qua</p>
                              </div>
                            </td>
                          )}
                          {val.activeStatus === "Đang chờ" && (
                            <td className="pl-3  border-r-[1px] border-r-solid border-r-[#FFE3CD] ">
                              <div className=" flex px-1 items-center gap-1">
                                <i className="fa-solid fa-circle text-[6px]  text-[#4277FF]"></i>
                                <p>Đang chờ</p>
                              </div>
                            </td>
                          )}
                          {val.activeStatus === "Đã sử dụng" && (
                            <td className="pl-3  border-r-[1px] border-r-solid border-r-[#FFE3CD] ">
                              <div className=" flex px-1 items-center gap-1">
                                <i className="fa-solid fa-circle text-[6px]  text-[#6C7585]"></i>
                                <p>Đã sử dụng</p>
                              </div>
                            </td>
                          )}
                          <td className="pl-3 border-r-[1px] border-r-solid border-r-[#FFE3CD]">
                            {val.source}
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              </div>
              <div>
                <Link to="/">
                  <div className=" bg-[#FFF2E7]  max-h-[94px] w-full h-full">
                    <div className="flex flex-col h-full justify-center items-center px-3 pt-2 gap-1">
                      <div className="w-7 flex justify-center rounded-lg items-center bg-[#FF9138]">
                        <i className="fa-solid fa-file-arrow-down text-white px-1 py-2"></i>
                      </div>

                      <p className="text-[#FF7506] text-[16px] text-center pl-3 w-[72px] font-semibold h-full">
                        Tải về
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
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

export default Report;
