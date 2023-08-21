import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Rolestable.scss";
import Trash from "../../images/blue-trash.svg";
import Edit from "../../images/blue-edit.svg";
import RolesTableModal from "../RolesTableModal/RolesTableModal";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#909EA7",
    color: theme.palette.common.white,
    fontFamily: "Nunito",
    fontSize: "20px",
    fontWeight: 600,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    border: "none",
    margin: "0 5px", // 5px horizontal margin
    color: "#00365A",
    lineHeight: "33px",
    fontFamily: "Nunito",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#F9F9F9",
    borderBottom: 0,
  },
  // hide last border
  "&:last-child td": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const CellGap = styled("td")({
  width: 1,
  backgroundColor: "white",
});

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function RolesTable({ modalOpen, handleClose, handleOpen }) {
  return (
    <>
      <RolesTableModal open={modalOpen} handleClose={handleClose} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Group</StyledTableCell>
              <CellGap />

              <StyledTableCell align="center">Dev Access</StyledTableCell>
              <CellGap />

              <StyledTableCell align="center">Agent</StyledTableCell>
              <CellGap />

              <StyledTableCell align="center">CRM</StyledTableCell>
              <CellGap />

              <StyledTableCell align="center">Treasury</StyledTableCell>
              <CellGap />

              <StyledTableCell align="center">Transfer</StyledTableCell>
              <CellGap />

              <StyledTableCell align="center">Reporting</StyledTableCell>
              <CellGap />

              <StyledTableCell align="center">Wallets</StyledTableCell>
              <CellGap />

              <StyledTableCell align="center">Edit Roles</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <CellGap />
                <StyledTableCell align="center">{row.calories}</StyledTableCell>
                <CellGap />

                <StyledTableCell align="center">{row.fat}</StyledTableCell>
                <CellGap />

                <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                <CellGap />

                <StyledTableCell align="center">{row.protein}</StyledTableCell>
                <CellGap />

                <StyledTableCell align="center">{row.protein}</StyledTableCell>
                <CellGap />

                <StyledTableCell align="center">{row.protein}</StyledTableCell>
                <CellGap />

                <StyledTableCell align="center">{row.protein}</StyledTableCell>
                <CellGap />

                <StyledTableCell align="center">
                  <div className="edit-roles-button">
                    <img src={Trash} />
                    <img src={Edit} onClick={handleOpen} />
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
