import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../home/home";
import Login from "../login/login";
import Register from "../register/register";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
