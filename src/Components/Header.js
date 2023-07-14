import { Typography, Box, useTheme } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AddBoxIcon from '@mui/icons-material/AddBox';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Header = () => {
  const theme = useTheme();
  // const colors = tokens(theme.palette.mode);

  return (
    <Box mb="10px" bgcolor={theme.palette.custom.darkBlue} p="1.2rem" display="flex">
      <Typography fontSize="32px" color={theme.palette.custom.white} fontWeight="500" mr="1rem">Dashboard</Typography>
      <Box display="flex" alignItems="center" justifyContent="space-between" flex="1">
        <Box display="flex" columnGap=".2rem" alignItems="center">
          <Typography fontSize="12px" color={theme.palette.custom.grey} fontWeight="500" >Home</Typography>
          <FiberManualRecordIcon style={{ fontSize: '0.5rem', color: `${theme.palette.custom.grey}` }} />
          <Typography fontSize="12px" color={theme.palette.custom.grey} fontWeight="500" >Dashboard</Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center" gap="5px" color={theme.palette.custom.grey} columnGap="1rem">
          <SearchIcon />
          <DescriptionIcon />
          <AccessTimeFilledIcon />
          <AddBoxIcon />
          <NotificationsIcon />
          <PowerSettingsNewIcon />
        </Box>

      </Box>
    </Box >
  );
};

export default Header;;