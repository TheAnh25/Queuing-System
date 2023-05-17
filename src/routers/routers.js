import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/user/login";
import Home from "../pages/user";
import ForgotPassword from "../pages/user/forgotPassword";
import ResetPassword from "../pages/user/resetPassword";
import DashBoard from "../pages/dashboard";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/dashboard" element={<DashBoard />} />
      {/* <Route path="*" element={<Error404 />} /> */}
    </Routes>
  );
};

export default Routers;
