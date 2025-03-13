import {Chip, IconButton, Stack} from "@mui/material";
import {Article, Email, GitHub, LinkedIn} from "@mui/icons-material";

export default function Links() {
    return (
        <Stack direction={"row"} gap={1} sx={{
            zIndex: 1,
            justifyContent: "space-between",
            alignItems: "center",
        }}>
            <Stack direction={"row"}>
                <IconButton href={"https://github.com/tyruschuang/"} target={"_blank"}>
                    <GitHub sx={{
                        fontSize: {xs: 30, md: 40}
                    }}/>
                </IconButton>
                <IconButton href={"https://www.linkedin.com/in/tyruschuang/"} target={"_blank"}>
                    <LinkedIn sx={{
                        fontSize: {xs: 30, md: 40}
                    }}/>
                </IconButton>
                <IconButton href={"https://www.linkedin.com/in/tyruschuang/"} target={"_blank"}>
                    <Article sx={{
                        fontSize: {xs: 30, md: 40}
                    }}/>
                </IconButton>
                <IconButton href={"mailto:tyruschuang@outlook.com"} target={"_blank"}>
                    <Email sx={{
                        fontSize: {xs: 30, md: 40}
                    }}/>
                </IconButton>
            </Stack>
            <Chip label={"Open to Work"} variant={"outlined"} color={"success"} sx={{
                fontSize: {xs: 12, md: 16},
                p: 1,
                borderRadius: 2,
            }}/>
        </Stack>
    );
}
