import axios from "axios";

const BACKEND_URL =
  "https://dev2.4pay.ca/sendit/www/php/Workflows/services.php?output=json";

// export const getUsers = async () => {
//   try {
//     const data = JSON.stringify({
//       svc: "app_2003",
//       pid: "ListCustomerByPrograms",
//       dat: {
//         location: "",
//         franchiseeid: "117",
//         firstname: "",
//         lastname: "",
//         phoneno: "",
//         cityname: "",
//         stateid: "",
//         countryid: "",
//         other1: "",
//         other2: "",
//         other3: "",
//         usertype: "0",
//         startuserid: "0",
//         limit: "0",
//       },
//     });

//     const config = {
//       method: "post",
//       url: BACKEND_URL,
//       headers: {
//         "Content-Type": "application/json",
//         // Cookie: "PHPSESSID=rvrlpdaj6v419pl7op1p8j1o0t",
//         // body: data,
//       },
//       data: data,
//     };

//     const response = await axios(config);
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const login = async (username, password) => {
  console.log(username, password);
  try {
    const data = JSON.stringify({
      svc: "crm_login",
      pid: "MerchantLogin",
      dat: {
        location: "",
        username: username,
        password: password,
        // pin: "0",
        // authtype: "1",
      },
    });

    const config = {
      method: "post",
      url: BACKEND_URL,
      headers: {
        "Content-Type": "application/json",
        // Cookie: "PHPSESSID=rvrlpdaj6v419pl7op1p8j1o0t",
        // body: data,
      },
      data: data,
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
