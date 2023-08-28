import React, { useState } from "react";
import "./KYC.scss";
import { DocumentRead, DocumentStatus } from "../../../util/API/KYC";
import { getUserDetails } from "../../../util/API/customers";

function KYC({ selectedUser, selectedUserData, setSelectedUserData }) {
  const [selectedImage, setSelectedImage] = useState(null);

  let statusKey = {
    1: "Pending",
    2: "Accepted",
    3: "Rejected",
  };

  console.log(selectedUserData);

  const personalIdImage = selectedUserData.User.other1;
  const addressImage = selectedUserData.User.other2;
  const selfieImage = selectedUserData.User.other3;

  const readDocument = async (docid) => {
    let response = await DocumentRead(docid);
    let doctext = response.ServiceData.doctext;
    setSelectedImage(doctext);
    console.log(response);
  };

  const extractedSections = (str) => {
    const match = str.match(/^(\d+-[A-Z0-9]+)-\d+-\d+$/);
    return match ? match[1] : null;
  };

  const setImageStatus = async (dockey, statusKey, other) => {
    console.log(dockey, statusKey);
    let status = dockey.split("-");
    status[2] = statusKey;
    let newDocKey = status.join("-");
    let list;
    if (statusKey == 2) {
      list = `${other}|${newDocKey}/profilestatus|2`;
    } else {
      list = `${other}|${newDocKey}`;
    }
    console.log(list);

    let response = await DocumentStatus(selectedUser, list);

    console.log(response.callStatus);
    if (response.callStatus == 1) {
      const userDetails = await getUserDetails(selectedUser);
      setSelectedUserData(userDetails);
      console.log(userDetails);
    }
  };

  let kycStatus = statusKey[addressImage.split("-")[2]];
  console.log(kycStatus);

  return (
    <div>
      KYC
      <div>
        <div onClick={() => readDocument(extractedSections(personalIdImage))}>
          Personal Id
        </div>
        <div style={{ display: "flex" }}>
          <div onClick={() => readDocument(extractedSections(addressImage))}>
            Address
          </div>
          <button
            onClick={() =>
              setImageStatus(selectedUserData.User.other2, 1, "other2")
            }
          >
            Pending
          </button>
          <button
            onClick={() =>
              setImageStatus(selectedUserData.User.other2, 2, "other2")
            }
          >
            Accept
          </button>
          <button
            onClick={() =>
              setImageStatus(selectedUserData.User.other2, 3, "other2")
            }
          >
            Reject
          </button>
          <div>status: {kycStatus}</div>
        </div>

        <div onClick={() => readDocument(extractedSections(selfieImage))}>
          Selfie
        </div>
      </div>
      <div>{selectedImage && <img src={selectedImage} />}</div>
    </div>
  );
}

export default KYC;
