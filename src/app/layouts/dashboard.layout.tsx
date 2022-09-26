import React from "react";
import { Outlet } from "react-router-dom";
import "global/dashboard.scss";
import Sidebar from "shared/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="dashboard">
      <aside className="">
        <Sidebar />
      </aside>
      <main className="dashboard-main">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
