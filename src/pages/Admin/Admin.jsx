import React from "react";
import "./Admin.scss";
import TableFilterHeader from "../../components/TableHeader/TableFilterHeader";
import TableInfoHeader from "../../components/TableInfoHeader/TableInfoHeader";
import AdminTable from "../../components/AdminTable/AdminTable";
import AdminTableFilterHeader from "../../components/AdminTableFilterHeader/AdminTableFilterHeader";

function Admin() {
  return (
    <div className="page-container admin-container">
      <div className="header-container">
        <div className="admin-header">Admin</div>
        <div className="admin-subtitle">User Management</div>
      </div>
      <AdminTableFilterHeader />
      <div className="admin-table-container">
        <TableInfoHeader />
        <AdminTable />
      </div>
    </div>
  );
}

export default Admin;
