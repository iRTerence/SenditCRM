import React, { useEffect, useState } from "react";
import { getUsers } from "../../util/http";
import handleChange from "../../hooks/handleChange";
// import { login } from "../../util/http";
import { useAuth } from "../../store/context/auth";
import { useNavigate, useLocation } from "react-router-dom";
import userImage from "../../images/login-user.svg";
import logo from "../../images/SenditLogo.svg";
import { login } from "../../util/http";
import { useDispatch } from "react-redux";
import { setLoggedInUser } from "../../store/redux/login";

import "./Login.scss";

function Login() {
  const [userName, setUsername, usernameReset] = handleChange("");
  const [password, setPassword, passwordReset] = handleChange("");
  const [loggedIn, setLoggedIn] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/dashboard";
  const dispatch = useDispatch();

  async function handleFormSubmit(e) {
    e.preventDefault();
    // navigate("/dashboard");
    let response = await login(userName, password);
    let callStatus = response.callStatus;
    console.log(response);
    if (callStatus == 1) {
      dispatch(setLoggedInUser(response));
      setLoggedIn(false);
      navigate(redirectPath, { replace: true });
      localStorage.setItem("user", JSON.stringify(response));
    } else {
      setLoggedIn(true);
      console.log("failed");
    }
    // setUserData(response);
    // auth.login(response);
  }

  function validateForm() {
    return userName.length > 0 && password.length > 0;
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="left-box">
          <div class="login-user-image">
            <img src={userImage}></img>
          </div>
          <div className="login-title">
            ADMIN <br />
            PORTAL
          </div>
          <div className="login-subtitle">
            Please use your credentials to login. <br />
            If you are not a member, please register.
          </div>
        </div>
        <div className="right-box">
          <div className="sendit-logo">
            <img src={logo}></img>
          </div>

          <div className="login-label">Login</div>

          <form onSubmit={handleFormSubmit}>
            <div>
              <input
                className="login-input"
                name="username"
                value={userName}
                onChange={setUsername}
                placeholder="E-mail"
              ></input>
            </div>
            <div>
              <input
                className="login-input"
                name="username"
                value={password}
                onChange={setPassword}
                placeholder="Password"
                type="password"
              ></input>
            </div>
            {loggedIn && <div id="failed-login">Unauthorized Access</div>}

            <div className="login-button-container">
              {/* <div>Forgot Password?</div> */}
              <div></div>
              <div>
                <button className="login-button">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
