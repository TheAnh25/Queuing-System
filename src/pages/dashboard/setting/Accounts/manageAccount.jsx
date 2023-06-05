import React from "react";
import avatarTest from "../../../../assets/images/avatarTest.jpg";

import { Link } from "react-router-dom";
import NavbarDashboard from "../../../../common/navbarDashboard";
import NotiUser from "../../../../common/notiUser";
import dataHistoryUsers from "../../../../data/dataHistoryUsers";
import PaginationItem from "../../../../common/pagination";
import dataAccont from "../../../../data/dataAccount";

const ManageAccount = () => {
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
                  Quản lý tài khoản
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
            <span>Danh sách tài khoản</span>
          </div>

          {/* Nội dung thiết bị */}
          <div className="flex flex-col gap-4">
            <div className="max-w-full flex justify-between h-[72px] ">
              {/* Tên vai trò */}
              <div className="max-w-[300px] w-full ">
                <span className="font-semibold text-base text-[#282739]">
                  Tên vai trò
                </span>
                <div className="relative group">
                  <div className="flex justify-between cursor-pointer items-center px-3 py-[10px] bg-white border-[1.5px] border-solid border-[#D4D4D7] rounded-lg ">
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
                          Kế toán
                        </div>
                      </div>

                      {/* Thông báo 2 */}
                      <div className="w-full  ">
                        <div className="px-3 py-2  flex text-base font-normal text-[#535261] hover:cursor-pointer hover:bg-[#FFF2E7]">
                          Quản lý
                        </div>
                      </div>

                      {/* Thông báo 3 */}
                      <div className="w-full  ">
                        <div className="px-3 py-2  flex text-base font-normal text-[#535261] hover:cursor-pointer hover:bg-[#FFF2E7]">
                          Admin
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
                        Tên đăng nhập{" "}
                      </th>
                      <th className="border-r-[1px] border-r-solid border-r-white py-3 ">
                        Họ tên{" "}
                      </th>
                      <th className="border-r-[1px] border-r-solid border-r-white py-3 ">
                        Số điện thoại{" "}
                      </th>
                      <th className="border-r-[1px] border-r-solid border-r-white py-3 w-[300px]">
                        Email{" "}
                      </th>
                      <th className="border-r-[1px] border-r-solid border-r-white py-3 ">
                        Vai trò{" "}
                      </th>
                      <th className="border-r-[1px] border-r-solid border-r-white py-3 w-[200px]">
                        Trạng thái hoạt động{" "}
                      </th>
                      <th className="border-r-[1px] border-r-solid border-r-white py-3 "></th>
                    </tr>
                    {dataAccont.map((val) => {
                      return (
                        <tbody className="odd:bg-[#FFF2E7] ">
                          <tr
                            key={val.id}
                            className="text[#535261] text-[14px] font-normal ">
                            <td className="text-center py-3 border-r-[1px] border-r-solid border-r-[#FFE3CD]">
                              {val.nameLogin}
                            </td>
                            <td className="pl-3 border-r-[1px] border-r-solid border-r-[#FFE3CD]">
                              {val.username}
                            </td>
                            <td className="pl-3 border-r-[1px] border-r-solid border-r-[#FFE3CD]">
                              {val.phone}
                            </td>
                            <td className="pl-3 border-r-[1px] border-r-solid border-r-[#FFE3CD]">
                              {val.email}
                            </td>
                            <td className="pl-3 border-r-[1px] border-r-solid border-r-[#FFE3CD]">
                              {val.position}
                            </td>
                            {val.status ? (
                              <td className="pl-3  border-r-[1px] border-r-solid border-r-[#FFE3CD] ">
                                <div className=" flex px-1 items-center gap-1">
                                  <i className="fa-solid fa-circle text-[6px]  text-[#34CD26]"></i>
                                  <p>Hoạt động</p>
                                </div>
                              </td>
                            ) : (
                              <td className="pl-3 border-r-[1px] border-r-solid border-r-[#FFE3CD] ">
                                <div className=" flex px-1 items-center gap-1">
                                  <i className="fa-solid fa-circle text-[6px] text-[#E73F3F]"></i>
                                  <p>Ngưng hoạt động</p>
                                </div>
                              </td>
                            )}
                            <td>
                              <Link
                                to={`/setting/manageaccount/updateaccount/${val.id}`}>
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
              <div>
                <Link to="/setting/manageaccount/addaccount">
                  <div className=" bg-[#FFF2E7]  max-h-[94px] w-full h-full">
                    <div className="flex flex-col h-full justify-center items-center px-3 pt-2 gap-1">
                      <div className="w-7 flex justify-center rounded-lg items-center bg-[#FF9138]">
                        <i className="fa-solid fa-plus text-white p-1"></i>
                      </div>

                      <p className="text-[#FF7506] text-[16px] text-center pl-3 w-[72px] font-semibold h-full">
                        Thêm tài khoản
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

export default ManageAccount;
