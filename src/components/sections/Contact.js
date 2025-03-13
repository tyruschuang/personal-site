import {Stack, Typography} from "@mui/material";
import React from "react";
import Links from "./Links";

export default function Contact() {
    return (
        <Stack id={"contact"} direction={"column"} gap={2} sx={{
            pt: {xs: 4, md: 6},
            zIndex: 1,
        }}>
            <Typography fontSize={{xs: 16, md: 24}} fontWeight={"bold"}>
                Contact
            </Typography>
            <Typography fontSize={{xs: 12, md: 16}}>
                Feel free to reach out to me! I'm always open to new opportunities and collaborations.
            </Typography>
            <Links/>
        </Stack>
    );
}
