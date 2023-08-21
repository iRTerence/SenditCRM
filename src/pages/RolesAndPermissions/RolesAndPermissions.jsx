import React, { useState } from "react";
import "./RolesAndPermissions.scss";
import UserEdit from "../../images/user-edit.svg";
import RolesTable from "../../components/RolesTable/Rolestable";

function RolesAndPermissions() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <div className="page-container roles-container">
      <div className="header-container">
        <div className="page-title">Roles & Permissions</div>
      </div>
      <div className="role-button-container">
        <div className="manage-user-button">
          <div></div>
          <div>Manager User</div>
          <img src={UserEdit}></img>
        </div>
        <div className="create-roles-button">Create Roles +</div>
      </div>
      <div className="roles-table-container">
        <RolesTable
          modalOpen={modalOpen}
          handleClose={handleClose}
          handleOpen={handleOpen}
        />
      </div>
    </div>
  );
}

export default RolesAndPermissions;
