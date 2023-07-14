import { useState } from "react";
import { Sidebar, Menu, MenuItem, menuClasses } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { Brand } from "../../Components/Logo";

import { GoHomeFill } from "react-icons/go";
import { FaUser } from "react-icons/fa6";
import { BiChevronRight } from "react-icons/bi";
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


const NavItem = ({ title, icon }) => {
  return (
    <div style={{ display: "flex", flexDirection: "Column", alignItems: "center", justifyContent: "center", margin: "5px" }}>
      <div>{icon}</div>
      <div style={{ fontSize: "10px" }}>{title}</div>
    </div>
  );
};

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  return (
    <MenuItem
      active={selected === title}
      style={{ color: theme.palette.custom.grey, fontSize: "16px", borderBottom: `1px solid ${theme.palette.custom.grey}`, padding: 0, margin: "15px 0" }}
      onClick={() => setSelected(title)}
    >
      <Link to={to} style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "inherit", textDecoration: "none" }}>
        <NavItem title={title} icon={icon} />
      </Link >
    </MenuItem >
  );
};


export const VerticalSidebar = () => {
  const theme = useTheme();
  const [isCollapsed, setisCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box>
      <Brand style={{ width: "100%" }} />
      <Sidebar
        collapsed={isCollapsed}
        width="1200px"
        style={{ width: "120px" }}
        backgroundColor={theme.palette.custom.darkBlue}
        rootStyles={{
          border: "10px",
          height: "100vh",
          top: 0,
          bottom: 0,
          zIndex: 10000,
          ["." + menuClasses.button]: {
            backgroundColor: "transparent !important",
            "&:hover": {
              backgroundColor: "transparent !important",
              ['.' + menuClasses.label]: {
                color: `${theme.palette.custom.white} !important`,
              },
              ['.' + menuClasses.icon]: {
                color: `${theme.palette.custom.white}`,
              },
            },
            "&:active": {
              color: `${theme.palette.custom.white}`,
            }
          }
        }}
      >

        <Menu>
          {/* <MenuItem
          icon={<MenuOutlinedIcon />}
          style={{ margin: "25px 0 5px 0", color: theme.palette.custom.orange }}>
        </MenuItem> */}



          <Menu>
            <Item
              title="dashboard"
              to="/"
              icon={<GoHomeFill />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Manage Team"
              to="/team"
              icon={<FaUser />}
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
    </Box>

  );
};
