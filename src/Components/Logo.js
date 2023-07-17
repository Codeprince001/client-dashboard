import { Box } from "@mui/material";
import Logo from "../Assets/img/logo.png";
import { useTheme } from "@emotion/react";

export const Brand = () => {
  const theme = useTheme();

  return (
    <Box sx={{ background: `${theme.palette.custom.darkBlue}`, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem", borderRight: ".5px solid grey", borderBottom: ".5px solid grey" }}>
      <img src={Logo} alt="company" width="50px" height="50px" style={{ borderRadius: "10px" }} />
    </Box>
  );
};


