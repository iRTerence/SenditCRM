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
import UserFace from "../../images/user.png";
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

export default function CRMTable({ userData, handleSelectedUser }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage] = React.useState(2);

  const rows = userData.map((name) => {
    return createData(
      name.name,
      name.email,
      name.phone,
      name.address,
      name.country
    );
  });
  console.log(userData);

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
            <TableCell style={{ width: 50 }}>
              <img src={UserIcon} />
            </TableCell>
            <TableCell
              align="left"
              className="customer-table-headers"
              style={{ width: 160 }}
            >
              Name
            </TableCell>
            <TableCell align="left" style={{ width: 120 }}></TableCell>
            <TableCell
              align="left"
              className="customer-table-headers"
              style={{ width: 200 }}
            >
              Email
            </TableCell>
            <TableCell
              align="left"
              className="customer-table-headers"
              style={{ width: 160 }}
            >
              Phone
            </TableCell>
            <TableCell
              align="left"
              className="customer-table-headers"
              style={{ width: 200 }}
            >
              Address
            </TableCell>
            <TableCell
              align="right"
              className="customer-table-headers"
              style={{ width: 120 }}
            >
              Edit
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
      <div style={{ overflowX: "auto" }}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableBody>
            {userData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.Vuser.id}>
                  <TableCell component="th" scope="row" style={{ width: 50 }}>
                    <img
                      src={
                        row.Vuser.photo == ""
                          ? UserFace
                          : "https://dev2.4pay.ca/ncsreve/img/pics/" +
                            row.Vuser.photo
                      }
                      className="table-customer-photo"
                      alt="User Image"
                    />
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="left">
                    {row.Vuser.firstName} {row.Vuser.lastName}
                  </TableCell>
                  <TableCell style={{ width: 120 }} align="left">
                    <Flag
                      code={row.Vuser.countryid}
                      height="18"
                      fallback={<span>Unknown</span>}
                    />
                  </TableCell>
                  <TableCell style={{ width: 200 }} align="left">
                    {row.Vuser.emailAccount}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="left">
                    {row.Vuser.telephoneno}
                  </TableCell>
                  <TableCell style={{ width: 200 }} align="left">
                    {row.Vuser.cityname}
                  </TableCell>
                  <TableCell style={{ width: 120 }} align="right">
                    <img
                      src={EditIcon}
                      onClick={() => handleSelectedUser(row.Vuser.id)}
                    />
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
      </div>

      <CustomerTable
        page={page}
        onPageChange={handleChangePage}
        pageNumbers={pageNumbers}
      />
    </TableContainer>
  );
}
