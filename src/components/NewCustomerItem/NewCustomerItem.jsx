import React from "react";
import "./NewCustomerItem.scss";
import Darth from "../../images/darth.jpg";
import ReactCountryFlag from "react-country-flag";

function NewCustomerItem() {
  return (
    <div className="new-customer-container">
      <img src={Darth} className="new-customer-photo" />
      <div className="new-customer-name">Darth Vader</div>
      <ReactCountryFlag
        countryCode="US"
        svg
        style={{
          width: "2em",
          height: "2em",
          marginLeft: "2rem",
        }}
        title="US"
      />
      <div className="joined-text">Joined</div>
      <div className="joined-date">Jun 20/2023</div>
    </div>
  );
}

export default NewCustomerItem;
