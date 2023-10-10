import {Box} from "@mui/material";
import {gradientString} from "../lib/gradient";

export default function HighlightText(props) {

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
                    height: "50%",
                    bottom: "50%",
                    left: "25px",
                    position: "relative",
                    background: gradientString,
                    animation: "highlight 2s ease",
                }
            }}
            >
                {props.children}
            </Box>
        </Box>
    )

}