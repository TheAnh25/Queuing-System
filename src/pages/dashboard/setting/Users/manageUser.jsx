import React from "react";
import avatarTest from "../../../../assets/images/avatarTest.jpg";

import { Link } from "react-router-dom";
import NavbarDashboard from "../../../../common/navbarDashboard";
import NotiUser from "../../../../common/notiUser";
import dataHistoryUsers from "../../../../data/dataHistoryUsers";
import PaginationItem from "../../../../common/pagination";
import CalendarFromTo from "../../../../common/calendarFromTo";

const ManageUser = () => {
  return (
    <>
      <div className=" flex max-h-[810px] h-full bg-[#F7F7F7] rounded-2xl mx-auto">
        {/* Navbar  */}
        <NavbarDashboard />
        {/*Thiết bị*/}
        <div className="max-w-full h-[810px] rounded-r-2xl pl-[24px]">
          {/* Top Nav User */}
          <div className="w-[1240px] h-[88px] flex justify-between items-center">
            <div className="flex gap-4 justify-center items-center h-[30px]">
              <div>
                <p className="  font-bold text-[20px] text-[#7E7D88] ">
                  Cài đặt hệ thống
                </p>
              </div>
              <div>
                <i className="fa-solid fa-angle-right text-[#7E7D88]"></i>
              </div>
              <div>
                <p className="text-[#FF7506] font-bold text-[20px] ">
                  Nhật ký hoạt động
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
          {/* <div className="h-[36px] font-bold text-[24px] text-[#FF7506] mb-5">
            <span>Danh sách vai trò</span>
          </div> */}

          {/* Nội dung thiết bị */}
          <div className="flex flex-col gap-4">
            <div className="max-w-full flex justify-end h-[72px] mb-4 ">
              {/* Chọn thời gian */}
              <div className=" w-full flex flex-col gap-2">
                <span className="font-semibold text-base text-[#282739]">
                  Chọn thời gian
                </span>
                <div className="max-h-11 h-full flex gap-2 items-center">
                  <CalendarFromTo />
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
              <div className="max-w-[1172px] w-full h-full  shrink-0 flex">
                <thead>
                  <table className="shadow-lg w-full table-fixed tab">
                    <tr className="text-[#FFFFFF] text-base font-bold bg-[#FF9138]">
                      <th className="border-r-[1px] border-r-solid border-r-white py-3">
                        Tên đăng nhập{" "}
                      </th>
                      <th className="border-r-[1px] border-r-solid border-r-white py-3 ">
                        Thời gian tác động{" "}
                      </th>
                      <th className="border-r-[1px] border-r-solid border-r-white py-3 ">
                        IP thực hiện{" "}
                      </th>
                      <th className="border-r-[1px] border-r-solid border-r-white py-3 w-[568px]">
                        Thao tác thực hiện{" "}
                      </th>
                    </tr>
                    {dataHistoryUsers.map((val) => {
                      return (
                        <tbody className="odd:bg-[#FFF2E7] ">
                          <tr
                            key={val.id}
                            className="text[#535261] text-[14px] font-normal ">
                            <td className="text-center py-3 border-r-[1px] border-r-solid border-r-[#FFE3CD]">
                              {val.nameLogin}
                            </td>
                            <td className="pl-3 border-r-[1px] border-r-solid border-r-[#FFE3CD]">
                              {val.time}
                            </td>
                            <td className="pl-3 border-r-[1px] border-r-solid border-r-[#FFE3CD]">
                              {val.ipUser}
                            </td>
                            <td className="pl-3 border-r-[1px] border-r-solid border-r-[#FFE3CD]">
                              {val.description}
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </thead>
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

export default ManageUser;
