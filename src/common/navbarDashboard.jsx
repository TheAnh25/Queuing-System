import React from "react";
import logoAlta from "../assets/images/logoAlta.png";
import { Link, NavLink } from "react-router-dom";

const NavbarDashboard = () => {
  return (
    <>
      {" "}
      <div className="w-[200px] h-[810px] bg-[#FFFFFF] flex flex-col items-center gap-[54px] shadow-md rounded-l-2xl">
        <NavLink to="/">
          <div className="pt-8">
            <img className="w-20 h-16 object-cover" src={logoAlta} alt="" />
          </div>
        </NavLink>
        <div className="flex flex-col h-full justify-between items-center pb-[30px]">
          <div className="flex flex-col gap-[6px]">
            {/* Dashboard */}
            <NavLink
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#FF7506" : "",
                  width: isActive ? "200px" : "",
                  height: isActive ? "48px" : "",
                  color: isActive ? "#FFFFFF" : "#7E7D88",
                  display: isActive ? "inline-block" : "",
                };
              }}
              to="/dashboard">
              <div className="flex gap-2 h-12 items-center  px-3 ">
                <div className=" w-5 h-5 ">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.3333 9.08268V3.41602C18.3333 2.16602 17.8 1.66602 16.475 1.66602H13.1083C11.7833 1.66602 11.25 2.16602 11.25 3.41602V9.08268C11.25 10.3327 11.7833 10.8327 13.1083 10.8327H16.475C17.8 10.8327 18.3333 10.3327 18.3333 9.08268Z"
                      stroke="#A9A9B0"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.3333 16.584V15.084C18.3333 13.834 17.8 13.334 16.475 13.334H13.1083C11.7833 13.334 11.25 13.834 11.25 15.084V16.584C11.25 17.834 11.7833 18.334 13.1083 18.334H16.475C17.8 18.334 18.3333 17.834 18.3333 16.584Z"
                      stroke="#A9A9B0"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.74984 10.916V16.5827C8.74984 17.8327 8.2165 18.3327 6.8915 18.3327H3.52484C2.19984 18.3327 1.6665 17.8327 1.6665 16.5827V10.916C1.6665 9.66602 2.19984 9.16602 3.52484 9.16602H6.8915C8.2165 9.16602 8.74984 9.66602 8.74984 10.916Z"
                      stroke="#A9A9B0"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.74984 3.41602V4.91602C8.74984 6.16602 8.2165 6.66602 6.8915 6.66602H3.52484C2.19984 6.66602 1.6665 6.16602 1.6665 4.91602V3.41602C1.6665 2.16602 2.19984 1.66602 3.52484 1.66602H6.8915C8.2165 1.66602 8.74984 2.16602 8.74984 3.41602Z"
                      stroke="#A9A9B0"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className=" w-20 h-6 font-semibold  text-base  flex-none order-1 flex-grow-0 ">
                  <span>Dashboard</span>
                </div>
              </div>
            </NavLink>

            {/* Thiết bị */}
            <NavLink
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#FF7506" : "",
                  width: isActive ? "200px" : "",
                  height: isActive ? "48px" : "",
                  color: isActive ? "#FFFFFF" : "#7E7D88",
                  display: isActive ? "inline-block" : "",
                };
              }}
              to="/device">
              <div className="flex gap-2 h-12 items-center  px-3 ">
                <div className=" w-5 h-5 ">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.3665 1.66602H14.6248C17.5915 1.66602 18.3332 2.40768 18.3332 5.36602V10.641C18.3332 13.6077 17.5915 14.341 14.6332 14.341H5.3665C2.40817 14.3493 1.6665 13.6077 1.6665 10.6493V5.36602C1.6665 2.40768 2.40817 1.66602 5.3665 1.66602Z"
                      stroke="#A9A9B0"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 14.3496V18.3329"
                      stroke="#A9A9B0"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1.6665 10.834H18.3332"
                      stroke="#A9A9B0"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.25 18.334H13.75"
                      stroke="#A9A9B0"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className=" w-20 h-6 font-semibold text-base  flex-none order-1 flex-grow-0">
                  <span>Thiết bị</span>
                </div>
              </div>
            </NavLink>

            {/* Dịch vụ */}
            <NavLink
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#FF7506" : "",
                  width: isActive ? "200px" : "",
                  height: isActive ? "48px" : "",
                  color: isActive ? "#FFFFFF" : "#7E7D88",
                  display: isActive ? "inline-block" : "",
                };
              }}
              to="/service">
              <div className="flex gap-2 h-12 items-center  px-3 ">
                <div className=" w-5 h-5 ">
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle
                      cx="4.57986"
                      cy="14.4016"
                      r="0.708276"
                      fill="#A9A9B0"
                    />
                    <circle
                      cx="6.9407"
                      cy="14.4016"
                      r="0.708276"
                      fill="#A9A9B0"
                    />
                    <circle
                      cx="9.30154"
                      cy="14.4016"
                      r="0.708276"
                      fill="#A9A9B0"
                    />
                    <g clip-path="url(#clip0_72036_3744)">
                      <path
                        d="M13.0697 5.18945C13.5212 5.18945 13.9317 5.31748 14.2862 5.59915C14.9579 6.14053 15.0549 7.05868 14.4915 7.7098C14.3161 7.91465 14.1071 8.09755 13.9093 8.28044C13.663 8.50724 13.4839 8.75232 13.4988 9.1108C13.51 9.37052 13.2899 9.54245 13.0324 9.53513C12.7898 9.52416 12.6219 9.3376 12.6107 9.07788C12.5883 8.60235 12.7562 8.19997 13.0846 7.85978C13.3085 7.62567 13.5548 7.41716 13.775 7.17939C14.0772 6.85749 14.0101 6.43682 13.622 6.21369C13.5026 6.14419 13.357 6.09663 13.2152 6.07834C12.7674 6.02347 12.3644 6.15882 12.1927 6.7258C12.1218 6.96723 11.8718 7.0916 11.6404 7.0221C11.3979 6.9526 11.271 6.72215 11.3382 6.46975C11.5397 5.68694 12.2077 5.19311 13.0697 5.18945Z"
                        fill="#A9A9B0"
                      />
                      <path
                        d="M13.0732 9.9885C13.327 9.99581 13.5136 10.1897 13.5061 10.4311C13.4987 10.6799 13.2934 10.8628 13.0359 10.8518C12.7896 10.8408 12.6031 10.6433 12.6142 10.4018C12.6217 10.1604 12.8195 9.98118 13.0732 9.9885Z"
                        fill="#A9A9B0"
                      />
                    </g>
                    <path
                      d="M20.9999 8.18601C20.9999 10.0609 19.9886 11.7464 18.3784 12.9193C18.3226 12.9583 18.292 13.0251 18.2892 13.092L18.2196 14.9168C18.2112 15.1619 17.941 15.304 17.7348 15.1731L16.1886 14.2008C16.1886 14.2008 16.1886 14.2008 16.1858 14.2008C16.0967 14.1423 15.9881 14.1256 15.8878 14.1562C14.9684 14.4431 13.9683 14.6019 12.9208 14.6019C12.9068 14.6019 12.8929 14.6019 12.879 14.6019C12.9068 14.4181 12.9208 14.2314 12.9208 14.042C12.9208 11.426 10.2519 9.30594 6.95894 9.30594C6.28196 9.30594 5.63285 9.39509 5.02552 9.55946C4.90294 9.1165 4.83887 8.65404 4.83887 8.18044C4.83887 4.63398 8.45497 1.76172 12.918 1.76172C17.3838 1.76729 20.9999 4.64234 20.9999 8.18601Z"
                      stroke="#A9A9B0"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M5.02842 9.56445C2.68547 10.2024 1 11.9687 1 14.047C1 15.4288 1.74662 16.6741 2.93342 17.5405C2.97521 17.5711 2.99749 17.6185 3.00028 17.6686L3.05042 19.0142C3.056 19.1953 3.25658 19.2984 3.40981 19.2037L4.55203 18.4849C4.56038 18.4793 4.57153 18.471 4.57989 18.4654C4.62167 18.432 4.67739 18.4208 4.72754 18.4376C5.41844 18.6604 6.17064 18.783 6.96183 18.783C10.0152 18.783 12.5336 16.9582 12.8819 14.6069"
                      stroke="#A9A9B0"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                    />
                    <defs>
                      <clipPath id="clip0_72036_3744">
                        <rect
                          width="3.54138"
                          height="5.66621"
                          fill="white"
                          transform="translate(11.3193 5.18945)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className=" w-20 h-6 font-semibold text-base  flex-none order-1 flex-grow-0 ">
                  <span>Dịch vụ</span>
                </div>
              </div>
            </NavLink>

            {/* Cấp số */}
            <NavLink
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#FF7506" : "",
                  width: isActive ? "200px" : "",
                  height: isActive ? "48px" : "",
                  color: isActive ? "#FFFFFF" : "#7E7D88",
                  display: isActive ? "inline-block" : "",
                };
              }}
              to="/numberservice">
              <div className="flex gap-2 h-12 items-center  px-3 ">
                <div className=" w-5 h-5 ">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_72036_3758)">
                      <g clip-path="url(#clip1_72036_3758)">
                        <path
                          d="M1.6665 14.166L9.99984 18.3327L18.3332 14.166"
                          stroke="#A9A9B0"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1.6665 10L9.99984 14.1667L18.3332 10"
                          stroke="#A9A9B0"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.99984 1.66602L1.6665 5.83268L9.99984 9.99935L18.3332 5.83268L9.99984 1.66602Z"
                          stroke="#A9A9B0"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_72036_3758">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                      <clipPath id="clip1_72036_3758">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className=" w-20 h-6 font-semibold text-base  flex-none order-1 flex-grow-0 ">
                  <span>Cấp số</span>
                </div>
              </div>
            </NavLink>

            {/* Báo cáo */}
            <NavLink
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#FF7506" : "",
                  width: isActive ? "200px" : "",
                  height: isActive ? "48px" : "",
                  color: isActive ? "#FFFFFF" : "#7E7D88",
                  display: isActive ? "inline-block" : "",
                };
              }}
              to="/report">
              <div className="flex gap-2 h-12 items-center  px-3 ">
                <div className=" w-5 h-5 ">
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_72036_3766)">
                      <mask
                        id="path-1-outside-1_72036_3766"
                        maskUnits="userSpaceOnUse"
                        x="-1"
                        y="-1"
                        width="20"
                        height="22"
                        fill="black">
                        <rect
                          fill="white"
                          x="-1"
                          y="-1"
                          width="20"
                          height="22"
                        />
                        <path d="M5.29762 0.968221C5.29762 1.06326 5.29762 1.14048 5.29762 1.22364C5.29762 1.9008 5.30422 2.57202 5.29762 3.24918C5.29101 4.16394 4.61064 4.76388 3.59339 4.76388C2.77431 4.76388 1.96184 4.76388 1.14275 4.76388C1.12954 4.76388 1.10972 4.76982 1.05688 4.7817C1.05688 4.85298 1.05688 4.9302 1.05688 5.00742C1.05688 9.47431 1.05688 13.9471 1.05688 18.414C1.05688 18.8833 1.22202 19.0318 1.73064 19.0318C6.57908 19.0318 11.4209 19.0318 16.2694 19.0318C16.7648 19.0318 16.9365 18.8714 16.9365 18.4259C16.9365 17.5349 16.9365 16.6439 16.9365 15.7529C16.9365 15.4618 17.1017 15.2718 17.3659 15.2302C17.6829 15.1827 17.9802 15.3727 17.9868 15.6638C18 16.6736 18.0198 17.6834 17.9802 18.6932C17.9472 19.4298 17.2272 19.9762 16.3684 19.9822C15.4833 19.9881 14.6048 19.9822 13.7196 19.9822C9.7167 19.9822 5.71376 19.9822 1.70422 19.9822C0.85211 19.9822 0.211376 19.5486 0.039633 18.8476C0.00660551 18.717 0.00660551 18.5803 0.00660551 18.4497C0.00660551 13.7749 0.00660551 9.09415 0 4.41936C0 4.17582 0.0858716 3.99762 0.270826 3.8313C1.61174 2.64924 2.93945 1.44936 4.26716 0.24948C4.45211 0.0772201 4.65028 0 4.9211 0C8.71266 0.00594001 12.4976 0.00594001 16.2892 0.00594001C17.3262 0.00594001 17.9934 0.605881 17.9934 1.53846C17.9934 2.13246 17.9934 15.0223 17.9934 15.6163C17.9934 15.8598 17.8547 16.0261 17.6235 16.0915C17.3923 16.1568 17.1809 16.1034 17.0554 15.9252C16.9828 15.8182 16.9497 15.6757 16.9431 15.5509C16.9299 14.9866 16.9365 2.12652 16.9365 1.56222C16.9365 1.12266 16.7516 0.956341 16.2561 0.956341C12.6826 0.956341 9.10899 0.956341 5.52881 0.956341C5.46936 0.950401 5.3967 0.962281 5.29762 0.968221ZM1.89578 3.79566C1.89578 3.79566 1.90899 3.80754 1.9222 3.80754C2.39119 3.80754 2.86018 3.81348 3.32917 3.81348C4.14165 3.81348 4.22752 3.73626 4.22752 3.01752C4.22752 2.57796 4.22752 2.1384 4.22752 1.69884C3.44147 2.4057 2.66862 3.10068 1.89578 3.79566Z" />
                      </mask>
                      <path
                        d="M5.29762 0.968221C5.29762 1.06326 5.29762 1.14048 5.29762 1.22364C5.29762 1.9008 5.30422 2.57202 5.29762 3.24918C5.29101 4.16394 4.61064 4.76388 3.59339 4.76388C2.77431 4.76388 1.96184 4.76388 1.14275 4.76388C1.12954 4.76388 1.10972 4.76982 1.05688 4.7817C1.05688 4.85298 1.05688 4.9302 1.05688 5.00742C1.05688 9.47431 1.05688 13.9471 1.05688 18.414C1.05688 18.8833 1.22202 19.0318 1.73064 19.0318C6.57908 19.0318 11.4209 19.0318 16.2694 19.0318C16.7648 19.0318 16.9365 18.8714 16.9365 18.4259C16.9365 17.5349 16.9365 16.6439 16.9365 15.7529C16.9365 15.4618 17.1017 15.2718 17.3659 15.2302C17.6829 15.1827 17.9802 15.3727 17.9868 15.6638C18 16.6736 18.0198 17.6834 17.9802 18.6932C17.9472 19.4298 17.2272 19.9762 16.3684 19.9822C15.4833 19.9881 14.6048 19.9822 13.7196 19.9822C9.7167 19.9822 5.71376 19.9822 1.70422 19.9822C0.85211 19.9822 0.211376 19.5486 0.039633 18.8476C0.00660551 18.717 0.00660551 18.5803 0.00660551 18.4497C0.00660551 13.7749 0.00660551 9.09415 0 4.41936C0 4.17582 0.0858716 3.99762 0.270826 3.8313C1.61174 2.64924 2.93945 1.44936 4.26716 0.24948C4.45211 0.0772201 4.65028 0 4.9211 0C8.71266 0.00594001 12.4976 0.00594001 16.2892 0.00594001C17.3262 0.00594001 17.9934 0.605881 17.9934 1.53846C17.9934 2.13246 17.9934 15.0223 17.9934 15.6163C17.9934 15.8598 17.8547 16.0261 17.6235 16.0915C17.3923 16.1568 17.1809 16.1034 17.0554 15.9252C16.9828 15.8182 16.9497 15.6757 16.9431 15.5509C16.9299 14.9866 16.9365 2.12652 16.9365 1.56222C16.9365 1.12266 16.7516 0.956341 16.2561 0.956341C12.6826 0.956341 9.10899 0.956341 5.52881 0.956341C5.46936 0.950401 5.3967 0.962281 5.29762 0.968221ZM1.89578 3.79566C1.89578 3.79566 1.90899 3.80754 1.9222 3.80754C2.39119 3.80754 2.86018 3.81348 3.32917 3.81348C4.14165 3.81348 4.22752 3.73626 4.22752 3.01752C4.22752 2.57796 4.22752 2.1384 4.22752 1.69884C3.44147 2.4057 2.66862 3.10068 1.89578 3.79566Z"
                        fill="#A9A9B0"
                      />

                      <path
                        d="M7.91993 11.6063C7.74158 11.7785 7.58966 11.9389 7.41791 12.0874C6.67149 12.7586 5.92507 13.4358 5.17865 14.1011C4.8748 14.3743 4.47846 14.3327 4.28691 14.0179C4.1614 13.816 4.20764 13.6318 4.43883 13.418C4.99369 12.919 5.54856 12.4201 6.10342 11.9211C6.5658 11.5053 7.02158 11.0895 7.48397 10.6796C7.79443 10.4005 8.07186 10.4005 8.38232 10.6737C8.93058 11.1667 9.47883 11.6597 10.0073 12.1349C10.9783 11.2618 11.9427 10.3945 12.9071 9.52134C12.6825 9.52134 12.4249 9.52728 12.1673 9.52134C11.8964 9.50946 11.6983 9.36096 11.652 9.14712C11.6058 8.93328 11.6983 8.72538 11.9031 8.63628C12.0021 8.5947 12.121 8.565 12.2333 8.565C12.8939 8.55906 13.5544 8.55906 14.215 8.565C14.6179 8.57094 14.8161 8.76102 14.8161 9.12336C14.8161 9.71142 14.8161 10.2935 14.8161 10.8816C14.8161 11.2142 14.5981 11.434 14.281 11.434C13.9772 11.434 13.7658 11.2202 13.7592 10.8935C13.7526 10.6915 13.7526 10.4955 13.7526 10.2935C13.7526 10.2817 13.7394 10.2698 13.6601 10.1629C13.6073 10.2579 13.5809 10.347 13.5214 10.4005C12.5306 11.2974 11.5397 12.1884 10.5489 13.0794C10.179 13.412 9.94122 13.412 9.5647 13.0794C9.02966 12.5983 8.49461 12.1171 7.91993 11.6063Z"
                        fill="#A9A9B0"
                      />
                      <path
                        d="M13.7661 14.5004C13.7661 13.8055 13.7595 13.1045 13.7661 12.4096C13.7727 12.0116 14.1691 11.7799 14.5258 11.9522C14.7173 12.0413 14.8164 12.1898 14.8164 12.3858C14.8164 13.8114 14.823 15.237 14.8164 16.6626C14.8164 16.9477 14.572 17.1497 14.2814 17.1437C13.9973 17.1378 13.7727 16.9418 13.7727 16.6685C13.7595 15.9439 13.7661 15.2251 13.7661 14.5004Z"
                        fill="#A9A9B0"
                      />
                      <path
                        d="M7.40455 14.9033C7.40455 14.3152 7.39795 13.7331 7.40455 13.145C7.40455 12.8302 7.60272 12.6282 7.89997 12.6104C8.21703 12.5926 8.45483 12.8064 8.46143 13.1331C8.46804 13.5133 8.46143 13.8875 8.46143 14.2677C8.46143 15.0458 8.46143 15.824 8.46143 16.6021C8.46143 16.9288 8.28308 17.1308 7.98584 17.1545C7.64896 17.1842 7.40455 16.9763 7.39795 16.6377C7.40455 16.0616 7.40455 15.4854 7.40455 14.9033Z"
                        fill="#A9A9B0"
                      />
                      <path
                        d="M12.6958 15.0159C12.6958 15.5445 12.6958 16.0672 12.6958 16.5959C12.6958 16.9226 12.491 17.1305 12.1806 17.1364C11.8635 17.1424 11.6455 16.9226 11.6455 16.59C11.6455 15.5208 11.6455 14.4516 11.6455 13.3883C11.6455 13.0616 11.8503 12.8537 12.1607 12.8478C12.4778 12.8418 12.6958 13.0616 12.6958 13.3943C12.7024 13.9348 12.6958 14.4753 12.6958 15.0159Z"
                        fill="#A9A9B0"
                      />
                      <path
                        d="M10.5818 15.4798C10.5818 15.8422 10.5818 16.2045 10.5818 16.5728C10.5752 16.9292 10.3638 17.149 10.0467 17.143C9.72967 17.1371 9.5249 16.9173 9.5249 16.5787C9.5249 15.8362 9.5249 15.0937 9.5249 14.3512C9.5249 14.0245 9.72967 13.8166 10.0401 13.8107C10.3704 13.8047 10.5752 14.0008 10.5818 14.3453C10.5884 14.7195 10.5818 15.0997 10.5818 15.4798Z"
                        fill="#A9A9B0"
                      />
                      <path
                        d="M5.29737 15.8185C5.29737 15.5512 5.29076 15.2839 5.29737 15.0166C5.30397 14.7077 5.52196 14.5176 5.83242 14.5236C6.12966 14.5295 6.34764 14.7255 6.34764 15.0166C6.35425 15.5571 6.35425 16.0977 6.34764 16.6382C6.34104 16.9352 6.10985 17.1431 5.8126 17.1372C5.52196 17.1312 5.31058 16.9293 5.29737 16.6382C5.29737 16.6263 5.29737 16.6085 5.29737 16.5966C5.29737 16.3353 5.29737 16.0798 5.29737 15.8185Z"
                        fill="#A9A9B0"
                      />
                      <path
                        d="M4.22745 16.43C4.22745 16.5251 4.23406 16.626 4.22745 16.7211C4.20103 16.9587 3.96323 17.1428 3.70562 17.1369C3.448 17.1309 3.21681 16.9587 3.19699 16.733C3.17717 16.5251 3.17717 15.8776 3.19699 15.6697C3.21681 15.4321 3.46782 15.2598 3.73204 15.2658C3.99626 15.2717 4.20763 15.444 4.23406 15.6816C4.23406 15.7826 4.22745 16.329 4.22745 16.43Z"
                        fill="#A9A9B0"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_72036_3766">
                        <rect width="18" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className=" w-20 h-6 font-semibold text-base  flex-none order-1 flex-grow-0">
                  <span>Báo cáo</span>
                </div>
              </div>
            </NavLink>

            {/* Cài đặt hệ thống */}

            <NavLink
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#FF7506" : "",
                  width: isActive ? "200px" : "",
                  height: isActive ? "48px" : "",
                  color: isActive ? "#FFFFFF" : "#7E7D88",
                  display: isActive ? "inline-block" : "",
                };
              }}
              to="/setting/managerole">
              <div className="relative group">
                <div className="flex gap-2 h-12 items-center px-3 ">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.3665 1.66602H14.6248C17.5915 1.66602 18.3332 2.40768 18.3332 5.36602V10.641C18.3332 13.6077 17.5915 14.341 14.6332 14.341H5.3665C2.40817 14.3493 1.6665 13.6077 1.6665 10.6493V5.36602C1.6665 2.40768 2.40817 1.66602 5.3665 1.66602Z"
                      stroke="#A9A9B0"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 14.3496V18.3329"
                      stroke="#A9A9B0"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1.6665 10.834H18.3332"
                      stroke="#A9A9B0"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.25 18.334H13.75"
                      stroke="#A9A9B0"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <div className=" w-[125px] h-6 font-semibold text-base ">
                    <span>Cài đặt hệ thống</span>
                  </div>

                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.99984 16.6667C10.4601 16.6667 10.8332 16.2936 10.8332 15.8333C10.8332 15.3731 10.4601 15 9.99984 15C9.5396 15 9.1665 15.3731 9.1665 15.8333C9.1665 16.2936 9.5396 16.6667 9.99984 16.6667Z"
                      fill="#A9A9B0"
                      stroke="#A9A9B0"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.99984 10.8327C10.4601 10.8327 10.8332 10.4596 10.8332 9.99935C10.8332 9.53911 10.4601 9.16602 9.99984 9.16602C9.5396 9.16602 9.1665 9.53911 9.1665 9.99935C9.1665 10.4596 9.5396 10.8327 9.99984 10.8327Z"
                      fill="#A9A9B0"
                      stroke="#A9A9B0"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.99984 5.00065C10.4601 5.00065 10.8332 4.62755 10.8332 4.16732C10.8332 3.70708 10.4601 3.33398 9.99984 3.33398C9.5396 3.33398 9.1665 3.70708 9.1665 4.16732C9.1665 4.62755 9.5396 5.00065 9.99984 5.00065Z"
                      fill="#A9A9B0"
                      stroke="#A9A9B0"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <div className="invisible rounded-lg opacity-0 absolute  bg-white w-full shadow-lg group-hover:opacity-100 group-hover:visible group-hover:mt-0">
                  <div className=" w-full h-[1px] bg-[#F6F6F6] rounded-t-[10px]"></div>

                  <div className="flex flex-col items-center w-full rounded-b-[10px]">
                    {/* Thông báo 1 */}
                    <div className="w-full ">
                      <NavLink
                        style={({ isActive }) => {
                          return {
                            backgroundColor: isActive ? "#FF7506" : "",
                            width: isActive ? "200px" : "",
                            height: isActive ? "100%" : "",
                            color: isActive ? "#FFFFFF" : "#7E7D88",
                            display: isActive ? "inline-block" : "",
                          };
                        }}
                        to="/setting/managerole">
                        <div className="w-full ">
                          <div className="px-3 py-2  flex text-base font-normal hover:cursor-pointer hover:bg-[#FFF2E7] hover:text-black">
                            Quản lý vai trò
                          </div>
                        </div>
                      </NavLink>
                    </div>

                    {/* Thông báo 2 */}

                    <div className="w-full ">
                      <NavLink
                        style={({ isActive }) => {
                          return {
                            backgroundColor: isActive ? "#FF7506" : "",
                            width: isActive ? "200px" : "",
                            height: isActive ? "100%" : "",
                            color: isActive ? "#FFFFFF" : "#7E7D88",
                            display: isActive ? "inline-block" : "",
                          };
                        }}
                        to="/setting/manageaccount">
                        <div className="w-full ">
                          <div className="px-3 py-2  flex text-base font-normal hover:cursor-pointer hover:bg-[#FFF2E7] hover:text-black">
                            Quản lý tài khoản
                          </div>
                        </div>
                      </NavLink>
                    </div>

                    {/* Thông báo 3 */}

                    <div className="w-full ">
                      <NavLink
                        style={({ isActive }) => {
                          return {
                            backgroundColor: isActive ? "#FF7506" : "",
                            width: isActive ? "200px" : "",
                            height: isActive ? "100%" : "",
                            color: isActive ? "#FFFFFF" : "#7E7D88",
                            display: isActive ? "inline-block" : "",
                          };
                        }}
                        to="/setting/manageuser">
                        <div className="w-full ">
                          <div className="px-3 py-2  flex text-base font-normal hover:cursor-pointer hover:bg-[#FFF2E7] hover:text-black">
                            Nhật ký người dùng
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="w-full flex justify-center">
            <NavLink to="/login">
              <div className=" w-[176px] h-[40px]  button-cancel flex flex-row items-center p-3 gap-3 ">
                <div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.3335 14.1673L17.5002 10.0007L13.3335 5.83398"
                      stroke="#FF7506"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 10H7.5"
                      stroke="#FF7506"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5"
                      stroke="#FF7506"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <button className=" font-bold text-base  ">Đăng xuất</button>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarDashboard;
