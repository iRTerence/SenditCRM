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
import TableFilterHeader from "../../components/TableHeader/TableFilterHeader";

function CRM() {
  return (
    <div className="page-container crm-container">
      <div className="page-title">CRM</div>
      <TableFilterHeader />
      <div className="customer-table-container">
        <TableInfoHeader />
        <CustomerTable />
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
