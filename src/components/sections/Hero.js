import {Avatar, Stack, Typography} from "@mui/material";
import profile from "../../assets/profile.png";

export default function Hero() {
    return (
        <Stack id={"about"} direction={"row"} gap={4} sx={{
            pt: {xs: 3, md: 0},
            zIndex: 1,
        }}>
            <Stack direction={"column"} gap={1}>
                <Typography fontSize={{xs: 24, md: 48}} fontWeight={"bold"}>
                    Hi, I'm Tyrus 👋
                </Typography>
                <Typography fontSize={{xs: 16, md: 24}}>
                    Full stack developer, Java(Script) enthusiast, and student. I love to learn and build interactive
                    applications.
                </Typography>
            </Stack>
            <Avatar
                src={profile}
                alt="Tyrus Chuang"
                sx={{
                    width: 150,
                    height: 150
                }}
            />
        </Stack>
    );
}
