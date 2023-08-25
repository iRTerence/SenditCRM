import React, { useEffect, useState } from "react";
import "./CRM.scss";
import TableInfoHeader from "../../components/TableInfoHeader/TableInfoHeader";
import CustomerTable from "../../components/CustomerTable/CustomerTable";
import CRMTable from "../../components/CustomerTable/CustomerTable";
import CustomerProfile from "../../components/CustomerProfile/CustomerProfile";
import CustomerTabs from "../../components/CustomerTabs/CustomerTabs";
import TableFilterHeader from "../../components/TableHeader/TableFilterHeader";
import { useSelector, useDispatch } from "react-redux";
import { getUserList } from "../../store/redux/users";
import { getUsers } from "../../util/API/customers";

function CRM() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [previousUsers, setPreviousUsers] = useState([]);

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.usersList.users);

  useEffect(() => {
    async function getList() {
      let userList = await getUsers();
      console.log(userList);
      dispatch(getUserList({ users: userList }));
    }

    if (userData == null) {
      getList();
    }
  }, []);

  const handleSelectedUser = (selectedCustomer) => {
    setSelectedUser(selectedCustomer);
    console.log(selectedUser);
  };

  return (
    <div className="page-container crm-container">
      <div className="page-title">CRM</div>
      <TableFilterHeader />
      <div className="customer-table-container">
        <TableInfoHeader count={userData.count} />
        <CRMTable
          userData={userData.payload}
          handleSelectedUser={handleSelectedUser}
        />
      </div>
      <div className="customer-bottom-info">
        <div className="customer-bottom-box">
          <CustomerProfile selectedUser={selectedUser} />
        </div>

        <div className="customer-bottom-box">
          <CustomerTabs />
        </div>
      </div>
    </div>
  );
}

export default CRM;
