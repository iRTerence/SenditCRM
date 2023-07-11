import React, { useEffect, useState } from "react";
import { getUsers } from "../../util/http";
import handleChange from "../../hooks/handleChange";
import { login } from "../../util/http";
import { useAuth } from "../../store/context/auth";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
  const [userName, setUsername, usernameReset] = handleChange("");
  const [password, setPassword, passwordReset] = handleChange("");
  const [userData, setUserData] = useState();
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/dashboard";

  async function handleFormSubmit(e) {
    e.preventDefault();
    let response = await login(userName, password);
    setUserData(response);
    auth.login(response);
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUserData(foundUser);
      auth.login(foundUser);
      navigate(redirectPath, { replace: true });
    }

    if (userData != undefined) {
      if (userData.callStatus == 0) {
        console.log("bad login");
        console.log(auth.user);
      } else {
        console.log("Logged In!!!");
        console.log(auth.user.merchant);
        localStorage.setItem("user", JSON.stringify(auth.user.merchant));
        navigate(redirectPath, { replace: true });
      }
    }
  }, [userData]);

  function validateForm() {
    return userName.length > 0 && password.length > 0;
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username">
          User Name {userData == undefined ? "stuff here" : "got data"}
        </label>
        <input name="username" value={userName} onChange={setUsername}></input>
        <label htmlFor="username">Password</label>
        <input name="username" value={password} onChange={setPassword}></input>
        <button disabled={!validateForm()}>Submit!</button>
      </form>

      {auth.user && auth.user.callStatus == 0 ? (
        <div>Please enter a valid login</div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Login;
