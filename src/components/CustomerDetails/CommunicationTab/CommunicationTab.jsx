import React, { useEffect, useState } from "react";
import "./CommunicationTab.scss";
import {
  getCardholderemessages,
  getCardholdermessages,
} from "../../../util/API/customers";

function CommunicationTab({
  selectedUser,
  selectedUserData,
  setSelectedUserData,
}) {
  const [emailData, setEmailData] = useState([]);
  const [smsData, setSMSData] = useState([]);

  function decodeAndFormatHTML(htmlCode) {
    const decodedHTML = new DOMParser().parseFromString(htmlCode, "text/html")
      .documentElement.textContent;

    const parser = new DOMParser();
    const formattedDoc = parser.parseFromString(decodedHTML, "text/html");

    const formattedHTML = new XMLSerializer().serializeToString(formattedDoc);

    return formattedHTML;
  }

  useEffect(() => {
    const getMessages = async () => {
      let smsMessages = await getCardholdermessages(
        selectedUserData.User.telephoneno
      );
      let emailMessages = await getCardholderemessages(
        selectedUserData.Useremailaccount.emailAccount
      );
      console.log(smsMessages);
      if (smsMessages.callStatus == 1) {
        setSMSData(smsMessages.payload);
      }
      setEmailData(emailMessages.payload);
    };

    getMessages();
  }, [selectedUser]);

  const setUserData = () => {};

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Date/Time</th>
            <th>Message</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default CommunicationTab;
