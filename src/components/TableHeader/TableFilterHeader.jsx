import React from "react";
import Search from "../../images/search.svg";
import "./TableFilterHeader.scss";

function TableFilterHeader() {
  return (
    <div className="options-container">
      <div className="search-container">
        <input placeholder="Search Customer" />
        <img src={Search} alt="Search Icon" />
      </div>

      <button className="new-user-button">
        <p>Add New</p>
        <div>+</div>
      </button>
    </div>
  );
}

export default TableFilterHeader;
