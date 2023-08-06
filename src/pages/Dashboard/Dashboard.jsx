import React from "react";
import "./Dashboard.scss";
import InfoCard from "../../components/InfoCard/InfoCard";
import MainChart from "../../components/MainChart/MainChart";
import Chart from "../../components/Chart/Chart";
import Tables from "../../components/Tables/Tables";
import reports from "../../images/reports.svg";
import transactions from "../../images/transactions.svg";
import user from "../../images/user.svg";
import world from "../../images/world.svg";
import BarCharts from "../../components/BarChart/BarCharts";
import LineCharts from "../../components/LineChart/LineCharts";
import TransactionsPieChart from "../../components/TransactionsPieChart/TransactionsPieChart";
import TransactionList from "../../components/TransactionList/TransactionList";

const Home = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-title">Dashboard</div>

      <div className="top-container">
        <div className="top-container-left">
          <div className="infocard-container">
            <InfoCard image={reports} title={"Reports"} number={74} />
            <InfoCard
              image={transactions}
              title={"Transactions"}
              number={1598}
            />
            <InfoCard image={user} title={"Customers"} number={367} />
            <InfoCard image={world} title={"Other"} number={97} />
          </div>
          <div className="linechart-container">
            <LineCharts />
          </div>
        </div>
        <div className="top-container-right">{<TransactionList />}</div>
      </div>
      <div className="middle-container">
        <div className="middle-boxes">
          <TransactionsPieChart />
        </div>
        <div className="middle-boxes">
          <h2 className="transaction-chart-title">Total Revenue</h2>

          <MainChart />
        </div>
        <div className="middle-boxes">Logs</div>
      </div>
    </div>
  );
};

export default Home;
