import React from "react";
import "./InfoCard.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";

const Card = ({ type }) => {
  let cardData;
  const amount = 25;
  const percent = 23;

  switch (type) {
    case "sales":
      cardData = {
        title: "SALES",
        isPercent: true,
        link: "View all sales",
        icon: (
          <AttachMoneyOutlinedIcon
            className="cardIcon"
            style={{
              backgroundColor: "lightgreen",
              color: "green",
            }}
          />
        ),
      };
      break;
    case "earnings":
      cardData = {
        title: "EARNINGS",
        isPercent: true,
        link: "View earnings report",
        icon: (
          <SavingsOutlinedIcon
            className="cardIcon"
            style={{
              backgroundColor: "lightcoral",
              color: "red",
            }}
          />
        ),
      };
      break;
    case "balance":
      cardData = {
        title: "BALANCE",
        isPercent: true,
        link: "View balance",
        icon: (
          <AccountBalanceOutlinedIcon
            className="cardIcon"
            style={{
              backgroundColor: "lightblue",
              color: "blue",
            }}
          />
        ),
      };
      break;
    case "loans":
      cardData = {
        title: "LOANS",
        isPercent: true,
        link: "View all loans",
        icon: (
          <PointOfSaleOutlinedIcon
            className="cardIcon"
            style={{
              backgroundColor: "purple",
              color: "pink",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="infoCard">
      <div className="left">
        <span className="title">{cardData.title}</span>
        <span className="counter">$ {amount}</span>
        <span className="link">{cardData.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {percent}%
        </div>
        {cardData.icon}
      </div>
    </div>
  );
};

export default Card;
