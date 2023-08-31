import React from "react";
import "./Batch.scss";
import BatchTabs from "../../components/BatchTabs/BatchTabs";

function Batch() {
  return (
    <div className="page-container roles-container batch-container">
      <div className="header-container">
        <div className="page-title">Batch Services</div>
      </div>
      <div className="batch-tabs">
        <BatchTabs />
      </div>
    </div>
  );
}

export default Batch;
