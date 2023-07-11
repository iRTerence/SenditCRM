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
      <div className="home">
        <div className="cardsContainer">
          <InfoCard type="sales" />
          <InfoCard type="earnings" />
          <InfoCard type="balance" />
          <InfoCard type="loans" />
        </div>
      </div>
      <div className="chartsContainer">
        <Chart />
        <MainChart />
      </div>
      <div className="tableContainer">
        <div className="tableTitle">
          <Tables />
        </div>
      </div>
    </>
  );
};

export default Home;
