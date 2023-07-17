import { Box, Typography, useTheme } from "@mui/material";

const StatBox = ({ title, icon, numbers }) => {
  const theme = useTheme();

  return (
    <Box width="100%" m="0 30px" display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" justifyContent="space-between" flexDirection="column" rowGap="40px">
        <Typography
          fontWeight="bold"
          sx={{ color: theme.palette.custom.darkBlue }}
        >
          {title}
        </Typography>
        <Typography sx={{ color: theme.palette.custom.blue }} variant={theme.palette.typography.h3} fontWeight="600">
          {numbers}
        </Typography>
      </Box>
      <Box color={theme.palette.custom.grey} fontSize="1.5rem">
        {icon}
      </Box>
    </Box>
  );
};

export default StatBox;