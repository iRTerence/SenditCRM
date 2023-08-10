import React from "react";
import "./RolesAndPermissions.scss";

function RolesAndPermissions() {
  return (
    <div className="page-container roles-container">
      <div className="header-container">
        <div className="admin-header">Admin</div>
        <div className="admin-subtitle">User Management</div>
      </div>
      <div className="admin-table-container"></div>
    </div>
  );
}

export default RolesAndPermissions;
