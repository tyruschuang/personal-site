import {Box, Container, Typography} from "@mui/material";
import FadeIn from "../fadeIn";
import Page from "../page";
import HighlightText from "../highlightText";
import Grid2 from "@mui/material/Unstable_Grid2";
import {me} from "../../assets/constants";
import UnderlineText from "../underlineText";
import MiddlePageNav from "../middlePageNav";

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
                    gap: {xs: 8, md: 15},
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
                        <Grid2 xs={12} md={6}>
                            <Box sx={{}}>
                                <FadeIn delay={500}>
                                    Welcome to my corner on the internet!
                                    <br/>
                                    <br/>
                                    I'm a high school student in the California Bay Area interested in studying computer science and business in college.
                                    <br/>
                                    <br/>
                                    Currently working on College Apps
                                    <br/>
                                    <br/>
                                    <MiddlePageNav/>
                                </FadeIn>
                            </Box>
                        </Grid2>
                        <Grid2 xs={12} md={6}>
                            <FadeIn delay={750}>
                                <Box component={"img"} src={me} alt={"Me!"} sx={{
                                    width: "100%",
                                    filter: "grayscale()",
                                    position: "relative",
                                    top: {xs: 0, md: -225},
                                }}/>
                            </FadeIn>
                        </Grid2>
                    </Grid2>
                </Box>
            </Container>
        </Page>
    );
}
