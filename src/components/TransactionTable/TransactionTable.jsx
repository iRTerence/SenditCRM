import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import EditIcon from "../../images/edit-2.svg";
import "./TransactionTable.scss";
import Check from "../../images/table_check.svg";
import Cancelled from "../../images/table-close.svg";
import Pending from "../../images/table-pending.svg";

function CustomerTable(props) {
  const theme = useTheme();
  const { page, onPageChange, pageNumbers } = props;

  const handlePageClick = (event, pageNumber) => {
    onPageChange(event, pageNumber);
  };

  return (
    <Box
      sx={{
        flexShrink: 0,
        ml: 2.5,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <IconButton
          onClick={(event) => handlePageClick(event, page - 1)}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <>
              <KeyboardArrowLeft />
              <span className="arrowLabelStyle">Previous</span>
            </>
          )}
        </IconButton>
      </div>
      <div>
        {pageNumbers.map((pageNumber, index) => {
          if (pageNumbers.length <= 5) {
            return (
              <span
                key={pageNumber}
                className={`page-number ${
                  pageNumber === page ? "active-page" : ""
                }`}
                onClick={(event) => handlePageClick(event, pageNumber)}
              >
                {pageNumber + 1}
              </span>
            );
          } else if (
            index === 0 ||
            index === pageNumbers.length - 1 ||
            Math.abs(index - page) <= 1
          ) {
            return (
              <span
                key={pageNumber}
                className={`page-number ${
                  pageNumber === page ? "active-page" : ""
                }`}
                onClick={(event) => handlePageClick(event, pageNumber)}
              >
                {pageNumber + 1}
              </span>
            );
          } else if (index === 1 || index === pageNumbers.length - 2) {
            return (
              <span key={pageNumber} className="ellipsis">
                ...
              </span>
            );
          }
          return null;
        })}
      </div>
      <div>
        <IconButton
          onClick={(event) => handlePageClick(event, page + 1)}
          disabled={page === pageNumbers.length - 1}
          aria-label="next page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <>
              <span className="arrowLabelStyle">Next</span>
              <KeyboardArrowRight />
            </>
          )}
        </IconButton>
      </div>
    </Box>
  );
}

const transactionData = [
  {
    id: 1,
    date: "07/15/23 08:30",
    receivingAddress: "QWERTYUIOP123456789...",
    type: "Received",
    status: "pending",
    transactionId: "987654321001",
    userName: "Alice",
    fee: 75,
    amount: 8000,
  },
  {
    id: 2,
    date: "07/14/23 14:20",
    receivingAddress: "ASDFGHJKL567890123...",
    type: "Sent",
    status: "completed",
    transactionId: "123456789002",
    userName: "Bob",
    fee: 150,
    amount: 5000,
  },
  {
    id: 3,
    date: "07/13/23 21:45",
    receivingAddress: "ZXCVBNMASD098765432...",
    type: "Received",
    status: "pending",
    transactionId: "567890123003",
    userName: "Eve",
    fee: 50,
    amount: 15000,
  },
  {
    id: 4,
    date: "07/12/23 12:15",
    receivingAddress: "QAZWSXEDC654321098...",
    type: "Sent",
    status: "pending",
    transactionId: "890123456004",
    userName: "Charlie",
    fee: 80,
    amount: 10000,
  },
  {
    id: 5,
    date: "07/11/23 17:55",
    receivingAddress: "POIUYTREW987654321...",
    type: "Received",
    status: "completed",
    transactionId: "234567890005",
    userName: "David",
    fee: 120,
    amount: 7500,
  },
  {
    id: 6,
    date: "07/10/23 09:10",
    receivingAddress: "LKJHGFDSA234567890...",
    type: "Sent",
    status: "cancelled",
    transactionId: "678901234006",
    userName: "Frank",
    fee: 70,
    amount: 3000,
  },
  {
    id: 7,
    date: "07/09/23 23:25",
    receivingAddress: "MNBVCXZLK123456789...",
    type: "Received",
    status: "completed",
    transactionId: "890123456007",
    userName: "Grace",
    fee: 90,
    amount: 12000,
  },
  {
    id: 8,
    date: "07/08/23 16:40",
    receivingAddress: "UIOPLKJH789012345...",
    type: "Sent",
    status: "pending",
    transactionId: "234567890008",
    userName: "Hank",
    fee: 110,
    amount: 9500,
  },
  {
    id: 9,
    date: "07/07/23 11:05",
    receivingAddress: "EDCRFVTGB456789012...",
    type: "Received",
    status: "cancelled",
    transactionId: "678901234009",
    userName: "Isabel",
    fee: 60,
    amount: 6000,
  },
  {
    id: 10,
    date: "07/06/23 18:50",
    receivingAddress: "YUIOPASDF234567890...",
    type: "Sent",
    status: "completed",
    transactionId: "890123456010",
    userName: "Jack",
    fee: 130,
    amount: 8500,
  },
];

