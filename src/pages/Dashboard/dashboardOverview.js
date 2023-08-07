import { Box, useTheme } from "@mui/material";
import { FaUsers, FaUser, FaLayerGroup } from "react-icons/fa";
import { FaTicketSimple, FaCalendarDays } from "react-icons/fa6";
import { BiSolidTimeFive } from "react-icons/bi";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { PiQuestionFill } from "react-icons/pi";

import { FaFileLines } from "react-icons/fa6";
import StatBox from "../../Components/StatBox/StatBox";
import DashboardTab from "./dashboardAdminHeader";
import BarChartBox from "../../Components/BarChart/BarChartBox";
import { BarChartData } from "../../Data/Data";
import { LineChartData } from "../../Data/Data";
import { LineChartBox } from "../../Components/LineChart/LineChart";
import TicketBox from "../../Components/Ticket/TicketBox";

export const Dashboard = () => {
  const theme = useTheme();

  return (
    <Box display="relative">
      <Box>
        <DashboardTab />
      </Box>
      <Box p="20px" style={{
        maxHeight: "calc(100vh)", overflowY: "auto", flex: 1, zIndex: -999
      }}>

        {/* GRID & CHARTS */}
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
          marginTop="50px"
          marginBottom="90px"
          zIndex="-99999999"
        >
          {/* ROW 1 */}

          <Box
            gridColumn="span 3"
            backgroundColor={theme.palette.custom.white}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="10px"


          >
            <StatBox
              title="Total Clients"
              numbers="31"
              icon={
                <FaUsers
                  sx={{ color: theme.palette.custom.grey, fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={theme.palette.custom.white}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="10px"

          >
            <StatBox
              title="Total Employees"
              numbers="32"
              icon={
                <FaUser
                  sx={{ color: theme.palette.custom.grey, fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={theme.palette.custom.white}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="10px"

          >
            <StatBox
              title="Total Projects"
              numbers="20"
              icon={
                <FaLayerGroup
                  sx={{ color: theme.palette.custom.grey, fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={theme.palette.custom.white}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="10px"
          >
            <StatBox
              title="Due Invoices"
              numbers="55"
              icon={
                <FaFileLines
                  sx={{ color: theme.palette.custom.grey, fontSize: "26px" }}
                />
              }
            />
          </Box>

          {/* {Row 2} */}
          <Box
            gridColumn="span 3"
            backgroundColor={theme.palette.custom.white}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="10px"


          >
            <StatBox
              title="Hours Logged"
              numbers="611 Hours"
              icon={
                <BiSolidTimeFive
                  sx={{ color: theme.palette.custom.grey, fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={theme.palette.custom.white}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="10px"

          >
            <StatBox
              title="Total Clients"
              numbers="38"
              icon={
                <TfiMenuAlt
                  sx={{ color: theme.palette.custom.grey, fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={theme.palette.custom.white}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="10px"

          >
            <StatBox
              title="Total Clients"
              numbers="0/32"
              icon={
                <FaCalendarDays
                  sx={{ color: theme.palette.custom.grey, fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={theme.palette.custom.white}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="10px"
          >
            <StatBox
              title="Total Clients"
              numbers="7"
              icon={
                <FaTicketSimple
                  sx={{ color: theme.palette.custom.grey, fontSize: "26px" }}
                />
              }
            />
          </Box>
          {/* Row 3 */}
          <Box
            gridColumn="span 6"
            gridRow="span 3"
            backgroundColor={theme.palette.custom.white}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="10px"
          >
            {<BarChartBox {...BarChartData} />}

          </Box>
          <Box
            gridColumn="span 6"
            gridRow="span 3"
            backgroundColor={theme.palette.custom.white}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="10px"
          ><LineChartBox {...LineChartData} />
          </Box>

          {/* Row 4 */}
          <Box
            gridColumn="span 6"
            gridRow="span 2"
            backgroundColor={theme.palette.custom.white}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="10px"
          ><StatBox
              isData="false"
              title="Pending Follow Up"
              icon={
                <FaUsers
                  sx={{ color: theme.palette.custom.grey, fontSize: "26px" }}
                />} />
          </Box>
          <Box
            gridColumn="span 6"
            gridRow="span 2"
            backgroundColor={theme.palette.custom.white}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="10px"
            position="relative"
          >
            <TicketBox icon={
              <PiQuestionFill
                sx={{ color: theme.palette.custom.grey, fontSize: "26px" }}
              />} />
          </Box>

          {/* Row 5 */}
          <Box
            gridColumn="span 6"
            gridRow="span 2"
            backgroundColor={theme.palette.custom.white}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="10px"
          ><StatBox
              title="Pending Task"
            />
          </Box>
          <Box
            gridColumn="span 6"
            gridRow="span 2"
            backgroundColor={theme.palette.custom.white}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="10px"
          ><StatBox title="Pending Leaves" isData="false" icon={<MdOutlineCalendarMonth sx={{ color: theme.palette.custom.grey, fontSize: "26px" }} />} />
          </Box>

          {/* Row 6 */}
          <Box
            gridColumn="span 6"
            gridRow="span 2"
            backgroundColor={theme.palette.custom.white}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="10px"
          ><StatBox title="Earnings" />
          </Box>
          <Box
            gridColumn="span 6"
            gridRow="span 2"
            backgroundColor={theme.palette.custom.white}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="10px"
          ><StatBox
              title="User Activity Timeline"
              isData="false"
              icon={
                <FaUsers
                  sx={{ color: theme.palette.custom.grey, fontSize: "26px" }}
                />} />
          </Box>
        </Box>

      </Box>
    </Box >

  );
};
