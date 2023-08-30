import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import "./CreateUserModal.scss";
import CustomerProfile from "../CustomerProfile/CustomerProfile";
import UserFace from "../../images/user.png";
import Camera from "../../images/camera-outline.svg";
import Flag from "react-world-flags";
import { NewUser } from "../../util/API/customers";
import { countries } from "../../constants/countrylist";

function CreateUserModal({ open, handleClose }) {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    idnumber: "",
    password: "",
    newpassword: "",
    areaCode: "",
    city: "",
    country: "",
    zip: "",
    address: "",
  });
  const [userImage, setUserImage] = useState("");
  const [userBase64, setUserBase64] = useState("");
  const [error, setError] = useState("");

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      let reader = new FileReader();

      reader.onload = (e) => {
        setUserImage(URL.createObjectURL(img));
        setUserBase64(e.target.result);
      };

      reader.readAsDataURL(img);
    }
  };

  function handleChange(evt) {
    const value = evt.target.value;
    setUserData({
      ...userData,
      [evt.target.name]: value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isEmptyField = Object.values(userData).some((value) => value === "");

    if (isEmptyField) {
      alert("Please fill out all fields.");
      return;
    }

    if (
      userData.password != "" &&
      userData.newpassword != "" &&
      userData.password != userData.newpassword
    ) {
      setError("Passwords do not match, please review.");
    }

    if (
      userData.password != "" &&
      userData.newpassword != "" &&
      userData.password == userData.newpassword
    ) {
      if (
        userData.password.length >= 9 &&
        /\d/.test(userData.password) &&
        /[a-zA-Z]/.test(userData.password)
      ) {
        const response = await NewUser(
          userData.email,
          userData.firstName,
          userData.lastName,
          userData.password,
          userData.country,
          userData.city,
          userData.phone,
          userData.address,
          userData.zip,
          userData.birthDate,
          userData.idnumber
        );
        console.log(response);
        setError("");
      } else {
        console.log("stuff");
        setError(
          "Password must be at least 9 characters and contain both letters and numbers."
        );
      }
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="newcustomer-container"
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
                  <img
                    className="user-profile"
                    src={userImage ? userImage : UserFace}
                  />
                </div>
                <button>
                  <label
                    htmlFor="newuser-photop"
                    style={{
                      cursor: "pointer",
                      display: "block",
                      width: "100%",
                    }}
                  >
                    <div className="user-upload-button">
                      <input
                        type="file"
                        id="newuser-photop"
                        name="myImage"
                        style={{ display: "none" }}
                        onChange={onImageChange}
                      />
                      <div style={{ flex: 1 }}>
                        {/* <img src={Camera} /> */}
                      </div>
                      <div style={{ flex: 2 }}>Upload</div>
                      <div style={{ flex: 1 }}>
                        <img src={Camera} alt="Camera" />
                      </div>
                    </div>
                  </label>
                </button>
              </div>
            </div>
            <div className="customer-details">
              <form onSubmit={handleSubmit}>
                <div className="signup-row">
                  <div className="customer-inputs">
                    <input
                      type="text"
                      name="firstName"
                      value={userData.firstName}
                      onChange={handleChange}
                    />
                    <div className="customer-input-label">First Name</div>
                  </div>
                  <div className="customer-inputs">
                    <input
                      type="text"
                      name="lastName"
                      value={userData.lastName}
                      onChange={handleChange}
                    />
                    <div className="customer-input-label">Last Name</div>
                  </div>
                </div>
                <div className="signup-row">
                  <div className="customer-inputs mt-14">
                    <select
                      name="areaCode"
                      value={userData.areaCode}
                      onChange={handleChange}
                      className="area-code-select"
                    >
                      <option value="" disabled></option>
                      {countries.map((country) => (
                        <option key={country.id} value={country.areaCode}>
                          {country.country} ({country.areaCode})
                        </option>
                      ))}
                    </select>
                    <div className="customer-input-label">Area Code</div>
                  </div>
                  <div className="customer-inputs mt-14">
                    <div className="phone-flag-container">
                      {/* <div className="phone-flag">
                      <Flag
                        code={"US"}
                        height="15"
                        fallback={<span>Unknown</span>}
                      />
                    </div>
                    <p>|</p> */}
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
                </div>
                <div className="signup-row">
                  <div className="customer-inputs mt-14">
                    <input
                      name="address"
                      value={userData.address}
                      onChange={handleChange}
                      type="text"
                    />
                    <div className="customer-input-label">Address</div>
                  </div>
                  <div className="customer-inputs mt-14">
                    <input
                      type="text"
                      name="city"
                      value={userData.city}
                      onChange={handleChange}
                    />
                    <div className="customer-input-label">City</div>
                  </div>
                </div>

                <div className="signup-row">
                  <div className="customer-inputs mt-14">
                    <select
                      name="country"
                      value={userData.country}
                      onChange={handleChange}
                      className="area-code-select"
                    >
                      <option value="" disabled></option>
                      {countries.map((country) => (
                        <option key={country.id} value={country.flag}>
                          {country.country}
                        </option>
                      ))}
                    </select>
                    <div className="customer-input-label">Country</div>
                  </div>
                  <div className="customer-inputs mt-14">
                    <input
                      type="text"
                      name="zip"
                      value={userData.zip}
                      onChange={handleChange}
                    />
                    <div className="customer-input-label">Zip</div>
                  </div>
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
                <div className="signup-row">
                  <div className="customer-inputs mt-14">
                    <input
                      name="birthDate"
                      value={userData.birthDate}
                      onChange={handleChange}
                      placeholder="YYYY-MM-DD"
                      type="date"
                    />
                    <div className="customer-input-label">Birth Date</div>
                  </div>
                  <div className="customer-inputs mt-14">
                    <input
                      type="text"
                      name="idnumber"
                      value={userData.idnumber}
                      onChange={handleChange}
                    />
                    <div className="customer-input-label">ID Number</div>
                  </div>
                </div>

                <div className="signup-row">
                  <div className="customer-inputs mt-14">
                    <input
                      type="password"
                      name="password"
                      value={userData.password}
                      onChange={handleChange}
                    />
                    <div className="customer-input-label">Password</div>
                  </div>
                  <div className="customer-inputs mt-14">
                    <input
                      type="password"
                      name="newpassword"
                      value={userData.newpassword}
                      onChange={handleChange}
                    />
                    <div className="customer-input-label">Password</div>
                  </div>
                </div>

                <div className="minimum-password">
                  Minimum 9 characters, 1 letter, and 1 number
                  <div className="new-user-error">{error}</div>
                </div>

                <div className="customerdetail-btn">
                  <button> Add User</button>
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
