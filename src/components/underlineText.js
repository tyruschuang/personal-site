import {gradientString} from "../lib/gradient";
import {Box} from "@mui/material";

export default function UnderlineText(props) {

    return (
        <Box className={props.class}
             sx={{
                 position: "relative",
                 display: "inline-flex",
                 ...props.sx,
             }}>
            <Box sx={{
                "&::after": {
                    zIndex: -1,
                    content: '""',
                    display: "block",
                    width: "100%",
                    height: "30%",
                    bottom: "40%",
                    position: "relative",
                    background: gradientString,
                }
            }}
            >
                {props.children}
            </Box>
        </Box>
    )

}