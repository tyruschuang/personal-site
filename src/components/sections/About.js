import {Stack, Typography} from "@mui/material";

export default function About() {
    return (
        <Stack direction={"column"} gap={1} sx={{
            pt: {xs: 2, md: 1},
            zIndex: 1,
        }}>
            <Typography fontSize={{xs: 16, md: 24}} fontWeight={"bold"}>
                About Me
            </Typography>
            <Typography fontSize={{xs: 12, md: 16}}>
                I'm a passionate full stack developer who thrives on creating interactive and user-friendly
                applications. I enjoy exploring the creative possibilities of JavaScript and Java, constantly learning
                new frameworks and technologies to expand my toolkit. When I'm not coding, I'm either brainstorming new
                project ideas or diving into technical documentation to deepen my understanding of software
                architecture. I believe in clean, maintainable code and the power of technology to solve meaningful
                problems.
            </Typography>
        </Stack>
    );
}
