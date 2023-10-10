import {Box} from "@mui/material";
import {useNavigate} from "react-router-dom";

const pages = {
    "view my art": "/art",
    "check out my code": "/code",
    "contact me": "/contact",
}

export default function MiddlePageNav(props) {

    const navigate = useNavigate();

    return (
        <Box>
            {
                Object.entries(pages).map(([key, value]) => (
                    <Box key={key} sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        transition: "all 0.4s cubic-bezier(0.1, 1, 1.0, 0.9)",
                        pb: 1,

                        "&:hover": {
                            pl: 4,
                            cursor: "pointer",
                        }
                    }}
                         onClick={(event) => {
                             navigate(value);
                         }}>
                        {key}
                    </Box>
                ))
            }
        </Box>
    )

}