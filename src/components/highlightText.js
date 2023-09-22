import {Box} from "@mui/material";
import {gradient} from "../assets/constants";

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
                    width: "85%",
                    height: "50%",
                    bottom: "50%",
                    left: "25%",
                    position: "relative",
                    background: gradient,
                    animation: "highlight 2s cubic-bezier(0.2, 0, 0.1, 1)",
                }
            }}
            >
                {props.children}
            </Box>
        </Box>
    )

}