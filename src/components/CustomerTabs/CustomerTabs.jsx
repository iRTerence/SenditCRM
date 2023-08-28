import React from "react";
import "./CustomerTabs.scss";
import AccountTabs from "../AccountTabs/AccountTabs";

function CustomerTabs({ selectedUser, selectedUserData }) {
  return (
    <div className="account-tabs-container">
      <div className="bottom-title">Customer Details</div>
      <AccountTabs
        selectedUser={selectedUser}
        selectedUserData={selectedUserData}
      />
    </div>
  );
}

export default CustomerTabs;
