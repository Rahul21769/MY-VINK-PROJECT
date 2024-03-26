import React from "react";
import DashboardDateGrid from "./DashboardDateGrid";
import DashboardGraph from "./DashboardGraph";
import ImageComponent from "./ImageComponent";
import CardMode from "./CardMode";
import Users from "./Users";
function Dashboard() {
  return (
    <div className="">
      <DashboardDateGrid />
      <DashboardGraph />
      <CardMode />
      <Users />
    </div>
  );
}

export default Dashboard;
