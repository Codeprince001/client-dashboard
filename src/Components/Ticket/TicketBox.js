import { Box, useTheme } from '@mui/material';
import { TicketHolders } from '../../Data/Data';
import "./ticket.css";

const TicketBox = ({ icon }) => {
  const theme = useTheme();

  return (
    <Box className="box">
      <Box className="box-container" sx={{ padding: "1rem", position: 'sticky', top: '0', zIndex: "1", backgroundColor: theme.palette.custom.white, display: "flex", alignItem: "center" }}><div style={{ fontSize: "1rem", fontWeight: "600", marginRight: "5px" }}>Open Tickets</div><span style={{ fontSize: "1.2rem" }}>{icon}</span></Box>
      {
        TicketHolders.map((data) => {
          return (
            <>
              <Box className="ticket-holder" key={data.id} >
                <div className="ticket-holder-container">
                  <div className="ticket-holder-details" >
                    <div className='ticket-holder-img'>
                      <img src={data.img} alt='user identity' width="40px" height="40px" style={{ borderRadius: "5px", marginRight: "5px" }} />
                    </div>
                    <div style={{ marginRight: "30px" }}>
                      <div style={{ fontSize: "12px", fontWeight: 500, maxWidth: "350px" }}>{data.description}</div>
                      <div style={{ fontSize: "8px", fontWeight: "bold", color: theme.palette.custom.grey }}>{data.name}</div>
                    </div>
                  </div>
                  <div className='ticket-state-date' >
                    <div style={{ fontSize: "12px", fontWeight: 500 }}>{data.date}</div>
                    {data.state && <div className='state-color'></div>}
                  </div>
                </div>
              </Box>
              <div className='bottom-border'></div>
            </>
          );
        })
      }
    </Box>
  );
};

export default TicketBox;