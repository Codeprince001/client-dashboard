import { Box } from "@mui/material";
import Logo from "../Assets/img/logo.png";
import { useTheme } from "@emotion/react";

export const Brand = () => {
  const theme = useTheme();

  return (
    <Box sx={{ background: `${theme.palette.custom.darkBlue}` }}>
      <img src={Logo} alt="company" width="120px" />
    </Box>
  );
};


