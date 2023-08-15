import { Box, useTheme } from '@mui/material';
import { ScheduledTasks } from '../../Data/Data';
import "./tasks.css";

const Tasks = ({ icon, title }) => {
  const theme = useTheme();

  return (
    <Box className="box">
      <Box className="box-container" sx={{ padding: ".5rem", position: 'sticky', top: '0', zIndex: "1", backgroundColor: theme.palette.custom.white, display: "flex", alignItem: "center" }}><div style={{ fontSize: "1rem", fontWeight: "600", marginRight: "5px" }}>{title}</div><span style={{ fontSize: "1.2rem" }}>{icon}</span></Box>
      {
        ScheduledTasks.map((data) => {
          return (
            <>
              <Box className="task-holder" key={data.id} >
                <Box className="task-holder-container">
                  <Box className="task-holder-details" >
                    <Box sx={{ fontSize: "12px" }} color={theme.palette.custom.darkBlue}>{data.Dept}</Box>
                    <Box sx={{ fontSize: "14px" }} color={theme.palette.custom.grey}>{data.task}</Box>
                  </Box>
                  <Box className="user-img">
                    <img src={data.img} alt='user identity' width="30px" height="30px" style={{ borderRadius: "50%", marginRight: "15px" }} />
                  </Box>
                  <Box className="task-holder-progress" >
                    <Box style={{ fontSize: "12px", fontWeight: 500 }}>{data.date}</Box>
                    {data.state === "To do" && <Box className='state-color todo'></Box>}
                    {data.state === "Doing" && <Box className='state-color doing'></Box>}
                    {data.state === "Incomplete" && <Box className='state-color incomplete'></Box>}
                    <Box textAlign="left">{data.state}</Box>
                  </Box>
                </Box>
              </Box>
              <Box className='bottom-border'></Box>
            </>
          );
        })
      }
    </Box>
  );
};

export default Tasks;