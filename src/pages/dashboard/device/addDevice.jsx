import React, { useState } from "react";
import avatarTest from "../../../assets/images/avatarTest.jpg";
import NavbarDashboard from "../../../common/navbarDashboard";
import NotiUser from "../../../common/notiUser";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";

const AddDevice = () => {
  const [idDevice, setIdDevice] = useState("");
  const [nameDevice, setNameDevice] = useState("");
  const [ipDevice, setIpDevice] = useState("");
  const [categoryDevice, setCategoryDevice] = useState("");
  const [serviceDevice, setServiceDevice] = useState("");
  const [statusDevice, setStatusDevice] = useState(true);
  const [connectDevice, setConnectDevice] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState([]);

  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const options = Array.from(event.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setSelectedOptions(options);
  };

  const handleSelectDevice = (event) => {
    const options = Array.from(event.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setSelectedDevice(options);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await addDoc(collection(db, "device"), {
        idDevice: idDevice,
        nameDevice: nameDevice,
        ipDevice: ipDevice,
        categoryDevice: categoryDevice,
        serviceDevice: serviceDevice,
        connectDevice: connectDevice,
        statusDevice: statusDevice,
        timeStamp: serverTimestamp(),
      });
    } catch (err) {
      console.log(err);
    }
    navigate("/device");
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
                  Thêm thiết bị
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
                          placeholder="Nhập mã thiết bị"
                          onChange={(e) => setIdDevice(e.target.value)}
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
                          placeholder="Nhập tên thiết bị"
                          onChange={(e) => setNameDevice(e.target.value)}
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
                          placeholder="Nhập địa chỉ IP"
                          onChange={(e) => setIpDevice(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Thông tin thiết bị bên phải  */}
                  <div className="flex flex-col gap-2 mb-4 max-w-[540px] w-full">
                    {" "}
                    <div className="flex flex-col gap-2 ">
                      <div className="flex gap-2 items-center">
                        <span className="text-[#282739] text-base font-semibold">
                          Loại thiết bị:
                        </span>
                        <i className="fa-solid fa-asterisk text-[6px] text-[#FF4747]"></i>
                      </div>
                      <div className="relative group">
                        <textarea
                          className={
                            selectedDevice !== ""
                              ? "border-[1.5px] rounded-lg border-solid w-full border-[#D4D4D7] px-3 py-[10px] text-[#A9A9B0] outline-none text-base font-normal gap-3 flex justify-center items-center text-[14px]"
                              : ""
                          }
                          name=""
                          id=""
                          cols="30"
                          rows="1"
                          placeholder="Nhập dịch vụ sử dụng"
                          value={selectedDevice.join()}
                          onChange={(e) =>
                            setCategoryDevice(e.target.value)
                          }></textarea>

                        <div className="invisible opacity-0 absolute bg-white w-full shadow-lg group-hover:opacity-100 group-hover:visible group-hover:mt-0">
                          <div className="flex flex-col items-center w-full rounded-b-[10px]">
                            <select
                              className="w-full outline-none max-h-[74px] h-full rounded-lg"
                              multiple="multiple"
                              onChange={handleSelectDevice}>
                              <option
                                className="px-3 py-2 flex text-base font-normal text-[#282739] hover:cursor-pointer hover:bg-[#FFF2E7]"
                                value="Kiosk">
                                Kiosk
                              </option>
                              <option
                                className="px-3 py-2 flex text-base font-normal text-[#282739] hover:cursor-pointer hover:bg-[#FFF2E7]"
                                value=" Display counter">
                                Display counter
                              </option>
                            </select>
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
                          placeholder="Nhập tài khoản"
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
                          placeholder="Nhập mật khẩu"
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
                    <div className="relative group">
                      <textarea
                        className={
                          selectedOptions !== ""
                            ? "border-[1.5px] rounded-lg border-solid w-full border-[#D4D4D7] px-3 py-[10px] text-[#A9A9B0] outline-none text-base font-normal gap-3 flex justify-center items-center text-[14px]"
                            : ""
                        }
                        name=""
                        id=""
                        cols="30"
                        rows="1"
                        placeholder="Nhập dịch vụ sử dụng"
                        value={selectedOptions.join(", ")}
                        onChange={(e) =>
                          setServiceDevice(e.target.value.toString())
                        }></textarea>
                      <div className="invisible opacity-0 absolute  bg-white  w-full shadow-lg group-hover:opacity-100 group-hover:visible group-hover:mt-0">
                        <div className=" w-full h-[1px] bg-[#F6F6F6] rounded-t-[10px]"></div>

                        <div className="flex flex-col items-center w-full rounded-b-[10px]">
                          <select
                            className="w-full outline-none "
                            multiple="multiple"
                            onChange={handleSelectChange}>
                            <option
                              className="px-3 py-2 flex text-base font-normal text-[#282739] hover:cursor-pointer hover:bg-[#FFF2E7]"
                              value="Khám tim mạch">
                              Khám tim mạch
                            </option>
                            <option
                              className="px-3 py-2 flex text-base font-normal text-[#282739] hover:cursor-pointer hover:bg-[#FFF2E7]"
                              value="Khám sản - Phụ khoa">
                              Khám sản - Phụ khoa
                            </option>
                            <option
                              className="px-3 py-2 flex text-base font-normal text-[#282739] hover:cursor-pointer hover:bg-[#FFF2E7]"
                              value="Khám răng hàm mặt">
                              Khám răng hàm mặt
                            </option>
                            <option
                              className="px-3 py-2 flex text-base font-normal text-[#282739] hover:cursor-pointer hover:bg-[#FFF2E7]"
                              value="Khám tai mũi họng">
                              Khám tai mũi họng
                            </option>
                            <option
                              className="px-3 py-2 flex text-base font-normal text-[#282739] hover:cursor-pointer hover:bg-[#FFF2E7]"
                              value="Khám hô hấp">
                              Khám hô hấp
                            </option>
                            <option
                              className="px-3 py-2 flex text-base font-normal text-[#282739] hover:cursor-pointer hover:bg-[#FFF2E7]"
                              value="Khám tổng quát">
                              Khám tổng quát
                            </option>
                          </select>
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
            <form onSubmit={handleAdd}>
              <div className="border-[1px] border-solid border-[#FF9138] bg-[#FF9138] rounded-lg">
                <button className="py-3 px-6 text-[#FFFFFF] text-base font-bold">
                  Thêm thiết bị
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddDevice;
