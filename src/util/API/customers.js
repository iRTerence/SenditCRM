import axios from "axios";

const BACKEND_URL =
  "https://dev2.4pay.ca/sendit/www/php/Workflows/services.php?output=json";

export const getUsers = async () => {
  try {
    const data = JSON.stringify({
      svc: "crm_users",
      pid: "ListCustomer",
      dat: {
        location: "",
        franchiseeid: "119",
        firstname: "",
        lastname: "",
        phoneno: "",
        cityname: "",
        stateid: "",
        countryid: "",
        other1: "",
        other2: "",
        other3: "",
        usertype: "0",
        startuserid: "0",
        limit: "0",
      },
    });

    const config = {
      method: "post",
      url: BACKEND_URL,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios(config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserDetails = async (userid) => {
  try {
    const data = JSON.stringify({
      svc: "crm_users",
      pid: "GetCustomerWithID",
      dat: {
        location: "",
        userid: userid,
      },
    });

    const config = {
      method: "post",
      url: BACKEND_URL,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios(config);
    return response.data.payload.body;
  } catch (error) {
    console.log(error);
  }
};

export const editUserDetails = async (userid, list) => {
  try {
    console.log(userid, list);
    const data = JSON.stringify({
      svc: "crm_users",
      pid: "EditUserFieldsWithoutPIN",
      dat: {
        userid: userid,
        list: list,
      },
    });

    const config = {
      method: "post",
      url: BACKEND_URL,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const CreateUser = async (username, password, email, phoneno, dob) => {
  try {
    // console.log(userid, list);
    const data = JSON.stringify({
      svc: "crm_users",
      pid: "EditUserFieldsWithoutPIN",
      dat: {
        username: email,
        password: password,
        email: email,
        phoneno: phoneno,
        dob: dob,
      },
    });

    const config = {
      method: "post",
      url: BACKEND_URL,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const setUserPassword = async (password, email) => {
  try {
    // console.log(userid, list);
    const data = JSON.stringify({
      svc: "crm_users",
      pid: "setUserPassword",
      dat: {
        username: email,
        password: password,
      },
    });

    const config = {
      method: "post",
      url: BACKEND_URL,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
