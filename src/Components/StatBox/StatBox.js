import { Box, Typography, useTheme } from "@mui/material";
import { PiQuestionFill } from "react-icons/pi";


const StatBox = ({ title, icon, numbers, isData }) => {
  const theme = useTheme();

  return (
    <Box width="100%" height="100%" display="flex">
      {!isData ?
        <Box m="0 30px" display="flex" alignItems="center" justifyContent="space-between" flex="1">
          <Box display="flex" justifyContent="space-between" flexDirection="column" rowGap="40px">
            <Typography fontWeight="bold" sx={{ color: theme.palette.custom.darkBlue }}>
              {title}
            </Typography>
            <Typography sx={{ color: theme.palette.custom.blue }} variant={theme.palette.typography.h3} fontWeight="600">
              {numbers}
            </Typography>
          </Box>
          <Box color={theme.palette.custom.grey} fontSize="1.5rem">
            {icon}
          </Box>
        </Box> :
        <Box width="100%">
          <Box display="flex" alignItems="center" padding="1.5rem" >
            <Typography fontWeight="bold" color={theme.palette.custom.darkBlue} marginRight="5px">
              {title}
            </Typography>
            <span style={{ fontSize: "1.3rem" }}><PiQuestionFill /></span>
          </Box>
          <Box color={theme.palette.custom.grey} fontSize="2rem" display="flex" flexDirection="column" alignItems="center" flex="1" marginTop="60px">
            {icon}
            <p style={{ fontSize: "14px" }}>No record Found</p>
          </Box>
        </Box>
      }
    </Box>

  );
};

export default StatBox;