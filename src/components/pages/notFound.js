import {Box, Container, Typography} from "@mui/material";
import FadeIn from "../fadeIn";
import Page from "../page";

export default function NotFound() {

    return (
        <Page>
            <Container maxWidth={"xl"}
                       sx={{
                           position: "relative",
                           zIndex: "5000",
                           display: "flex",
                           alignItems: "center",
                       }}>
                <Box>
                    <FadeIn>
                        <Typography component={"p"} sx={{
                            fontSize: {xs: 40, md: 60},
                            py: 15,
                            display: "flex",
                        }}>
                            I searched far and wide, but couldn't find what you were looking for 😭
                        </Typography>
                    </FadeIn>
                </Box>
            </Container>
        </Page>
    );
}