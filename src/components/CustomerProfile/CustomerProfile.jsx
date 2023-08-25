import React, { useState, useEffect } from "react";
import "./CustomerProfile.scss";
import UserFace from "../../images/userface.jpg";
import Camera from "../../images/camera-outline.svg";
import Flag from "react-world-flags";
import { getUserDetails } from "../../util/API/customers";

function CustomerProfile({ selectedUser }) {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    username: "",
    password: "",
    newpassword: "",
    dateAdded: "",
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setUserData({
      ...userData,
      [evt.target.name]: value,
    });
  }

  useEffect(() => {
    async function getUserData() {
      const userDetails = await getUserDetails(selectedUser);
      console.log(userDetails);

      setUserData({
        firstName: userDetails.User.firstName,
        lastName: userDetails.User.lastName,
        email: userDetails.Useremailaccount.emailAccount,
        phone: userDetails.User.contactPhoneNo,
        birthDate: userDetails.User.dateofbirth,
        username: userDetails.User.telephoneno,
        password: "",
        newpassword: "",
        dateAdded: userDetails.User.dateAdded,
      });
    }
    if (selectedUser) getUserData();
  }, [selectedUser]);

  return (
    <div className="customer-porfile-container">
      <div className="customer-photos">
        <div className="bottom-title">Customer Details</div>
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
          <div className="registration-date">
            {userData.dateAdded.slice(0, 10)}
          </div>
        </div>
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
                <Flag code={"US"} height="15" fallback={<span>Unknown</span>} />
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
  );
}

export default CustomerProfile;
