import {blue, teal} from "@mui/material/colors";
import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        contrastThreshold: 4.5,
        mode: "light",

        primary: blue,
        secondary: teal,

        white: {
            main: "#FFFFFF",
        }
    },

    typography: {
        fontSize: 30,

        fontFamily: [
            'Lora',
        ],
    }
});
