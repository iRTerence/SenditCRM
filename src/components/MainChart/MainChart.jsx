import "./MainChart.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const MainChart = () => {
  return (
    <div className="mainChart">
      <div className="top">
        <h3 className="title">Total Revenue</h3>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="chartInfo">
          <CircularProgressbar value={40} text={"40%"} strokeWidth={4} />
        </div>
        <p className="title">Total Sales Made Today</p>
        <p className="amount">$1200</p>
        <p className="desc">
          The revenue is calculated based on proccessed transaction and does not
          including any pending transactions
        </p>
        <div className="revenueSummary">
          <div className="revenuedesc">
            <div className="revenueTitle">Target</div>
            <div className="revenueResult positive">
              <KeyboardArrowUpIcon fontSize="small" />
              $31.6k
            </div>
          </div>
          <div className="revenuedesc">
            <div className="revenueTitle">Last Week</div>
            <div className="revenueResult negative">
              <KeyboardArrowDownIcon fontSize="small" />
              $12.1k
            </div>
          </div>
          <div className="revenuedesc">
            <div className="revenueTitle">Last Month</div>
            <div className="revenueResult positive">
              <KeyboardArrowUpIcon fontSize="small" />
              $35.1k
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainChart;
