import React from "react";
import "./CustomerTabs.scss";
import AccountTabs from "../AccountTabs/AccountTabs";

function CustomerTabs() {
  return (
    <div className="account-tabs-container">
      <div className="bottom-title">Customer Details</div>
      <AccountTabs />
    </div>
  );
}

export default CustomerTabs;
