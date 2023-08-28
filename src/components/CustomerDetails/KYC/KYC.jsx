import React, { useState } from "react";
import "./KYC.scss";
import { DocumentRead } from "../../../util/API/KYC";

function KYC({ selectedUser, selectedUserData }) {
  const [selectedImage, setSelectedImage] = useState(null);
  console.log(selectedUserData);

  const personalIdImage = selectedUserData.User.other1;
  const addressImage = selectedUserData.User.other2;
  const selfieImage = selectedUserData.User.other3;

  const readDocument = async (docid) => {
    let response = await DocumentRead(docid);
    let doctext = response.ServiceData.doctext;
    console.log(doctext);
    setSelectedImage(doctext);
    console.log(response);
  };

  const extractedSections = (str) => {
    const match = str.match(/^(\d+-[A-Z0-9]+)-\d+-\d+$/);
    return match ? match[1] : null;
  };

  return (
    <div>
      KYC
      <div>
        <div onClick={() => readDocument(extractedSections(personalIdImage))}>
          Personal Id
        </div>
        <div onClick={() => readDocument(extractedSections(addressImage))}>
          Address
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
