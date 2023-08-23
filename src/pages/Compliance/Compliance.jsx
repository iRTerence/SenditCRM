import React, { useState } from "react";
import "./Compliance.scss";
import UserEdit from "../../images/user-edit.svg";
import ComplianceChart from "../../components/ComplianceChart/ComplianceChart";
import Calendar from "../../images/calendar.svg";
import UserList from "../../images/user-list.svg";
import Wallet from "../../images/wallet-16.svg";
import TransactionTable from "../../components/TransactionTable/TransactionTable";

function Compliance() {
  const [selectedOption, setSelectedOption] = useState("all");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div className="page-container roles-container compliance-container">
      <div className="header-container">
        <div className="page-title">Compliance</div>
      </div>
      <div className="role-button-container">
        <div className="manage-user-button">
          <div></div>
          <div>Manager User</div>
          <img src={UserEdit}></img>
        </div>
        <div className="create-roles-button">Create Roles +</div>
      </div>
      <div className="chart-container">
        <div className="compliance-charts">
          <ComplianceChart title={"Transfers"} />
        </div>
        <div className="compliance-charts">
          <ComplianceChart title={"Velocity"} />
        </div>
        <div className="compliance-charts">
          <ComplianceChart title={"Faield Attempts"} />
        </div>
      </div>
      <div className="transaction-history">
        <p className="transaction-history-title">Transaction History</p>
        <div className="transaction-option-container">
          <div className="transaction-filter-container">
            <div>
              <div>
                <label for="time" className="selector-titles">
                  Time Range
                </label>
              </div>
              <div className="transaction-selector">
                <img src={Calendar} />
                <select name="time" id="time-range">
                  <option value="All">All</option>
                  <option value="Day">Day</option>
                  <option value="Week">Week</option>
                  <option value="Month">Month</option>
                </select>
              </div>
            </div>

            <div>
              <div>
                <label for="time" className="selector-titles">
                  Type
                </label>
              </div>
              <div className="transaction-selector">
                <img src={Wallet} />
                <select name="time" id="time-range">
                  <option value="All">All</option>
                  <option value="Day">Day</option>
                  <option value="Week">Week</option>
                  <option value="Month">Month</option>
                </select>
              </div>
            </div>
            <div>
              <div>
                <label for="time" className="selector-titles">
                  Recipients
                </label>
              </div>
              <div className="transaction-selector">
                <img src={UserList} />
                <select name="time" id="time-range">
                  <option value="All">All</option>
                  <option value="Day">Day</option>
                  <option value="Week">Week</option>
                  <option value="Month">Month</option>
                </select>
              </div>
            </div>
          </div>
          <div className="transaction-sent-received">
            <div>
              <label>
                <input
                  className="transaction-radios"
                  type="radio"
                  value="all"
                  checked={selectedOption === "all"}
                  onChange={handleChange}
                />
                All
              </label>
              <label>
                <input
                  className="transaction-radios"
                  type="radio"
                  value="received"
                  checked={selectedOption === "received"}
                  onChange={handleChange}
                />
                Received
              </label>
              <label>
                <input
                  className="transaction-radios"
                  type="radio"
                  value="sent"
                  checked={selectedOption === "sent"}
                  onChange={handleChange}
                />
                Sent
              </label>
            </div>
          </div>
        </div>
        <div>
          <TransactionTable />
        </div>
      </div>
    </div>
  );
}

export default Compliance;
