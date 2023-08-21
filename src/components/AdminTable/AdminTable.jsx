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
import EditIcon from "../../images/editpencil.svg";
import UserFace from "../../images/userface.jpg";
import "./AdminTable.scss";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AccountUserModal from "../AccountUserModal/AccountUserModal";

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

function ManagerButton() {
  return <div className="managerButton">Manager</div>;
}

function AdminButton() {
  return <div className="admin-button">Admin</div>;
}

function AuditorButton() {
  return <div className="auditor-button">Auditor</div>;
}

const fruitNames = [
  {
    id: 1,
    name: "Jacob",
    email: "Emailtest@email.com",
    address: "475 Spruce Drive, Pittsburg, PA 23592",
    country: "CAN",
    phone: "999-999-9999",
    loggedIn: false,
    userRole: ["manager", "auditor", "admin"],
  },
  {
    id: 2,
    name: "edward",
    email: "Emailtest@email.com",
    address: "475 Spruce Drive, Pittsburg, PA 23592",
    country: "CAN",
    phone: "999-999-9999",
    loggedIn: true,
    userRole: ["manager"],
  },
  {
    id: 3,
    name: "Steve",
    email: "Emailtest@email.com",
    address: "475 Spruce Drive, Pittsburg, PA 23592",
    country: "CAN",
    phone: "999-999-9999",
    loggedIn: false,
    userRole: ["admin", "auditor"],
  },
  {
    id: 4,
    name: "Frank",
    email: "Emailtest@email.com",
    address: "475 Spruce Drive, Pittsburg, PA 23592",
    country: "CAN",
    phone: "999-999-9999",
    loggedIn: false,
    userRole: ["manager"],
  },
  {
    id: 1,
    name: "Lisa",
    email: "Emailtest@email.com",
    address: "475 Spruce Drive, Pittsburg, PA 23592",
    country: "CAN",
    phone: "999-999-9999",
    loggedIn: false,
    userRole: ["admin"],
  },
  {
    id: 1,
    name: "Lizxa",
    email: "Emailtest@email.com",
    address: "475 Spruce Drive, Pittsburg, PA 23592",
    country: "CAN",
    phone: "999-999-9999",
    loggedIn: false,
    userRole: ["manager", "admin"],
  },
  {
    id: 1,
    name: "David",
    email: "Emailtest@email.com",
    address: "475 Spruce Drive, Pittsburg, PA 23592",
    country: "CAN",
    phone: "999-999-9999",
    loggedIn: true,
    userRole: ["auditor"],
  },
  {
    id: 1,
    name: "Smith",
    email: "Emailtest@email.com",
    address: "475 Spruce Drive, Pittsburg, PA 23592",
    country: "CAN",
    phone: "999-999-9999",
    loggedIn: false,
    userRole: ["manager"],
  },
  {
    id: 1,
    name: "Fummy",
    email: "Emailtest@email.com",
    address: "475 Spruce Drive, Pittsburg, PA 23592",
    country: "CAN",
    phone: "999-999-9999",
    loggedIn: false,
    userRole: ["admin", "manager"],
  },
  {
    id: 1,
    name: "Katie",
    email: "Emailtest@email.com",
    address: "475 Spruce Drive, Pittsburg, PA 23592",
    country: "CAN",
    phone: "999-999-9999",
    loggedIn: false,
    userRole: ["manager", "auditor"],
  },
  {
    id: 1,
    name: "Banana",
    email: "Emailtest@email.com",
    address: "475 Spruce Drive, Pittsburg, PA 23592",
    country: "CAN",
    phone: "999-999-9999",
    loggedIn: false,
    userRole: ["auditor"],
  },
  {
    id: 1,
    name: "Fruit",
    email: "Emailtest@email.com",
    address: "475 Spruce Drive, Pittsburg, PA 23592",
    country: "CAN",
    phone: "999-999-9999",
    loggedIn: false,
    userRole: ["admin"],
  },
  {
    id: 1,
    name: "Desk",
    email: "Emailtest@email.com",
    address: "475 Spruce Drive, Pittsburg, PA 23592",
    country: "CAN",
    phone: "999-999-9999",
    loggedIn: false,
    userRole: ["manager"],
  },
];

export default function AdminTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const pageCount = Math.ceil(fruitNames.length / rowsPerPage);
  const pageNumbers = Array.from({ length: pageCount }, (_, index) => index);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  function orderArray(inputArray, referenceArray) {
    const orderedArray = [];

    for (const role of referenceArray) {
      if (inputArray.includes(role)) {
        orderedArray.push(role);
      }
    }

    return orderedArray;
  }

  const roleOrder = ["manager", "auditor", "admin"];

  return (
    <>
      <AccountUserModal open={open} handleClose={handleClose} />
      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell>
                <img src={UserIcon} />
              </TableCell>
              <TableCell align="left" className="customer-table-headers">
                <p className="customer-table-headers"> Name</p>
              </TableCell>
              <TableCell align="left">
                <p className="customer-table-headers"> Email</p>
              </TableCell>
              <TableCell
                align="left"
                className="customer-table-headers"
              ></TableCell>
              <TableCell align="left" className="customer-table-headers">
                <p className="customer-table-headers"> User Roles</p>
              </TableCell>
              <TableCell align="left" className="customer-table-headers">
                <p className="customer-table-headers"> Actions</p>
              </TableCell>
              {/* <TableCell align="right" className="customer-table-headers">
              Edit
            </TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {fruitNames
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row" style={{ width: 50 }}>
                    <img src={UserFace} className="table-customer-photo" />
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="left">
                    <p className="email-admin-text">{row.name}</p>
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="left">
                    <p className="email-admin-text">{row.email}</p>
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="left">
                    {row.loggedIn ? (
                      <></>
                    ) : (
                      <div className="logged-in-text">Not Logged In</div>
                    )}
                  </TableCell>

                  <TableCell style={{ width: 160 }} align="left">
                    <div className="button-container">
                      {orderArray(row.userRole, roleOrder).map(
                        (role, index) => {
                          if (role === "manager") {
                            return <ManagerButton key={index} />;
                          } else if (role === "admin") {
                            return <AdminButton key={index} />;
                          } else if (role === "auditor") {
                            return <AuditorButton key={index} />;
                          } else {
                            return null; // Handle other roles if needed
                          }
                        }
                      )}
                    </div>
                  </TableCell>
                  <TableCell style={{ width: 200 }} align="left">
                    <div className="admin-actions-container">
                      <div className="modify-role-button" onClick={handleOpen}>
                        <img src={EditIcon} />
                        Modify Roles
                      </div>
                      <div className="modify-role-button">
                        <img src={EditIcon} />
                        Remove User
                      </div>
                    </div>
                  </TableCell>
                  {/* <TableCell style={{ width: 120 }} align="right">
                  <img src={EditIcon} />
                </TableCell> */}
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
    </>
  );
}
