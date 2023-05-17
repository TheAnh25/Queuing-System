import React, { useState } from "react";
import imageLogin from "../../assets/images/imageLogin.png";
import logoAlta from "../../assets/images/logoAlta.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "lequynhaivan01" && password === "123456") {
      toast.success("Login success!");
      navigate("/");
    } else {
      setErrorMessage("Sai mật khẩu hoặc tên đăng nhập");
    }
  };

  return (
    <>
      <div className="relative w-[1440px] h-[810px] bg-[#F7F7F7] rounded-2xl ">
        <div className="absolute w-[592px] h-[810px]">
          <div className="absolute w-[170px] h-[136px] left-[208px] top-[82px]">
            <img src={logoAlta} alt="" />
          </div>
          <div className="absolute left-[94px] top-[293px]">
            <form onSubmit={handleLogin}>
              <div>
                <span className="block w-[133px] h-[27px] font-normal text-lg text-[#37474F] flex-none order-none flex-grow mb-2">
                  Tên đăng nhập *
                </span>
                <input
                  className="w-[400px] h-[44px] mt-1 mb-4 input-login"
                  type="text"
                  placeholder="username"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <span className="block w-[88px] h-[27px] font-normal text-lg text-[#37474F] flex-none order-none flex-grow">
                  Mật khẩu *
                </span>
                <input
                  className="w-[400px] h-[44px] mt-2 mb-3 input-login"
                  type="password"
                  placeholder="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {errorMessage && (
                <div className="flex gap-2">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_72160_6551)">
                      <path
                        d="M10.2279 18.8327C14.8302 18.8327 18.5612 15.1017 18.5612 10.4993C18.5612 5.89698 14.8302 2.16602 10.2279 2.16602C5.62549 2.16602 1.89453 5.89698 1.89453 10.4993C1.89453 15.1017 5.62549 18.8327 10.2279 18.8327Z"
                        stroke="#E73F3F"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.228 13.834H10.2364"
                        stroke="#E73F3F"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.228 7.16602V10.4993"
                        stroke="#E73F3F"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_72160_6551">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0.228027 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <p className="text-red-600">{errorMessage}</p>
                </div>
              )}

              <div className="absolute top-[223px] left-[122px] w-[162px] h-[40px] button-primary mt-5">
                <button
                  type="submit"
                  className=" font-bold text-base text-white flex-none order-none flex-grow-0">
                  Đăng nhập
                </button>
              </div>

              <Link to="/forgotpassword">
                <div className="absolute top-[280px] left-[150px] w-[102px] h-[21px] font-normal text-[14px] mt-2 text-[#E73F3F]">
                  <span>Quên mật khẩu?</span>
                </div>
              </Link>
            </form>
          </div>
        </div>
        <div className="absolute w-[848px] h-[810px] left-[592px] top-0 bg-white">
          <div className="absolute w-[605px] h-[615px] left-[79px] right-[164px] top-[113px] bottom-[83px]">
            <img src={imageLogin} alt="" />
          </div>
          <div className="flex flex-col">
            <span className="absolute w-[142px] h-[54px] top-[407px] left-[454px] right-[252px] bot-[349px] font-normal text-[34px] text-center text-[#FF7506]">
              Hệ thống
            </span>
            <span className="absolute w-[361px] h-[54px] top-[454px] left-[454px] right-[33px] bottom-[302px] font-black text-[34px] text-[#FF7506]">
              QUẢN LÝ XẾP HÀNG
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
