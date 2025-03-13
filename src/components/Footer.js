import {Divider, Stack, Typography} from "@mui/material";
import React from "react";

export default function Footer() {

    return (
        <Stack direction={"column"} sx={{
            mb: 8,
            mt: 2,
            width: "100%",
        }}>
            <Divider sx={{
                my: 4
            }}/>
            <Stack direction={"row"} gap={2} sx={{
                justifyContent: "space-between",
                width: "100%",
            }}>
                <Typography fontSize={{xs: 12, md: 16}} color={"text.secondary"}>
                    © {new Date().getFullYear()} Tyrus Chuang
                </Typography>
                <Typography fontSize={{xs: 12, md: 16}} color={"text.secondary"}>
                    Built with React and Material-UI
                </Typography>
            </Stack>
        </Stack>
    );
}
