import { createTheme } from "@mui/material";
import typography from "assets/theme/base/typography";
import initialTheme from "assets/theme/base/initialTheme";
import button from "assets/theme/components/button";
import iconButton from "assets/theme/components/icon-button";
import pagination from "assets/theme/components/Pagination/index.jsx";
import Textfield from "assets/theme/components/Textfield";

const theme = createTheme(initialTheme, {
    typography: {...typography},
    
    components: {
        MuiButton: button,
        MuiIconButton: iconButton,
        MuiPagination: pagination,
        MuiTextField: Textfield,
    }
})

export default theme

