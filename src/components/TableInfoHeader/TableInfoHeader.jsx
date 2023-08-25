import React from "react";
import "./TableInfoHeader.scss";
import Search from "../../images/search.svg";
import Filter from "../../images/filter-add.svg";

function TableInfoHeader({ count }) {
  return (
    <div className="table-info-header">
      <p>Total: {count ? count : <>71</>} Customers</p>
      <div className="table-options">
        <select name="" id="date-options">
          <option value="date">Sort By: Date Created</option>
          <option value="newest">Sort By: Newest User</option>
          <option value="oldest">Sort By: Oldest User</option>
        </select>

        <button>
          <div>Filter</div>
          <img alt="Filter Icon" src={Filter} />
        </button>
      </div>
    </div>
  );
}

export default TableInfoHeader;
