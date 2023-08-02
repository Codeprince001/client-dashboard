import { Box, useTheme } from '@mui/material';
import userImg from "../../Assets/img/user.jpg";
import { TicketHolders } from '../../Data/Data';

const TicketBox = () => {
  const theme = useTheme();

  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <Box style={{ padding: "1rem", fontSize: "1rem", fontWeight: "600" }}>Open Tickets</Box>
      {
        TicketHolders.map((data) => {
          return (
            <Box style={{ padding: "5px" }}>
              <div key={data.id} style={{ display: "flex", alignItems: "center" }}>
                <img src={data.img} alt='user identity' width="50px" height="50px" style={{ borderRadius: "5px", marginRight: "5px" }} />
                <div>
                  <div style={{ fontSize: "12px", fontWeight: 500 }}>
                    {data.description}
                  </div>
                  <div style={{ fontSize: "8px", fontWeight: "bold" }}>
                    {data.name}
                  </div>
                </div>
              </div>
            </Box>
          );
        })
      }
    </div>
  );
};

export default TicketBox;