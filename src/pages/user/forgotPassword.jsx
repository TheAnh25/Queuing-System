import React from "react";
import { Link } from "react-router-dom";
import imageForgotPassword from "../../assets/images/imageForgotPassword.png";
import logoAlta from "../../assets/images/logoAlta.png";

const ForgotPassword = () => {
  return (
    <>
      <div className="relative w-[1440px] h-[810px] bg-[#F7F7F7] rounded-2xl ">
        <div className="absolute w-[592px] h-[810px]">
          <div className="absolute w-[170px] h-[136px] left-[208px] top-[82px]">
            <img src={logoAlta} alt="" />
          </div>
          <span className="block absolute mb-4 left-[209px] top-[320px] font-bold text-[22px] text-[#282739]">
            Đặt lại mật khẩu
          </span>
          <div className="absolute left-[94px] top-[360px]">
            <form>
              <div>
                <span className="block w-[396px] h-[27px] font-normal text-lg text-[#37474F] mb-1">
                  Vui lòng nhập email để đặt lại mật khẩu của bạn*
                </span>
                <input
                  className="w-[400px] h-[44px] mt-1 mb-4 input-login"
                  type="text"
                  placeholder="email"
                />
              </div>
            </form>
          </div>
          <div className="absolute top-[511px] left-[118px] flex gap-6">
            <Link to="/login">
              <div className="w-[162px] h-[40px] button-cancel-white ">
                <button className=" font-bold text-base  flex-none order-none flex-grow-0">
                  Hủy
                </button>
              </div>
            </Link>
            <Link to="/resetpassword">
              <div className=" w-[162px] h-[40px] button-primary">
                <button className=" font-bold text-base  flex-none order-none flex-grow-0">
                  Tiếp tục
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div className="absolute w-[848px] h-[810px] left-[592px] top-0 bg-white">
          <div className="absolute w-[711px] h-[560px] left-[43px] right-[94px] top-[153px] bottom-[97px]">
            <img src={imageForgotPassword} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
