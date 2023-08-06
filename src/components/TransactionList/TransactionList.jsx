import React from "react";
import "./TransactionList.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";

function TransactionList() {
  function createData(name, calories, fat, carbs, protein, fee) {
    return { name, calories, fat, carbs, protein, fee };
  }

  const rows = [
    createData("JUL 17/2023", "14:45", "$100", "Send", "Local", "$2.00"),
    createData("JUL 17/2023", "14:45", "$100", "Send", "Local", "$2.00"),
    createData("JUL 17/2023", "14:45", "$100", "Send", "Local", "$2.00"),
    createData("JUL 17/2023", "14:45", "$100", "Send", "Local", "$2.00"),
    createData("JUL 17/2023", "14:45", "$100", "Send", "Local", "$2.00"),
    createData("JUL 17/2023", "14:45", "$100", "Send", "Local", "$2.00"),
    createData("JUL 17/2023", "14:45", "$100", "Send", "Local", "$2.00"),
    createData("JUL 17/2023", "14:45", "$100", "Send", "Local", "$2.00"),
    createData("JUL 17/2023", "14:45", "$100", "Send", "Local", "$2.00"),
    createData("JUL 17/2023", "14:45", "$100", "Send", "Local", "$2.00"),
    createData("JUL 17/2023", "14:45", "$100", "Send", "Local", "$2.00"),
    createData("JUL 17/2023", "14:45", "$100", "Send", "Local", "$2.00"),
    createData("JUL 17/2023", "14:45", "$100", "Send", "Local", "$2.00"),
  ];
  const TableRowStyled = styled(TableRow)`
    // height: 29px;

    &:nth-of-type(odd) {
        background-color: #4d4d4d;

    }
    &:nth-of-type(even) {
        background-color: #3a3a3a;
    }
    & > td {
        color: white;
        /* Add gap (spacing) between table cells for rows with background color #4d4d4d */
        padding: 8px; /* Adjust the value as per your requirement */
      }
    }
  `;

  return (
    <div className="TransactionListContainer">
      <div className="transaction">
        <div>Real-Time Transactions</div>
        <div>View All</div>
      </div>
      <div className="transaction-table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className="table-header">
              <TableRow>
                <TableCell className="table-header-text">Date</TableCell>
                <TableCell align="right" className="table-header-text">
                  Time
                </TableCell>
                <TableCell align="right" className="table-header-text">
                  Amount
                </TableCell>
                <TableCell align="right" className="table-header-text">
                  Type
                </TableCell>
                <TableCell align="right" className="table-header-text">
                  Region
                </TableCell>
                <TableCell align="right" className="table-header-text">
                  Fee
                </TableCell>
                <TableCell align="right" className="table-header-text">
                  Fee
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRowStyled
                  key={row.name}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell scope="row">{row.name}</TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                  <TableCell align="right">{row.fee}</TableCell>
                </TableRowStyled>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default TransactionList;
