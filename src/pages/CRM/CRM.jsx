import React from "react";
import "./CRM.scss";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Search from "../../images/search.svg";
import ArrowDown from "../../images/arrow-down.svg";
import TableInfoHeader from "../../components/TableInfoHeader/TableInfoHeader";
import CustomerTable from "../../components/CustomerTable/CustomerTable";
import Paper from "@mui/material/Paper";
import CustomerProfile from "../../components/CustomerProfile/CustomerProfile";
import CustomerTabs from "../../components/CustomerTabs/CustomerTabs";

function CRM() {
  return (
    <div className="page-container crm-container">
      <div className="page-title">CRM</div>
      <div className="options-container">
        <div className="search-container">
          <input placeholder="Search Customer" />
          <img src={Search} alt="Search Icon" />
        </div>

        <button className="new-user-button">
          <p>Add New</p>
          <div>+</div>
        </button>
      </div>
      <div className="customer-table-container">
        <TableInfoHeader />
        <CustomerTable />

        {/* <div className="customer-info-header">
          <p>Total: 78 Customers</p>
          <div className="table-options">
            <select name="" id="date-options">
              <option value="date">Sort By: Date Created</option>
              <option value="newest">Sort By: Newest User</option>
              <option value="oldest">Sort By: Oldest User</option>
            </select>

            <button>
              <div>Filter</div>
              <img alt="Filter Icon" />
            </button>
          </div>
        </div> */}
      </div>
      <div className="customer-bottom-info">
        <div className="customer-bottom-box">
          <CustomerProfile />
        </div>

        <div className="customer-bottom-box">
          <CustomerTabs />
        </div>
      </div>
    </div>
  );
}

export default CRM;
