import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import TableHead from "@mui/material/TableHead";

import "./CustomerTable.scss";

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
        justifyContent: "space-between", // Center the page numbers
        alignItems: "center", // Center vertically
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
            // If there are 5 or fewer pages, show all page numbers
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
            // Show the first, last, and adjacent page numbers to the selected page
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
            // Show the second and second-to-last page numbers, and add ellipsis before and after
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

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const fruitNames = [
  "Apple",
  "Banana",
  "Orange",
  "Grapes",
  "Strawberry",
  "Blueberry",
  "Pineapple",
  "Mango",
  "Watermelon",
  "Kiwi",
  "Peach",
  "Pear",
  "Plum",
  "Cherry",
  "Blackberry",
  "Raspberry",
  "Apricot",
  "Lemon",
  "Lime",
  "Coconut",
  "Pomegranate",
  "Fig",
  "Guava",
  "Papaya",
  "Cranberry",
  "Cantaloupe",
  "Honeydew",
  "Passion Fruit",
  "Dragon Fruit",
  "Mangosteen",
  "Lychee",
  "Star Fruit",
  "Persimmon",
  "Avocado",
];

// Generating random data for 76 fruits
const rows = fruitNames
  .map((name) => {
    return createData(
      name,
      Math.floor(Math.random() * 200) + 100,
      Math.random().toFixed(1)
    );
  })
  .sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage] = React.useState(5);

  const pageCount = Math.ceil(rows.length / rowsPerPage);
  const pageNumbers = Array.from({ length: pageCount }, (_, index) => index);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.calories}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.fat}
                </TableCell>
              </TableRow>
            ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={3} />
            </TableRow>
          )}
        </TableBody>
      </Table>
      <CustomerTable
        page={page}
        onPageChange={handleChangePage}
        pageNumbers={pageNumbers}
      />
    </TableContainer>
  );
}
