import {Box} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function MiddlePageNav(props) {

    const { pages } = props;

    const navigate = useNavigate();

    return (
        <Box>
            {
                Object.entries(pages).map(([key, value]) => (
                    <Box component={"a"} href={value} target={"_blank"} key={key} sx={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "flex",
                        justifyContent: "flex-start",
                        transition: "all 0.4s cubic-bezier(0.1, 1, 1.0, 0.9)",
                        pb: 1,

                        "&:hover": {
                            pl: 4,
                            cursor: "pointer",
                        }
                    }}>
                        {key}
                    </Box>
                ))
            }
        </Box>
    )

}