import React from "react";
import "./Dashboard.scss";
import InfoCard from "../../components/InfoCard/InfoCard";
import MainChart from "../../components/MainChart/MainChart";
import Chart from "../../components/Chart/Chart";
import Tables from "../../components/Tables/Tables";
// import { getUsers, callDeviceAuditApi } from "../../util/http";
const Home = () => {
  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-title">Dashboard</div>

        <div className="top-container">
          <div className="top-container-left">Hello</div>
          <div className="top-container-right">Hello</div>
        </div>
      </div>
    </>
  );
};

export default Home;
