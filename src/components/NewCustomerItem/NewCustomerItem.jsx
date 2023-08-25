import React from "react";
import "./NewCustomerItem.scss";
import Darth from "../../images/darth.jpg";
import Flag from "react-world-flags";

function NewCustomerItem({
  dateJoined,
  firstName,
  lastName,
  picture,
  country,
}) {
  return (
    <div className="new-customer-container">
      <img src={Darth} className="new-customer-photo" />
      <div className="name-flag-container">
        <div className="new-customer-name">
          {firstName} {lastName}
        </div>

        <div>
          <Flag code={country} height="18" fallback={<span>Unknown</span>} />
        </div>
      </div>

      <div className="joined-text">Joined</div>
      <div className="joined-date">Jun 20/2023</div>
    </div>
  );
}

export default NewCustomerItem;