export default function TransactionTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [sorting, setSorting] = useState({
    column: "",
    direction: "asc",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const pageCount = Math.ceil(transactionData.length / rowsPerPage);
  const pageNumbers = Array.from({ length: pageCount }, (_, index) => index);

  const handleSortClick = (column) => {
    if (sorting.column === column) {
      setSorting({
        column,
        direction: sorting.direction === "asc" ? "desc" : "asc",
      });
      transactionData.sort((a, b) => {
        const valueA =
          column === "fee" || column === "amount"
            ? a[column]
            : a[column].toUpperCase();
        const valueB =
          column === "fee" || column === "amount"
            ? b[column]
            : b[column].toUpperCase();

        if (sorting.direction === "asc") {
          return column === "fee" || column === "amount"
            ? valueA - valueB
            : valueA.localeCompare(valueB);
        } else {
          return column === "fee" || column === "amount"
            ? valueB - valueA
            : valueB.localeCompare(valueA);
        }
      });
    } else {
      setSorting({ column, direction: "asc" });
      transactionData.sort((a, b) => a.id - b.id);
    }
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    return () => {
      setSorting({
        column: "",
        direction: "asc",
      });
    };
  }, []);

  return (
    <>
      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell onClick={() => handleSortClick("date")}>
                <div className="header-cell-content">
                  <p className="transaction-table-headers">Date</p>
                  {sorting.column === "date" && (
                    <span className="sort-arrow">
                      {sorting.direction === "asc" ? "▲" : "▼"}
                    </span>
                  )}
                </div>
              </TableCell>
              <TableCell
                align="left"
                className="transaction-table-headers"
                onClick={() => handleSortClick("receivingAddress")}
              >
                <div className="header-cell-content">
                  <p className="transaction-table-headers">Receiving Address</p>
                  {sorting.column === "receivingAddress" && (
                    <span className="sort-arrow">
                      {sorting.direction === "asc" ? "▲" : "▼"}
                    </span>
                  )}
                </div>
              </TableCell>
              <TableCell
                align="left"
                className="transaction-table-headers"
                onClick={() => handleSortClick("type")}
              >
                <div className="header-cell-content">
                  <p className="transaction-table-headers">Type</p>
                  {sorting.column === "type" && (
                    <span className="sort-arrow">
                      {sorting.direction === "asc" ? "▲" : "▼"}
                    </span>
                  )}
                </div>
              </TableCell>

              <TableCell
                align="left"
                className="transaction-table-headers"
                onClick={() => handleSortClick("status")}
              >
                <div className="header-cell-content">
                  <p className="transaction-table-headers">Status</p>
                  {sorting.column === "status" && (
                    <span className="sort-arrow">
                      {sorting.direction === "asc" ? "▲" : "▼"}
                    </span>
                  )}
                </div>
              </TableCell>
              <TableCell
                align="left"
                className="transaction-table-headers"
                onClick={() => handleSortClick("transactionId")}
              >
                <div className="header-cell-content">
                  <p className="transaction-table-headers">ID</p>
                  {sorting.column === "transactionId" && (
                    <span className="sort-arrow">
                      {sorting.direction === "asc" ? "▲" : "▼"}
                    </span>
                  )}
                </div>
              </TableCell>
              <TableCell
                align="left"
                className="transaction-table-headers"
                onClick={() => handleSortClick("userName")}
              >
                <div className="header-cell-content">
                  <p className="transaction-table-headers">Username</p>
                  {sorting.column === "userName" && (
                    <span className="sort-arrow">
                      {sorting.direction === "asc" ? "▲" : "▼"}
                    </span>
                  )}
                </div>
              </TableCell>
              <TableCell
                align="left"
                className="transaction-table-headers"
                onClick={() => handleSortClick("fee")}
              >
                <div className="header-cell-content">
                  <p className="transaction-table-headers">Fee</p>
                  {sorting.column === "fee" && (
                    <span className="sort-arrow">
                      {sorting.direction === "asc" ? "▲" : "▼"}
                    </span>
                  )}
                </div>
              </TableCell>
              <TableCell
                align="left"
                className="transaction-table-headers"
                onClick={() => handleSortClick("amount")}
              >
                <div className="header-cell-content">
                  <p className="transaction-table-headers">Amount</p>
                  {sorting.column === "amount" && (
                    <span className="sort-arrow">
                      {sorting.direction === "asc" ? "▲" : "▼"}
                    </span>
                  )}
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactionData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row" style={{ width: 160 }}>
                    <p className="transaction-table-date">{row.date}</p>
                  </TableCell>
                  <TableCell style={{ width: 250 }} align="left">
                    <div className="transaction-table-address-container">
                      <p className="transaction-table-address">
                        {row.receivingAddress}
                      </p>
                      <img src={EditIcon} />
                    </div>
                  </TableCell>
                  <TableCell style={{ width: 200 }} align="left">
                    <p className="transaction-table-date">{row.type}</p>
                  </TableCell>
                  <TableCell style={{ width: 120 }} align="left">
                    <p className="email-admin-text">
                      {row.status == "completed" ? (
                        <img src={Check} />
                      ) : row.status == "pending" ? (
                        <img src={Pending} />
                      ) : (
                        <img src={Cancelled} />
                      )}
                    </p>
                  </TableCell>
                  <TableCell style={{ width: 120 }} align="left">
                    <p className="transaction-table-date">
                      {row.transactionId}
                    </p>
                  </TableCell>
                  <TableCell style={{ width: 120 }} align="left">
                    <p className="transaction-table-date">{row.userName}</p>
                  </TableCell>
                  <TableCell style={{ width: 120 }} align="left">
                    <p className="transaction-table-date">{row.fee}</p>
                  </TableCell>
                  <TableCell style={{ width: 120 }} align="left">
                    <p className="transaction-table-date">{row.amount}</p>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <CustomerTable
          page={page}
          onPageChange={handleChangePage}
          pageNumbers={pageNumbers}
        />
      </TableContainer>
    </>
  );
}
