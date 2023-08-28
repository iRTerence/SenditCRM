import axios from "axios";

const BACKEND_URL =
  "https://dev2.4pay.ca/sendit/www/php/Workflows/services.php?output=json";

export const DocumentRead = async (docid) => {
  try {
    console.log(docid);
    const data = JSON.stringify({
      svc: "KYC",
      pid: "DocumentRead",
      dat: {
        docid: docid,
        // list: list,
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

export const DocumentStatus = async (userid, list) => {
  try {
    console.log(list);
    const data = JSON.stringify({
      svc: "KYC",
      pid: "UpdateConsumerProfile",
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
