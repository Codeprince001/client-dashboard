import { Box, useTheme } from '@mui/material';
import userImg from "../../Assets/img/user.jpg";
import { TicketHolders } from '../../Data/Data';

const TicketBox = () => {
  const theme = useTheme();

  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <div>Open Tickets</div>
      {
        TicketHolders.map((data) => {
          <div key={data.id} style={{ display: "flex" }}>
            <img src={data.img} alt='user identity' />
            {/* <div>
              <div>
                {data.description}
                {data.name}
              </div>
            </div> */}
          </div>;
        })
      }
    </div>
  );
};

export default TicketBox;