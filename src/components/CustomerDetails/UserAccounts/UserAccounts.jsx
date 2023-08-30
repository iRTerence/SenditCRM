import React, { useEffect, useState } from "react";
import "./UserAccounts.scss";
import { getBalances } from "../../../util/API/customers";
function UserAccounts({ selectedUser, selectedUserData }) {
  const [userAccounts, setUserAccounts] = useState(null);

  useEffect(() => {
    async function getUserBalance() {
      let response = await getBalances(selectedUser);
      console.log(response);
      if (response.body) {
        setUserAccounts(response.body.record);
        console.log(response.body.record.Vacctbalance);
      } else {
        console.log("failed");
        console.log(userAccounts);
      }
    }
    getUserBalance();
  }, [selectedUser]);

  const noBalance = (
    <div>
      No accounts found for this user. Please confirm that the user is verified
      and that they have completed their KYC.
    </div>
  );

  return (
    <div className="user-accounts-tab">
      <div className="accounts-tab-header"> User Account Details</div>
      {userAccounts == null ? (
        noBalance
      ) : (
        <div className="balance-container">
          <div>Account Id: {userAccounts.Vacctbalance.acctID}</div>
          <div>Account Balance: {userAccounts.Vacctbalance.balance}</div>
          <div>
            Unavailable balance: {userAccounts.Vacctbalance.unavailableBalance}
          </div>
          <div>
            Last Transaction Date: {userAccounts.Vacctbalance.lastUpdate}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserAccounts;
