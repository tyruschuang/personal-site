import {blueGrey, teal} from "@mui/material/colors";
import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        contrastThreshold: 4.5,
        mode: "dark",

        primary: blueGrey,
        secondary: teal,

        white: {
            main: "#FFFFFF",
        }
    },

    typography: {
        fontSize: 24,

        fontFamily: [
            'Open Sans',
        ],
    }
});
