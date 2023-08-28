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
import { getUsers, getUserDetails } from "../../util/API/customers";
import CreateUserModal from "../../components/CreateUserModal/CreateUserModal";

function CRM() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [previousUsers, setPreviousUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedUserData, setSelectedUserData] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const handleSelectedUser = async (selectedCustomer) => {
    setSelectedUser(selectedCustomer);
    const userDetails = await getUserDetails(selectedCustomer);
    setSelectedUserData(userDetails);
  };

  const handleSearch = (searchText) => {
    if (searchText.trim() === "") {
      setFilteredUsers(userData.payload);
    } else {
      const filtered = userData.payload.filter(
        (user) =>
          user.Vuser.firstName
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          user.Vuser.emailAccount
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          user.Vuser.telephoneno.includes(searchText)
      );
      setFilteredUsers(filtered);
    }
  };

  return (
    <>
      <CreateUserModal open={open} handleClose={handleClose} />
      <div className="page-container crm-container">
        <div className="page-title">CRM</div>
        <TableFilterHeader
          handleSearch={handleSearch}
          handleOpen={handleOpen}
        />
        <div className="customer-table-container">
          <TableInfoHeader count={filteredUsers.length} />
          <CRMTable
            userData={filteredUsers}
            handleSelectedUser={handleSelectedUser}
          />
        </div>
        <div className="customer-bottom-info">
          <div className="customer-bottom-box">
            <CustomerProfile selectedUser={selectedUser} />
          </div>

          <div className="customer-bottom-box">
            <CustomerTabs
              selectedUser={selectedUser}
              selectedUserData={selectedUserData}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CRM;
