import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import avatarTest from "../../../../assets/images/avatarTest.jpg";
import NavbarDashboard from "../../../../common/navbarDashboard";
import NotiUser from "../../../../common/notiUser";
import { Link } from "react-router-dom";
import CheckBox from "../../../../common/checkBox";
import dataRoles from "../../../../data/dataRole";

const UpdateRole = () => {
  const param = useParams();
  const [nameRole, setNameRole] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (
      param.id &&
      dataRoles.filter((item) => item.id.toString() === param.id)
    ) {
      dataRoles
        .filter((item) => item.id.toString() === param.id)
        .map(
          (item) => (
            setNameRole(item.nameRole), setDescription(item.description)
          )
        );
    }
  }, []);
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
                  Cài đặt hệ thống
                </p>
              </div>
              <div>
                <i className="fa-solid fa-angle-right text-[#7E7D88]"></i>
              </div>
              <div>
                <p className="text-[#7E7D88] font-bold text-[20px] ">
                  Quản lý vai trò
                </p>
              </div>

              <div>
                <i className="fa-solid fa-angle-right text-[#7E7D88]"></i>
              </div>
              <div>
                <p className="text-[#FF7506] font-bold text-[20px] ">
                  Thêm vai trò
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
            <span>Danh sách vai trò</span>
          </div>

          {/* Nội dung thiết bị */}
          <div className="flex flex-col gap-4 bg-white shadow-xl mr-16">
            {/* Nội dung thiết bị */}
            <div className="max-w-[1152px] w-full max-h-[550px] h-full flex gap-6 ">
              <div className="max-w-[1152px] w-full h-full  shrink-0 flex flex-col  px-6">
                <span className="text-[20px] font-bold text-[#FF7506] my-4">
                  Thông tin vai trò
                </span>
                <div className="flex gap-6">
                  {/* Thông tin thiết bị bên trái  */}
                  {param.id &&
                    dataRoles
                      .filter((item) => item.id.toString() === param.id)
                      .map((item) => (
                        <div className="flex flex-col gap-2 mb-4 max-w-[540px] w-full">
                          <div className="flex flex-col gap-2">
                            <div className="flex gap-2 items-center">
                              <span className="text-[#282739] text-base font-semibold">
                                Tên vai trò
                              </span>
                              <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                            </div>
                            <div>
                              <input
                                className="rounded-lg border-[1.5px] border-solid w-full border-[#D4D4D7] px-3 py-[10px] text-[#A9A9B0] outline-none text-base font-normal"
                                type="text"
                                value={nameRole}
                                onChange={(e) => setNameRole(e.target.value)}
                              />
                            </div>
                          </div>
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
                                <textarea
                                  name=""
                                  value={description}
                                  onChange={(e) =>
                                    setDescription(e.target.value)
                                  }
                                  className="rounded-lg border-[1.5px] border-solid pt-2 pl-4 w-full border-[#D4D4D7] h-[133px] px-3 text-[#A9A9B0] outline-none text-base font-normal"
                                  id=""
                                  cols="30"
                                  rows="10"></textarea>
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
                      ))}

                  {/* Thông tin thiết bị bên phải  */}
                  <div className="flex flex-col gap-2 mb-4 max-w-[540px] w-full ">
                    {" "}
                    <div className="flex flex-col gap-2  h-full">
                      <div className="flex gap-2 items-center">
                        <span className="text-[#282739] text-base font-semibold">
                          Phân quyền chức năng
                        </span>
                        <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                      </div>
                      <div className="bg-[#FFF2E7] px-6 py-4 rounded-lg flex flex-col gap-6">
                        {/* Nhóm chức năng A */}
                        <div className="flex flex-col gap-3">
                          <div className="text-[#FF7506] text-[20px] font-bold">
                            <span>Nhóm chức năng A</span>
                          </div>

                          <div className="flex flex-col gap-3 items-center w-full">
                            {/* Thông báo 1 */}
                            <div className="w-full ">
                              <div className="  flex text-base font-semibold text-[#535261] ">
                                <CheckBox titleCheckbox={"Tất cả"} />
                              </div>
                            </div>

                            {/* Thông báo 2 */}
                            <div className="w-full  ">
                              <div className=" flex text-base font-semibold text-[#535261] ">
                                <CheckBox titleCheckbox={"Chức năng x"} />
                              </div>
                            </div>

                            {/* Thông báo 3 */}
                            <div className="w-full  ">
                              <div className=" flex text-base font-semibold text-[#535261] ">
                                <CheckBox titleCheckbox={"Chức năng y"} />
                              </div>
                            </div>
                            {/* Thông báo 4 */}
                            <div className="w-full  ">
                              <div className=" flex text-base font-semibold text-[#535261] ">
                                <CheckBox titleCheckbox={" Chức năng z"} />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Nhóm chức năng B  */}
                        <div className="flex flex-col gap-3">
                          <div className="text-[#FF7506] text-[20px] font-bold">
                            <span>Nhóm chức năng B</span>
                          </div>

                          <div className="flex flex-col gap-3 items-center w-full">
                            {/* Thông báo 1 */}
                            <div className="w-full ">
                              <div className="  flex text-base font-semibold text-[#535261] ">
                                <CheckBox titleCheckbox={"Tất cả"} />
                              </div>
                            </div>

                            {/* Thông báo 2 */}
                            <div className="w-full  ">
                              <div className=" flex text-base font-semibold text-[#535261] ">
                                <CheckBox titleCheckbox={"Chức năng x"} />
                              </div>
                            </div>

                            {/* Thông báo 3 */}
                            <div className="w-full  ">
                              <div className=" flex text-base font-semibold text-[#535261] ">
                                <CheckBox titleCheckbox={"Chức năng y"} />
                              </div>
                            </div>
                            {/* Thông báo 4 */}
                            <div className="w-full  ">
                              <div className=" flex text-base font-semibold text-[#535261] ">
                                <CheckBox titleCheckbox={" Chức năng z"} />
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
          <div className="max-w-[1152px] w-full flex items-center justify-center gap-8 mt-9">
            <Link to="/setting/managerole">
              <div className="border-[1px] border-solid border-[#FF9138] bg-[#FFF2E7] rounded-lg">
                <button className="py-3 px-[46px] text-[#FF9138] text-base font-bold ">
                  Hủy bỏ
                </button>
              </div>
            </Link>
            <div className="border-[1px] border-solid border-[#FF9138] bg-[#FF9138] rounded-lg">
              <button className="py-3 px-[52px] text-[#FFFFFF] text-base font-bold">
                Thêm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateRole;
