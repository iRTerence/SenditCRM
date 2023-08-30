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

  return (
    <table className="full-width-table">
      <thead>
        <tr className="header-row">
          <th>#</th>
          <th>Date/Time</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        {smsData.record &&
          smsData.record.length &&
          smsData.record.map((item, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{item.smslog.dt}</td>
              <td>{item.smslog.phonetxt}</td>
            </tr>
          ))}
        {smsData.record && smsData != false && !smsData.record.length && (
          <tr key={1}>
            <td>{1}</td>
            <td>{smsData.record.smslog.dt}</td>
            <td>{smsData.record.smslog.phonetxt}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default CommunicationTab;
