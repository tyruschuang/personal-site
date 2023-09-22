import {Box} from "@mui/material";
import {gradient} from "../assets/constants";

export default function Duotone(props) {

    const { image, alt } = props;

    return (
        <Box sx={{

        }}>
            <Box src={image} alt={alt} sx={{

            }}/>
        </Box>
    )

}