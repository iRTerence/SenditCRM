import React from "react";
import "./FooterNotifications.scss";
import close from "../../images/close.svg";

function FooterNotifications() {
  return (
    <div className="notifications-container">
      <div className="pushNotifcation">
        <p>Push Notifcations</p>
        <img src={close} className="closeButton" />
      </div>
      <div className="errorNotifications">
        <p>Error Message</p>
      </div>
      <div className="footerActiveUser">
        <div>
          <div className="active-user-header">Active User</div>
          <div className="active-user-count">56</div>
        </div>
      </div>
    </div>
  );
}

export default FooterNotifications;
