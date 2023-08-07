import { Box, useTheme } from '@mui/material';
import { TicketHolders } from '../../Data/Data';

const TicketBox = ({ icon }) => {
  const theme = useTheme();

  return (
    <div className="box-container" style={{ width: "100%", height: "100%", overflow: "auto" }}>
      <Box sx={{ padding: "1rem", position: 'sticky', top: '0', zIndex: "1", backgroundColor: theme.palette.custom.white, display: "flex", alignItem: "center" }}><div style={{ fontSize: "1rem", fontWeight: "600", marginRight: "5px" }}>Open Tickets</div><span style={{ fontSize: "1.2rem" }}>{icon}</span></Box>
      {
        TicketHolders.map((data) => {
          return (
            <>
              <Box key={data.id} style={{ margin: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <img src={data.img} alt='user identity' width="50px" height="50px" style={{ borderRadius: "5px", marginRight: "5px" }} />
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "30px" }}>
                      <div style={{ fontSize: "12px", fontWeight: 500 }}>{data.description}</div>
                      <div style={{ fontSize: "8px", fontWeight: "bold", color: theme.palette.custom.grey }}>{data.name}</div>
                    </div>
                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                      <div style={{ fontSize: "12px", fontWeight: 500 }}>{data.date}</div>
                      {data.state && <div className='state-color' style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "red", border: "1px solid red" }}>.</div>}
                    </div>
                  </div>
                </div>
              </Box>
              <div style={{ borderBottom: "1px solid #d9d9d9", width: "100%" }}></div>
            </>
          );
        })
      }
    </div>
  );
};

export default TicketBox;