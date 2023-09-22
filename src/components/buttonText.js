import {Box} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function ButtonText(props) {

    const navigate = useNavigate();

    const {text, addSpace} = props;

    return (
        <Box sx={{
            display: "inline-flex",
        }}
             onClick={(event) => {
                 navigate("/")
             }}>
            <Box className={`gradient-text ${addSpace ? "space" : ""}`} sx={{
                fontSize: 30,
                display: "inline-flex",
                whiteSpace: "pre",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.1, 1, 1.0, 0.9)",

                "&:hover": {
                    px: 4,
                    transform: "translateY(10px) scale(1.1) rotate(-6deg)",
                }
            }}
            >
                {text}
            </Box>
        </Box>
    )

}