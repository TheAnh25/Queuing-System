import React from "react";
import { Link } from "react-router-dom";
import imageForgotPassword from "../../assets/images/imageForgotPassword.png";
import logoAlta from "../../assets/images/logoAlta.png";

const ResetPassword = () => {
  return (
    <>
      <div className="relative w-[1440px] h-[810px] bg-[#F7F7F7] rounded-2xl ">
        <div className="absolute w-[592px] h-[810px]">
          <div className="absolute w-[170px] h-[136px] left-[208px] top-[82px]">
            <img src={logoAlta} alt="" />
          </div>
          <span className="block absolute mb-4 left-[209px] top-[320px] font-bold text-[22px] text-[#282739]">
            Đặt lại mật khẩu mới
          </span>
          <div className="absolute left-[94px] top-[360px]">
            <form>
              <div>
                <span className="block w-[133px] h-[27px] font-normal text-lg text-[#37474F] flex-none order-none flex-grow mb-2 mt-3">
                  Mật khẩu
                </span>
                <input
                  className="w-[400px] h-[44px] mt-1 mb-4 input-login"
                  type="password"
                  placeholder="password"
                />
              </div>
              <div>
                <span className="block w-[146px] h-[27px] font-normal text-lg text-[#37474F] flex-none order-none flex-grow">
                  Nhập lại mật khẩu
                </span>
                <input
                  className="w-[400px] h-[44px] mt-2 mb-3 input-login"
                  type="password"
                  placeholder="Confirm password"
                />
              </div>
            </form>
          </div>
          <Link to="/login">
            <div className="absolute top-[579px] left-[219px] w-[162px] h-[40px] button-primary mt-12">
              <button className=" font-bold text-base text-white flex-none order-none flex-grow-0">
                Xác nhận
              </button>
            </div>
          </Link>
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

export default ResetPassword;
