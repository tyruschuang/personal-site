import {Box, Container, Typography} from "@mui/material";
import FadeIn from "../fadeIn";
import Page from "../page";
import HighlightText from "../highlightText";
import Grid2 from "@mui/material/Unstable_Grid2";

export default function Home() {

    return (
        <Page>
            <Container maxWidth={"xl"}
                       sx={{
                           position: "relative",
                           zIndex: "5000"
                       }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: {xs: 8, md: 10},
                }}>
                    {/* Landing text */}
                    <Box>
                        <FadeIn>
                            <Typography component={"p"} display={"flex"} sx={{
                                fontSize: {xs: 40, md: 60},
                                whiteSpace: "pre",
                            }}>
                                {"Hi, I'm "}<HighlightText>Tyrus</HighlightText>
                            </Typography>
                        </FadeIn>
                        <FadeIn delay={250}>
                            <Typography
                                sx={{
                                    fontSize: {xs: 25, md: 35},
                                }}>
                                Developer, artist, student.
                            </Typography>
                        </FadeIn>
                    </Box>
                    <Grid2 container spacing={4}>
                        <Grid2 xs={12} md={8}>
                            <Box sx={{}}>
                                <FadeIn delay={500}>
                                    Welcome to my corner on the internet!
                                    <br/>
                                    <br/>
                                    I'm a high school student in the California Bay Area interested in studying computer science and business in college.
                                    <br/>
                                    <br/>
                                    Currently working on College Apps 😭
                                </FadeIn>
                            </Box>
                        </Grid2>
                    </Grid2>
                </Box>
            </Container>
        </Page>
    );
}
