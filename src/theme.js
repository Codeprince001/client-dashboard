import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    custom: {
      bg: "#EDF0F4",
      white: "#ffffff",
      grey: "#8994a3",
      blue: "#1D82F5",
      darkBlue: "#171F29",
      green: "#00AF2F",
      orange: "#FF7700",
      red: "#BE0000",
    },
    typography: {
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 36
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14
      },
    }
  },
});
