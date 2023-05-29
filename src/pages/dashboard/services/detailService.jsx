import React from "react";
import avatarTest from "../../../assets/images/avatarTest.jpg";
import NavbarDashboard from "../../../common/navbarDashboard";
import NotiUser from "../../../common/notiUser";
import { Link, useParams } from "react-router-dom";
import dataService from "../../../data/dataService";
import PaginationItem from "../../../common/pagination";
import CalendarFromTo from "../../../common/calendarFromTo";
import statusService from "../../../data/statusFinishService";

const DetailService = () => {
  const param = useParams();
  console.log("param");

  console.log("param", param);

  return (
    <>
      <div className=" flex h-[810px]  bg-[#F7F7F7] rounded-2xl mx-auto">
        {/* Navbar  */}
        <NavbarDashboard />
        {/*Dịch vụ*/}
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
                  Chi tiết
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

          {/* Nội dung dịch vụ */}
          <div className="flex  max-w-[1240px] gap-4 w-full h-full">
            {/* Thông tin dịch vụ */}
            <div className="flex  gap-6  w-full  mb-[50px] max-h-[650px] h-full">
              <div className="max-w-[370px] bg-white shadow-xl rounded-lg w-full h-full flex gap-6 ">
                <div className="max-w-[1152px] w-full h-full  shrink-0 flex flex-col  px-6">
                  <span className="text-[20px] font-bold text-[#FF7506] my-4">
                    Thông tin dịch vụ
                  </span>
                  {param.id &&
                    dataService
                      .filter((item) => item.id.toString() === param.id)
                      .map((item) => (
                        <div>
                          <div className="flex flex-col">
                            {/* Thông tin thiết bị bên trái  */}
                            <div className="flex flex-col gap-4 mb-4 max-w-[540px] w-full">
                              <div className="flex gap-11 items-center">
                                <span className="text-[#282739] max-w-[90px] w-full text-base font-semibold">
                                  Mã dịch vụ:
                                </span>
                                <span className="text-[#535261] text-base font-normal">
                                  {item.idService}
                                </span>
                              </div>
                              <div className="flex gap-11 items-center">
                                <span className="text-[#282739] max-w-[90px] w-full text-base font-semibold">
                                  Tên dịch vụ:
                                </span>
                                <span className="text-[#535261] text-base font-normal">
                                  {item.nameService}
                                </span>
                              </div>{" "}
                              <div className="flex gap-11 items-center">
                                <span className="text-[#282739] max-w-[90px] w-full text-base font-semibold">
                                  Mô tả:
                                </span>
                                <span className="text-[#535261] text-base font-normal">
                                  {item.desService}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 mb-[400px]">
                            <div className="flex flex-col gap-2">
                              <div className="flex gap-2 items-center">
                                <span className="text-[20px] font-bold text-[#FF7506] my-4">
                                  Quy tắc cấp số
                                </span>
                              </div>
                              <div className="flex flex-col gap-3">
                                <div className="flex gap-4 items-center">
                                  <div className="text-[#282739] max-w-[120px] w-full text-base font-semibold ">
                                    <span>Tăng tự động </span>
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
                                  <div className="text-[#282739] max-w-[120px] w-full text-base font-semibold ">
                                    <span>Prefix:</span>
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

                                <div className="flex items-center">
                                  <div className="text-[#282739] max-w-[120px] w-full text-base font-semibold ">
                                    <span>Reset mỗi ngày</span>
                                  </div>
                                </div>
                                <div className="flex  items-center">
                                  <div className="text-[#282739] max-w-[120px] w-full text-base font-normal ">
                                    <span>Ví dụ: 201-2001</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  {/* Chi tiết thông tin */}
                </div>
              </div>
              {/* trạng thái dịch vụ */}
              <div className="w-full bg-white shadow-xl rounded-lg h-full px-6 py-4">
                <div className="flex flex-col gap-4 ">
                  <div className="max-w-full  flex gap-2 h-[72px] ">
                    {/* Trạnh thái hoạt động */}
                    <div className="max-w-[160px] w-full ">
                      <span className="font-semibold text-base text-[#282739]">
                        Trạng thái
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
                                Đã hoàn thành
                              </div>
                            </div>

                            {/* Thông báo 3 */}
                            <div className="w-full  ">
                              <div className="px-3 py-2  flex text-base font-normal text-[#535261] hover:cursor-pointer hover:bg-[#FFF2E7]">
                                Đã thực hiện
                              </div>
                            </div>
                            {/* Thông báo 4*/}
                            <div className="w-full  ">
                              <div className="px-3 py-2  flex text-base font-normal text-[#535261] hover:cursor-pointer hover:bg-[#FFF2E7]">
                                Vắng
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* thời gian  */}
                    <div className="max-w-[340px] w-full flex flex-col ">
                      <span className="font-semibold text-base text-[#282739]">
                        Chọn thời gian
                      </span>
                      <div className="max-h-11 h-full flex gap-2 justify-center items-center">
                        <CalendarFromTo />
                      </div>
                    </div>
                    {/* Từ khóa  */}
                    <div className="max-w-[160px] w-full ">
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
                    <div className="max-w-[1112px] w-full h-full shrink-0 flex">
                      <thead>
                        <table className="shadow-lg w-full table-fixed">
                          <tr className="text-[#FFFFFF] text-base font-bold bg-[#FF9138] ">
                            <th className="border-r-[1px] border-r-solid border-r-white py-3">
                              Số thứ tự
                            </th>
                            <th className="border-r-[1px] border-r-solid border-r-white py-3 ">
                              Trạng thái
                            </th>
                          </tr>
                          {statusService.map((val) => {
                            return (
                              <tbody className="odd:bg-[#FFF2E7] ">
                                <tr
                                  key={val.id}
                                  className="text[#535261] text-[14px] font-normal ">
                                  <td className="pl-3  py-3 border-r-[1px] border-r-solid border-r-[#FFE3CD]">
                                    {val.idService}
                                  </td>

                                  {val.activeStatus === "Đã hoàn thành" && (
                                    <td className="pl-3  border-r-[1px] border-r-solid border-r-[#FFE3CD] ">
                                      <div className=" flex px-1 items-center gap-1">
                                        <i className="fa-solid fa-circle text-[6px]  text-[#34CD26]"></i>
                                        <p>Đã hoàn thành</p>
                                      </div>
                                    </td>
                                  )}
                                  {val.activeStatus === "Đang thực hiện" && (
                                    <td className="pl-3  border-r-[1px] border-r-solid border-r-[#FFE3CD] ">
                                      <div className=" flex px-1 items-center gap-1">
                                        <i className="fa-solid fa-circle text-[6px]  text-[#5490EB]"></i>
                                        <p>Đang thực hiện</p>
                                      </div>
                                    </td>
                                  )}
                                  {val.activeStatus === "Vắng" && (
                                    <td className="pl-3  border-r-[1px] border-r-solid border-r-[#FFE3CD] ">
                                      <div className=" flex px-1 items-center gap-1">
                                        <i className="fa-solid fa-circle text-[6px]  text-[#6C7585]"></i>
                                        <p>Vắng</p>
                                      </div>
                                    </td>
                                  )}
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

            {/* button back and update  */}
            <div className="flex flex-col gap-4">
              <div>
                <Link to={`/service/updateservice/${param.id}`}>
                  {/* bg-[#FFF2E7] */}
                  <div className="  bg-[#FFF2E7] max-h-[94px] w-full h-full">
                    <div className="flex flex-col h-full justify-center items-center px-3 pt-2 gap-1">
                      <div className="w-[30px] h-[50px] flex justify-center rounded-lg items-center bg-[#FF9138]">
                        <i className="fa-solid fa-pen text-white p-1"></i>
                      </div>

                      <p className="text-[#FF7506] text-[16px] text-center pl-3 w-[90px] font-semibold h-full">
                        Cập nhật danh sách
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              <div>
                <Link to="/service">
                  <div className="     bg-[#FFF2E7] max-h-[94px] w-full h-full">
                    <div className="flex flex-col h-full justify-center items-center px-3 pt-2 gap-1">
                      <div className="w-[30px] h-[50px] flex justify-center rounded-lg items-center bg-[#FF9138]">
                        <i className="fa-solid fa-arrow-left text-white p-1"></i>
                      </div>

                      <p className="text-[#FF7506]  text-[16px] text-center pl-3 w-[90px] font-semibold h-full">
                        Quay lại
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailService;
