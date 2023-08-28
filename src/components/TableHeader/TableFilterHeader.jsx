import React, { useState, useEffect } from "react";
import Search from "../../images/search.svg";
import "./TableFilterHeader.scss";

function TableFilterHeader({ handleSearch, handleOpen }) {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setSearchText(inputText);
    handleSearch(inputText);
  };

  useEffect(() => {
    handleSearch("");
  }, []);

  return (
    <div className="options-container">
      <div className="search-container">
        <input
          placeholder="Search Customer"
          value={searchText}
          onChange={handleInputChange}
        />
        <img src={Search} alt="Search Icon" />
      </div>

      <button className="new-user-button" onClick={handleOpen}>
        <p>Add New</p>
        <div>+</div>
      </button>
    </div>
  );
}

export default TableFilterHeader;
