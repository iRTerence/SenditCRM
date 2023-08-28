import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import KYC from "../CustomerDetails/KYC/KYC";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{
        backgroundColor: "white",
        borderRadius: "12px",
      }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function AccountTabs({ selectedUser, selectedUserData }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderRadius: "12px" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ style: { display: "none" } }}
          sx={{
            "& .MuiTab-root": {
              textTransform: "capitalize",
              color: "#BCBCBC",
              fontFamily: "Inter",
              fontSize: 15,
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "30px",
              backgroundColor: "#f8f8f8",
              "&.Mui-selected": {
                backgroundColor: "white",
                color: "#092C4C",
                borderRadius: "6px !important",
              },
            },
          }}
        >
          <Tab
            label="Services"
            {...a11yProps(0)}
            disabled={selectedUserData === null}
          />
          <Tab
            label="Accounts"
            {...a11yProps(1)}
            disabled={selectedUserData === null}
          />
          <Tab
            label="Communications"
            {...a11yProps(2)}
            disabled={selectedUserData === null}
          />
          <Tab
            label="Transactions"
            {...a11yProps(3)}
            disabled={selectedUserData === null}
          />
          <Tab
            label="KYC/KYB"
            {...a11yProps(4)}
            disabled={selectedUserData === null}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Item Threes
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <KYC selectedUser={selectedUser} selectedUserData={selectedUserData} />
      </CustomTabPanel>
    </Box>
  );
}
