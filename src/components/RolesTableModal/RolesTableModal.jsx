import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import CloseButton from "../../images/close-light.svg";

import "./RolesTableModal.scss";

function RolesTableModal({ open, handleClose }) {
  const [selectedPermissions, setSelectedPermissions] = useState({});

  function handlePermissionChange(permissionName, value) {
    setSelectedPermissions((prevSelectedPermissions) => ({
      ...prevSelectedPermissions,
      [permissionName]: value,
    }));
  }

  const permissionNames = [
    "Dev Access",
    "Agent",
    "CRM",
    "Treasury",
    "Transfer",
    "Reporting",
    "Wallets",
    "Other Levels",
  ];

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="role-modal-container"
        style={{
          position: "fixed",
          zIndex: 9999,
          display: "flex",
        }}
      >
        <div className="centered-content ">
          <div className="role-modal-header">
            <div className="modal-title">Edit Role & Permissions</div>
            <img src={CloseButton} onClick={() => handleClose()} />
          </div>
          <div className="role-name-container">
            <p className="role-text">Administrator</p>
            <p className="role-name">Role Name</p>
          </div>
          <div className="role-access-body">
            <table className="access-table">
              <thead>
                <tr>
                  <th></th>
                  <th>A</th>
                  <th>V</th>
                  <th>-</th>
                </tr>
              </thead>
              <tbody>
                {permissionNames.map((permissionName, index) => (
                  <tr key={index} className="table-row-container">
                    <td className="permission-name">{permissionName}</td>
                    <td>
                      <input
                        type="radio"
                        className="radio-button"
                        name={`radioGroup${index}`}
                        value="A"
                        checked={selectedPermissions[permissionName] === "A"}
                        onChange={() =>
                          handlePermissionChange(permissionName, "A")
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio-button"
                        name={`radioGroup${index}`}
                        value="V"
                        checked={selectedPermissions[permissionName] === "V"}
                        onChange={() =>
                          handlePermissionChange(permissionName, "V")
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        className="radio-button"
                        name={`radioGroup${index}`}
                        value="-"
                        checked={selectedPermissions[permissionName] === "-"}
                        onChange={() =>
                          handlePermissionChange(permissionName, "-")
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default RolesTableModal;
