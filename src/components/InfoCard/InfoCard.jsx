import React from "react";
import "./InfoCard.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";

const Card = ({ image, title, number }) => {
  return (
    <div className="infoCard">
      <div>
        <img src={image}></img>
        <div className="infoCard-title">{title}</div>
        <div className="infoCard-number">{number}</div>
      </div>
    </div>
  );
};

export default Card;
