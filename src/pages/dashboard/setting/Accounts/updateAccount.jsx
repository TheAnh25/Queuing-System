import React, { useEffect, useState } from "react";
import avatarTest from "../../../../assets/images/avatarTest.jpg";
import NavbarDashboard from "../../../../common/navbarDashboard";
import NotiUser from "../../../../common/notiUser";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import dataAccount from "../../../../data/dataAccount";

const UpdateAccount = () => {
  const param = useParams();

  const [selectedStatus, setSelectedStatus] = useState([]);
  const [selectedRole, setSelectedRole] = useState([]);
  const [nameLogin, setNameLogin] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleNameLoginChange = (e) => {};

  useEffect(() => {
    if (
      param.id &&
      dataAccount.filter((item) => item.id.toString() === param.id)
    ) {
      dataAccount
        .filter((item) => item.id.toString() === param.id)
        .map(
          (item) => (
            setNameLogin(item.nameLogin),
            setUsername(item.username),
            setPhone(item.phone),
            setEmail(item.email)
          )
        );
    }
  }, []);

  const handleSelectRoleChange = (event) => {
    const options = Array.from(event.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setSelectedRole(options);
  };

  const handleSelectStatus = (event) => {
    const options = Array.from(event.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setSelectedStatus(options);
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
                  Cài đặt hệ thống
                </p>
              </div>
              <div>
                <i className="fa-solid fa-angle-right text-[#7E7D88]"></i>
              </div>
              <div>
                <p className="text-[#7E7D88] font-bold text-[20px] ">
                  Quản lý tài khoản
                </p>
              </div>
              <div>
                <i className="fa-solid fa-angle-right text-[#7E7D88]"></i>
              </div>
              <div>
                <p className="text-[#FF7506] font-bold text-[20px] ">
                  Cập nhật tài khoản
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
            <span>Quản lý tài khoản</span>
          </div>

          {/* Nội dung thiết bị */}
          <div className="flex flex-col gap-4 bg-white shadow-xl mr-16">
            {/* Nội dung thiết bị */}
            <div className="max-w-[1152px] w-full max-h-[550px] h-full flex gap-6 ">
              <div className="max-w-[1152px] w-full h-full  shrink-0 flex flex-col  px-6">
                <span className="text-[20px] font-bold text-[#FF7506] my-4">
                  Thông tin tài khoản
                </span>

                {param.id &&
                  dataAccount
                    .filter((item) => item.id.toString() === param.id)
                    .map((item) => (
                      <div className="flex gap-6">
                        {/* Thông tin thiết bị bên trái  */}
                        <div className="flex flex-col gap-2 mb-4 max-w-[540px] w-full">
                          <div className="flex flex-col gap-2">
                            <div className="flex gap-2 items-center">
                              <span className="text-[#282739] text-base font-semibold">
                                Họ tên
                              </span>
                              <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                            </div>
                            <div>
                              <input
                                className="rounded-lg border-[1.5px] border-solid w-full border-[#D4D4D7] px-3 py-[10px] text-[#A9A9B0] outline-none text-base font-normal"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className="flex gap-2 items-center">
                              <span className="text-[#282739] text-base font-semibold">
                                Số điện thoại
                              </span>
                              <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                            </div>
                            <div>
                              <input
                                className="rounded-lg border-[1.5px] border-solid w-full border-[#D4D4D7] px-3 py-[10px] text-[#A9A9B0] outline-none text-base font-normal"
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className="flex gap-2 items-center">
                              <span className="text-[#282739] text-base font-semibold">
                                Email
                              </span>
                              <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                            </div>
                            <div>
                              <input
                                className="rounded-lg border-[1.5px] border-solid w-full border-[#D4D4D7] px-3 py-[10px] text-[#A9A9B0] outline-none text-base font-normal"
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 ">
                            <div className="flex gap-2 items-center">
                              <span className="text-[#282739] text-base font-semibold">
                                Vai trò
                              </span>
                              <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                            </div>
                            <div className="relative group">
                              <textarea
                                className={
                                  selectedRole !== ""
                                    ? "border-[1.5px] rounded-lg border-solid w-full border-[#D4D4D7] px-3 py-[10px] text-[#A9A9B0] outline-none text-base font-normal gap-3 flex justify-center items-center text-[14px]"
                                    : ""
                                }
                                name=""
                                id=""
                                cols="30"
                                rows="1"
                                placeholder={item.position}
                                value={selectedRole.join()}></textarea>
                              <div className="invisible opacity-0 absolute bg-white w-full shadow-lg group-hover:opacity-100 group-hover:visible group-hover:mt-0">
                                <div className="flex flex-col items-center w-full rounded-b-[10px]">
                                  <select
                                    className="w-full outline-none max-h-[112px] h-full rounded-lg"
                                    multiple="multiple"
                                    onChange={handleSelectRoleChange}>
                                    <option
                                      className="px-3 py-2 flex text-base font-normal text-[#282739] hover:cursor-pointer hover:bg-[#FFF2E7]"
                                      value="Kế toán">
                                      Kế toán
                                    </option>
                                    <option
                                      className="px-3 py-2 flex text-base font-normal text-[#282739] hover:cursor-pointer hover:bg-[#FFF2E7]"
                                      value="Quản lý">
                                      Quản lý
                                    </option>
                                    <option
                                      className="px-3 py-2 flex text-base font-normal text-[#282739] hover:cursor-pointer hover:bg-[#FFF2E7]"
                                      value="Admin">
                                      Admin
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Thông tin thiết bị bên phải  */}
                        <div className="flex flex-col gap-2 mb-4 max-w-[540px] w-full">
                          {" "}
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
                                value={nameLogin}
                                onChange={(e) => setNameLogin(e.target.value)}
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
                                type="password"
                                placeholder="Nhập mật khẩu"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className="flex gap-2 items-center">
                              <span className="text-[#282739] text-base font-semibold">
                                Nhập lại mật khẩu
                              </span>
                              <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                            </div>
                            <div>
                              <input
                                className="rounded-lg border-[1.5px] border-solid w-full border-[#D4D4D7] px-3 py-[10px] text-[#A9A9B0] outline-none text-base font-normal"
                                type="password"
                                placeholder="Nhập lại mật khẩu"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 ">
                            <div className="flex gap-2 items-center">
                              <span className="text-[#282739] text-base font-semibold">
                                Tình trạng
                              </span>
                              <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                            </div>
                            <div className="relative group">
                              <textarea
                                className={
                                  selectedStatus !== ""
                                    ? "border-[1.5px] rounded-lg border-solid w-full border-[#D4D4D7] px-3 py-[10px] text-[#A9A9B0] outline-none text-base font-normal gap-3 flex justify-center items-center text-[14px]"
                                    : ""
                                }
                                name=""
                                id=""
                                cols="30"
                                rows="1"
                                placeholder="Tất cả"
                                value={selectedStatus.join()}></textarea>
                              <div className="invisible opacity-0 absolute bg-white w-full shadow-lg group-hover:opacity-100 group-hover:visible group-hover:mt-0">
                                <div className="flex flex-col items-center w-full rounded-b-[10px]">
                                  <select
                                    className="w-full outline-none max-h-[74px] h-full rounded-lg"
                                    multiple="multiple"
                                    onChange={handleSelectStatus}>
                                    <option
                                      className="px-3 py-2 flex text-base font-normal text-[#282739] hover:cursor-pointer hover:bg-[#FFF2E7]"
                                      value="Hoạt động">
                                      Hoạt động
                                    </option>
                                    <option
                                      className="px-3 py-2 flex text-base font-normal text-[#282739] hover:cursor-pointer hover:bg-[#FFF2E7]"
                                      value=" Ngưng hoạt động">
                                      Ngưng hoạt động
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            {/* <select className="w-full outline-none cursor-pointer border-[1.5px] border-solid border-[#D4D4D7] px-3 py-[10px] rounded-lg">
                          <option
                            className="px-3 py-10 flex text-base font-normal text-[#282739] hover:cursor-pointer hover:bg-[#FFF2E7]"
                            value="Khám tim mạch">
                            Kiosk
                          </option>
                          <option
                            className="px-3 py-2 flex text-base font-normal text-[#282739] hover:cursor-pointer hover:bg-[#FFF2E7]"
                            value="Khám sản - Phụ khoa">
                            Display counter
                          </option>
                        </select> */}
                          </div>
                        </div>
                      </div>
                    ))}
                <div className="flex flex-col gap-4">
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
            <Link to="/setting/manageaccount">
              <div className="border-[1px] border-solid border-[#FF9138] bg-[#FFF2E7] rounded-lg">
                <button className="py-3 px-[46px] text-[#FF9138] text-base font-bold ">
                  Hủy bỏ
                </button>
              </div>
            </Link>
            <div className="border-[1px] border-solid border-[#FF9138] bg-[#FF9138] rounded-lg">
              <button className="py-3 px-[52px] text-[#FFFFFF] text-base font-bold">
                Cập nhật
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateAccount;
