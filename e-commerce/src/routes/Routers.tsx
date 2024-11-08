import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../pages/home/Home";
import Login from "../pages/login/Login";
import { Header } from "../components/header/Navbar";

const Routers = () => {
  return (
    <BrowserRouter>
    <Header name={"Walisson"} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
