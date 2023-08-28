import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import "./CreateUserModal.scss";
import CustomerProfile from "../CustomerProfile/CustomerProfile";
import UserFace from "../../images/userface.jpg";
import Camera from "../../images/camera-outline.svg";
import Flag from "react-world-flags";

function CreateUserModal({ open, handleClose }) {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    username: "",
    password: "",
    newpassword: "",
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setUserData({
      ...userData,
      [evt.target.name]: value,
    });
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal-container"
        style={{
          position: "fixed",
          //   transform: "translate(116px, 96px)",
          zIndex: 9999,
          display: "flex",
          //   alignItems: "center",
          //   justifyContent: "center",
          //   width: "80%",
        }}
      >
        <div className="centered-content">
          <div className="modal-title">User Profile Info</div>
          <div className="customer-porfile-container-modal">
            <div className="customer-photos">
              <div className="customer-photo-container">
                <div>
                  <img className="user-profile" src={UserFace} />
                </div>
                <button>
                  <div className="user-upload-button">
                    <div style={{ flex: 1 }}>{/* <img src={Camera} /> */}</div>
                    <div style={{ flex: 2 }}>Upload</div>
                    <div style={{ flex: 1 }}>
                      <img src={Camera} />
                    </div>
                  </div>
                </button>
              </div>
              <div className="registration-date-container">
                <div className="registration-label">Registration Date</div>
                <div className="registration-date">08.05.2023</div>
              </div>
              <div className="registration-date-container">
                <div className="registration-label">Last Logged In Date</div>
                <div className="registration-date">08.05.2023</div>
              </div>
              <div className="logged-in-text">Logged In</div>
            </div>
            <div className="customer-details">
              <form>
                <div className="customer-inputs">
                  <input
                    type="text"
                    name="firstName"
                    value={userData.firstName}
                    onChange={handleChange}
                  />
                  <div className="customer-input-label">First Name</div>
                </div>
                <div className="customer-inputs mt-14">
                  <input
                    type="text"
                    name="lastName"
                    value={userData.lastName}
                    onChange={handleChange}
                  />
                  <div className="customer-input-label">Last Name</div>
                </div>
                <div className="customer-inputs mt-14">
                  <input
                    type="text"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    className="input-email"
                  />
                  <div className="customer-input-label">Email</div>
                </div>
                <div className="customer-inputs mt-14">
                  <div className="phone-flag-container">
                    <div className="phone-flag">
                      <Flag
                        code={"US"}
                        height="15"
                        fallback={<span>Unknown</span>}
                      />
                    </div>
                    <p>|</p>
                    <input
                      type="text"
                      name="phone"
                      value={userData.phone}
                      onChange={handleChange}
                      className="phone-input"
                    />
                  </div>
                  <div className="customer-input-label">Phone</div>
                </div>
                <div className="customer-inputs mt-14">
                  <input
                    type="text"
                    name="birthDate"
                    value={userData.birthDate}
                    onChange={handleChange}
                  />
                  <div className="customer-input-label">Birth Date</div>
                </div>
                <div className="customer-inputs mt-14">
                  <input
                    type="text"
                    name="username"
                    value={userData.username}
                    onChange={handleChange}
                  />
                  <div className="customer-input-label">Username</div>
                </div>

                <div className="role-container">
                  <div className="manager-button">Manager</div>
                  <div className="admin-button role-disabled">Admin</div>
                  <div className="auditor-button role-disabled">Auditor</div>
                </div>

                <div className="customer-inputs mt-14">
                  <input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                  />
                  <div className="customer-input-label">Old Password</div>
                </div>
                <div className="customer-inputs mt-14">
                  <input
                    type="password"
                    name="newpassword"
                    value={userData.newpassword}
                    onChange={handleChange}
                  />
                  <div className="customer-input-label">New Password</div>
                </div>
                <div className="minimum-password">Minimum 6 characters</div>

                <div className="customerdetail-btn">
                  <button> Change</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CreateUserModal;
