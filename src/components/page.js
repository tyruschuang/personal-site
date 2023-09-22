import {Box} from "@mui/material";

export default function Page(props) {

    const header = props.header === undefined ? false : props.header;
    const particles = props.particles === undefined ? true : props.header;

    return (
        <Box>
            {props.children}
        </Box>
    )

}