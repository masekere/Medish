import { createTheme } from "@mui/material";
import breakpoints from "assets/theme/base/breakpoints";
import globals from "assets/theme/base/globals";
import colors from "assets/theme/base/colors";

export default createTheme({
  breakpoints: {...breakpoints},
  palette: colors,

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          lead: 'p',
        },
      },
    },
}
})