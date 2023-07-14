import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  return (
    <MenuItem
      active={selected === title}
      style={{ color: theme.palette.custom.grey }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography fontSize="1rem">{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};


export const VerticalSidebar = () => {
  const theme = useTheme();
  const [isCollapsed, setisCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");


  return (
    <Sidebar
      collapsed={isCollapsed}
      backgroundColor={theme.palette.custom.darkBlue}
      rootStyles={{
        border: "10px",
        height: "100vh",
        top: 0,
        bottom: 0,
        zIndex: 10000,
      }}
    >

      <Menu>
        <MenuItem
          icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
          style={{ margin: "5px 0 10px 0", color: theme.palette.custom.orange }}>
        </MenuItem>

        {!isCollapsed && (
          <Box mb="10px">
            <Box display="flex" justifyContent="center" alignItems="center">

            </Box>

            <Box textAlign="center">
              <Typography fontSize="16px" color={theme.palette.custom.grey} fontWeight="bold" sx={{ m: "10px 0 0 0" }}>Wisdom Matthew</Typography>
            </Box>
          </Box>
        )}

        <Menu paddingLeft={isCollapsed ? undefined : "10%"}>
          <Item
            title="dashboard"
            to="/"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Item
            title="Manage Team"
            to="/team"
            icon={<PeopleOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Contacts Information"
            to="/contacts"
            icon={<ContactsOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="invoices and Balances"
            to="/invoices"
            icon={<ReceiptOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Profile form"
            to="/form"
            icon={<PersonOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Calendar"
            to="/calendar"
            icon={<CalendarTodayOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="FAQ"
            to="/"
            icon={<HelpOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Bar Chart"
            to="/bar"
            icon={<BarChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Pie Chart"
            to="/pie"
            icon={<PieChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Line Chart"
            to="/line"
            icon={<TimelineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Geography Chart"
            to="/geography"
            icon={<MapOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </Menu>

      </Menu>

    </Sidebar >

  );
};
