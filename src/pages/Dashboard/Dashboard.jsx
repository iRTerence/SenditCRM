import React, { useEffect } from "react";
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
import NewCustomerItem from "../../components/NewCustomerItem/NewCustomerItem";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../util/API/customers";
import { getUserList } from "../../store/redux/users";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getList() {
      let userList = await getUsers();
      console.log(userList);
      dispatch(getUserList({ users: userList }));
    }
    getList();
  }, []);

  const customerList = useSelector((state) => state.usersList.users);
  const customerCount = customerList.count;
  const newCustomersList = customerList.payload.slice(
    Math.max(customerList.payload.length - 3, 0)
  );

  console.log(newCustomersList);

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
            <InfoCard image={user} title={"Customers"} number={customerCount} />
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
        <div className="middle-boxes newcustomer-box">
          <h2 className="transaction-chart-title">New Customers</h2>
          <div>
            <NewCustomerItem />
            <NewCustomerItem />
            <NewCustomerItem />
            <div className="viewall-link">View All</div>
          </div>

          {/* <MainChart /> */}
        </div>
        <div className="middle-boxes">Reports</div>
      </div>
    </div>
  );
};

export default Home;
