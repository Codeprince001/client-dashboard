import { Box, useTheme } from '@mui/material';
import { ScheduledTasks } from '../../Data/Data';
import "./project.css";

const Projects = ({ icon, title }) => {
  const theme = useTheme();

  return (
    <Box className="box">
      <Box className="box-container" sx={{ padding: "1rem", position: 'sticky', top: '0', zIndex: "1", backgroundColor: theme.palette.custom.white, display: "flex", alignItem: "center" }}><div style={{ fontSize: "1rem", fontWeight: "600", marginRight: "5px" }}>{title}</div><span style={{ fontSize: "1.2rem" }}>{icon}</span></Box>
      {
        ScheduledTasks.map((data) => {
          return (
            <>
              <Box className="project-holder" key={data.id} >
                <Box className="project-activity-container">

                  <Box sx={{ border: "1px solid #000", borderRadius: "10px", textAlign: "center" }}>
                    <Box padding=".2rem">May</Box>
                    <Box borderBottom="1px solid #000" width="100%"></Box>
                    <Box padding=".2rem">06</Box>
                  </Box>

                  <Box className="project-holder-details" >
                    <Box sx={{ fontSize: "1rem" }} color={theme.palette.custom.darkBlue}>New Task Added To Project</Box>
                    <Box sx={{ fontSize: "12px" }} color={theme.palette.custom.grey}>Data Management System</Box>
                    <Box sx={{ fontSize: "14px" }} color={theme.palette.custom.darkBlue}>{ }</Box>
                  </Box>
                </Box>
              </Box>
            </>
          );
        })
      }
    </Box>
  );
};

export default Projects;