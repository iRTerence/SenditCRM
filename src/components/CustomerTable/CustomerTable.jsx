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
import UserIcon from "../../images/user-octagon.svg";
import "./CustomerTable.scss";
import EditIcon from "../../images/editpencil.svg";
import UserFace from "../../images/userface.jpg";
import Flag from "react-world-flags";

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

function createData(name, email, phone, address, country) {
  return { name, email, phone, address, country };
}

const fruitNames = [
  {
    id: 1,
    name: "Apple",
    email: "Emailtest@email.com",
    address: "475 Spruce Drive, Pittsburg, PA 23592",
    country: "CAN",
    phone: "999-999-9999",
  },
  {
    id: 1,
    name: "Apple",
    email: "Emailtest@email.com",
    address: "475 Spruce Drive, Pittsburg, PA 23592",
    country: "CAN",
    phone: "999-999-9999",
  },
  {
    id: 1,
    name: "Apple",
    email: "Emailtest@email.com",
    address: "475 Spruce Drive, Pittsburg, PA 23592",
    country: "CAN",
    phone: "999-999-9999",
  },
  {
    id: 1,
    name: "Apple",
    email: "Emailtest@email.com",
    address: "475 Spruce Drive, Pittsburg, PA 23592",
    country: "CAN",
    phone: "999-999-9999",
  },
  {
    id: 1,
    name: "Apple",
    email: "Emailtest@email.com",
    address: "475 Spruce Drive, Pittsburg, PA 23592",
    country: "CAN",
    phone: "999-999-9999",
  },
  {
    id: 1,
    name: "Apple",
    email: "Emailtest@email.com",
    address: "475 Spruce Drive, Pittsburg, PA 23592",
    country: "CAN",
    phone: "999-999-9999",
  },
  {
    id: 1,
    name: "Apple",
    email: "Emailtest@email.com",
    address: "475 Spruce Drive, Pittsburg, PA 23592",
    country: "CAN",
    phone: "999-999-9999",
  },
  {
    id: 1,
    name: "Apple",
    email: "Emailtest@email.com",
    address: "475 Spruce Drive, Pittsburg, PA 23592",
    country: "CAN",
    phone: "999-999-9999",
  },
  {
    id: 1,
    name: "Apple",
    email: "Emailtest@email.com",
    address: "475 Spruce Drive, Pittsburg, PA 23592",
    country: "CAN",
    phone: "999-999-9999",
  },
  {
    id: 1,
    name: "Apple",
    email: "Emailtest@email.com",
    address: "475 Spruce Drive, Pittsburg, PA 23592",
    country: "CAN",
    phone: "999-999-9999",
  },
  {
    id: 1,
    name: "Apple",
    email: "Emailtest@email.com",
    address: "475 Spruce Drive, Pittsburg, PA 23592",
    country: "CAN",
    phone: "999-999-9999",
  },
  {
    id: 1,
    name: "Apple",
    email: "Emailtest@email.com",
    address: "475 Spruce Drive, Pittsburg, PA 23592",
    country: "CAN",
    phone: "999-999-9999",
  },
  {
    id: 1,
    name: "Apple",
    email: "Emailtest@email.com",
    address: "475 Spruce Drive, Pittsburg, PA 23592",
    country: "CAN",
    phone: "999-999-9999",
  },
  //   "Banana",
  //   "Orange",
  //   "Grapes",
  //   "Strawberry",
  //   "Blueberry",
  //   "Pineapple",
  //   "Mango",
  //   "Watermelon",
  //   "Kiwi",
  //   "Peach",
  //   "Pear",
  //   "Plum",
  //   "Cherry",
  //   "Blackberry",
  //   "Raspberry",
  //   "Apricot",
  //   "Lemon",
  //   "Lime",
  //   "Coconut",
  //   "Pomegranate",
  //   "Fig",
  //   "Guava",
  //   "Papaya",
  //   "Cranberry",
  //   "Cantaloupe",
  //   "Honeydew",
  //   "Passion Fruit",
  //   "Dragon Fruit",
  //   "Mangosteen",
  //   "Lychee",
  //   "Star Fruit",
  //   "Persimmon",
  //   "Avocado",
];

// Generating random data for 76 fruits
const rows = fruitNames.map((name) => {
  return createData(
    name.name,
    name.email,
    name.phone,
    name.address,
    name.country
  );
});

export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage] = React.useState(2);

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
            <TableCell>
              <img src={UserIcon} />
            </TableCell>
            <TableCell align="left" className="customer-table-headers">
              Name
            </TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left" className="customer-table-headers">
              Email
            </TableCell>
            <TableCell align="left" className="customer-table-headers">
              Phone
            </TableCell>
            <TableCell align="left" className="customer-table-headers">
              Address
            </TableCell>
            <TableCell align="right" className="customer-table-headers">
              Edit
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row" style={{ width: 50 }}>
                  <img src={UserFace} className="table-customer-photo" />
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  {row.name}
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  <Flag
                    code={row.country}
                    height="18"
                    fallback={<span>Unknown</span>}
                  />
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  {row.email}
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  {row.phone}
                </TableCell>
                <TableCell style={{ width: 200 }} align="left">
                  {row.address}
                </TableCell>
                <TableCell style={{ width: 120 }} align="right">
                  <img src={EditIcon} />
                </TableCell>
              </TableRow>
            ))}
          {/* {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={3} />
            </TableRow>
          )} */}
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
