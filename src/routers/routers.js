import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/user/login";
import Home from "../pages/user";
import ForgotPassword from "../pages/user/forgotPassword";
import ResetPassword from "../pages/user/resetPassword";
import DashBoard from "../pages/dashboard";
import Device from "../pages/dashboard/device/device";
import AddDevice from "../pages/dashboard/device/addDevice";
import DetailDevice from "../pages/dashboard/device/detailDevice";
import UpdateDevice from "../pages/dashboard/device/updateDevice";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/device" element={<Device />} />
      <Route path="/device/adddevice" element={<AddDevice />} />
      <Route path="/device/detaildevice/:id" element={<DetailDevice />} />
      <Route path="/device/updatedevice/:id" element={<UpdateDevice />} />
      {/* <Route path="*" element={<Error404 />} /> */}
    </Routes>
  );
};

export default Routers;
