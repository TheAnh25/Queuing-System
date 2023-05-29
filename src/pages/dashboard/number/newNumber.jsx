import React from "react";
import avatarTest from "../../../assets/images/avatarTest.jpg";
import NavbarDashboard from "../../../common/navbarDashboard";
import NotiUser from "../../../common/notiUser";
import { Link } from "react-router-dom";
import { Modal, Ripple, initTE } from "tw-elements";
initTE({ Modal, Ripple });

const NewNumber = () => {
  return (
    <>
      <div className=" flex max-h-[810px] h-full bg-[#F7F7F7] rounded-2xl mx-auto">
        {/* Navbar  */}
        <NavbarDashboard />
        {/*Cấp số*/}
        <div className="w-[1240px]  max-h-[810px] h-full rounded-r-2xl pl-[24px]">
          {/* Top Nav User */}
          <div className="max-w-[1240px] w-full max-h-[88px] h-full flex justify-between items-center">
            <div className="flex gap-4 justify-center items-center h-[30px]">
              <div>
                <p className="  font-bold text-[20px] text-[#7E7D88] ">
                  Cấp số
                </p>
              </div>
              <div>
                <i className="fa-solid fa-angle-right text-[#7E7D88]"></i>
              </div>
              <div>
                <p className="text-[#7E7D88] font-bold text-[20px] ">
                  Danh sách cấp số
                </p>
              </div>
              <div>
                <i className="fa-solid fa-angle-right text-[#7E7D88]"></i>
              </div>
              <div>
                <p className="text-[#FF7506] font-bold text-[20px] ">
                  Cấp số mới
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
            <span>Quản lý cấp số</span>
          </div>

          {/* Nội dung  */}
          <div className="flex gap-4 w-[1240px]">
            <div className="flex flex-col gap-4 max-w-[1192px] w-full bg-white shadow-xl h-[660px] rounded-lg">
              <div className="m-6  flex flex-col items-center justify-center">
                <span className="text-[#FF7506] font-bold text-[34px] mb-5">
                  CẤP SỐ MỚI
                </span>
                <span className="text-[#535261] text-[20px] font-bold mb-3">
                  Dịch vụ khách hàng lựa chọn
                </span>
                <div className="max-w-[400px] w-full mb-[80px]">
                  <div className="relative group">
                    <div className="flex justify-between cursor-pointer items-center px-3 py-[10px] bg-[#FFFFFF] border-[1.5px] border-solid border-[#D4D4D7] rounded-lg ">
                      <li className=" text-base cursor-pointer font-normal text-[#A9A9B0] list-none">
                        Chọn dịch vụ
                      </li>
                      <i className="fa-solid fa-caret-down text-[#FF7506]"></i>
                    </div>

                    <div className="invisible rounded-lg opacity-0 absolute  bg-white w-full shadow-lg group-hover:opacity-100 group-hover:visible group-hover:mt-0">
                      <div className=" w-full h-[1px] bg-[#F6F6F6] rounded-t-[10px]"></div>

                      <div className="flex flex-col items-center w-full  rounded-b-[10px]">
                        {/* Thông báo 1 */}
                        <div className="w-full ">
                          <div className="px-3 py-2  flex text-[14px] font-normal text-[#535261] hover:cursor-pointer hover:bg-[#FFF2E7]">
                            Khám tim mạch
                          </div>
                        </div>

                        {/* Thông báo 2 */}
                        <div className="w-full  ">
                          <div className="px-3 py-2  flex text-[14px] font-normal text-[#535261] hover:cursor-pointer hover:bg-[#FFF2E7]">
                            Khám sản - Phụ khoa
                          </div>
                        </div>

                        {/* Thông báo 3 */}
                        <div className="w-full  ">
                          <div className="px-3 py-2  flex text-[14px] font-normal text-[#535261] hover:cursor-pointer hover:bg-[#FFF2E7]">
                            Khám răng hàm mặt
                          </div>
                        </div>
                        {/* Thông báo 4 */}
                        <div className="w-full  ">
                          <div className="px-3 py-2  flex text-[14px] font-normal text-[#535261] hover:cursor-pointer hover:bg-[#FFF2E7]">
                            Khám tai mũi họng
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-[1152px] w-full flex items-center justify-center gap-8 mt-9">
                  <Link to="/numberservice">
                    <div className="border-[1px] border-solid border-[#FF9138] bg-[#FFF2E7] rounded-lg">
                      <button className="py-3 px-7 text-[#FF9138] text-base font-bold ">
                        Hủy bỏ
                      </button>
                    </div>
                  </Link>

                  {/* In  */}
                  <div>
                    {/* <ButtonSubmit titleButton={'Delete Post'} cssButton={'button-report'} /> */}
                    <div class="border-[1px] border-solid border-[#FF9138] bg-[#FF9138] rounded-lg">
                      {/* <!-- Button trigger vertically centered modal--> */}
                      <button
                        type="button"
                        className=" py-3 px-9 text-[#FFFFFF] text-base font-bold"
                        data-te-toggle="modal"
                        data-te-target="#exampleModalCenter"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        In số
                      </button>
                    </div>

                    {/* <!--Verically centered modal--> */}
                    <div
                      data-te-modal-init
                      class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                      id="exampleModalCenter"
                      tabindex="-1"
                      aria-labelledby="exampleModalCenterTitle"
                      aria-modal="true"
                      role="dialog">
                      <div
                        data-te-modal-dialog-ref
                        class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
                        <div class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                          <div class="flex flex-shrink-0 items-center justify-end rounded-t-md  border-opacity-100 p-4 dark:border-opacity-50">
                            {/* <!--Close button--> */}
                            <button
                              type="button"
                              class="box-content text-[#FF9138] font-bold rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                              data-te-modal-dismiss
                              aria-label="Close">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="h-6 w-6">
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>

                          {/* <!--Modal body--> */}
                          <div class="relative p-4 flex flex-col items-center justify-center gap-6">
                            <div>
                              <p className="text-[#535261] text-[32px] font-bold ">
                                Số thứ tự được cấp
                              </p>
                            </div>
                            <div className="text-[#FF7506] text-[56px] font-extrabold">
                              2001201
                            </div>
                            <div className="text-[#282739] text-base font-normal flex">
                              DV: Khám răng hàm mặt{" "}
                              <p className="font-bold">(tại quầy số 1)</p>
                            </div>
                          </div>

                          {/* <!--Modal footer--> */}
                          <div class="flex flex-col bg-[#FF9138] flex-shrink-0 flex-wrap items-center justify-center rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                            <div className="flex gap-2">
                              <p className="flex gap-2 text-white text-[22px] font-bold">
                                Thời gian cấp:
                              </p>
                              <p className="flex gap-2 text-white text-[22px] font-bold">
                                09:30 11/10/2021
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <p className="flex gap-2 text-white text-[22px] font-bold">
                                Hạn sử dụng:
                              </p>
                              <p className="flex gap-2 text-white text-[22px] font-bold">
                                17:30 11/10/2021
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default NewNumber;
