import React, { useState, useEffect } from "react";
import "./CustomerProfile.scss";
import UserFace from "../../images/user.png";
import Camera from "../../images/camera-outline.svg";
import Flag from "react-world-flags";
import {
  getUserDetails,
  editUserDetails,
  setUserPassword,
  getUsers,
  PictureNew,
} from "../../util/API/customers";
import { useSelector, useDispatch } from "react-redux";
import { getUserList } from "../../store/redux/users";

function CustomerProfile({ selectedUser }) {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephoneno: "",
    dateofbirth: "",
    username: "",
    password: "",
    newpassword: "",
    dateAdded: "",
    error: "",
    photo: "",
    base64Image: "",
  });
  const [updated, setUpdated] = useState("");

  const dispatch = useDispatch();

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
        telephoneno: userDetails.User.contactPhoneNo,
        dateofbirth: userDetails.User.dateofbirth,
        username: userDetails.Useremailaccount.emailAccount,
        password: "",
        newpassword: "",
        dateAdded: userDetails.User.dateAdded,
        photo:
          "https://dev2.4pay.ca/ncsreve/img/pics/" + userDetails.User.photo,
      });
    }
    if (selectedUser) getUserData();
  }, [selectedUser]);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      let reader = new FileReader();

      reader.onload = (e) => {
        setUserData({
          ...userData,
          photo: URL.createObjectURL(img),
          base64Image: e.target.result, // Store the base64 representation of the image
        });
      };

      reader.readAsDataURL(img);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserData({
      ...userData,
      error: "",
    });
    const listData = Object.keys(userData)
      .filter(
        (key) =>
          key !== "dateAdded" &&
          key !== "username" &&
          key !== "email" &&
          key !== "password" &&
          key !== "newpassword" &&
          key !== "error" &&
          key !== "photo" &&
          key !== "base64Image" &&
          userData[key]
      ) // Exclude dateAdded and keys with empty or falsy values
      .map((key) => `${key}|${userData[key]}`)
      .join("/");

    if (userData.base64Image !== "") {
      const pictureNewResponse = await PictureNew(
        selectedUser,
        userData.base64Image
      );
      console.log(pictureNewResponse);
    }

    //updatingh user fields
    const updatedDetails = await editUserDetails(selectedUser, listData);
    console.log(updatedDetails);

    if (updatedDetails.payload.callStatus == 1) {
      let userList = await getUsers();
      console.log(userList);
      dispatch(getUserList({ users: userList }));
    }

    // Updating password if password was passed
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
        const response = await setUserPassword(
          userData.password,
          userData.email
        );
        console.log(response);
        setUserData({
          ...userData,
          error: "",
        });
      } else {
        setUserData({
          ...userData,
          error:
            "Password must be at least 9 characters and contain both letters and numbers.",
        });
      }
    }

    //Updating user image if an image was uploaded
  };

  return (
    <div className="customer-porfile-container">
      <div className="customer-photos">
        <div className="bottom-title">Customer Details</div>
        <div className="customer-photo-container">
          <div>
            <img
              className="user-profile"
              src={
                userData.photo == "https://dev2.4pay.ca/ncsreve/img/pics/" ||
                userData.photo == ""
                  ? UserFace
                  : userData.photo
              }
            />
            {/* <img
              className="user-profile"
              src={
                userData.photo == ""
                  ? UserFace
                  : "https://dev2.4pay.ca/ncsreve/img/pics/" + userData.photo
              }
            /> */}
          </div>
          <button>
            <label
              htmlFor="upload-input"
              style={{ cursor: "pointer", display: "block", width: "100%" }}
            >
              <div className="user-upload-button">
                <input
                  type="file"
                  id="upload-input"
                  name="myImage"
                  style={{ display: "none" }}
                  onChange={onImageChange}
                />
                <div style={{ flex: 1 }}>{/* <img src={Camera} /> */}</div>
                <div style={{ flex: 2 }}>Upload</div>
                <div style={{ flex: 1 }}>
                  <img src={Camera} alt="Camera" />
                </div>
              </div>
            </label>
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
              disabled={true}
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
                name="telephoneno"
                value={userData.telephoneno}
                onChange={handleChange}
                className="phone-input"
              />
            </div>
            <div className="customer-input-label">Phone</div>
          </div>
          <div className="customer-inputs mt-14">
            <input
              type="text"
              name="dateofbirth"
              value={userData.dateofbirth}
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
              disabled={true}
            />
            <div className="customer-input-label">New Password</div>
          </div>
          <div className="customer-inputs mt-14">
            <input
              type="password"
              name="newpassword"
              value={userData.newpassword}
              onChange={handleChange}
            />
            <div className="customer-input-label">Re-enter New Password</div>
          </div>
          <div className="minimum-password">
            Minimum 9 characters, 1 letter, 1 number
          </div>
          <div className="errorText">{userData.error}</div>

          <div className="customerdetail-btn">
            <button onClick={handleSubmit}> Change</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CustomerProfile;
