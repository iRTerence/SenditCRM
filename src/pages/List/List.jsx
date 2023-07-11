import React from "react";
import "./List.scss";
import DataTable from "../../components/DataTable/DataTable";
import { getUsers } from "../../util/http";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "../../store/redux/users";
const List = () => {
  useEffect(() => {
    async function getList() {
      let userList = await getUsers();
      console.log(userList);
      dispatch(getUserList({ users: userList }));
    }
    getList();
  }, []);

  const users = useSelector((state) => state.usersList.users);
  const dispatch = useDispatch();
  console.log(users);

  return (
    <div className="userContainer">
      <DataTable />
    </div>
  );
};

export default List;
