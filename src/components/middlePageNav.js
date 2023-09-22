import {pages} from "../assets/constants";
import {Box} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function MiddlePageNav(props) {

    const navigate = useNavigate();

    return (
        <Box>
            {
                Object.entries(pages).map(([key, value]) => (
                    <Box key={key} sx={{
                        fontSize: 30,
                        display: "flex",
                        justifyContent: "flex-end",
                        transition: "all 0.4s cubic-bezier(0.1, 1, 1.0, 0.9)",

                        "&:hover": {
                            pr: 4,
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