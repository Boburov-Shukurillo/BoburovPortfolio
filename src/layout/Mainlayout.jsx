import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Mainlayout = () => {
  return (
    <div className="h-full bg-gray-800">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Mainlayout;
