import {Box, Container, Typography} from "@mui/material";
import FadeIn from "../fadeIn";
import Page from "../page";
import HighlightText from "../highlightText";
import Grid2 from "@mui/material/Unstable_Grid2";
import {me} from "../../assets/constants";

export default function Home() {

    const images = [
        [
            {
                image: require("../../assets/images/whale boat.png"),
                title: "Whale Boat",
            },
            {
                image: require("../../assets/images/industrial.png"),
                title: "Industrial",
            },
            {
                image: require("../../assets/images/big oriental.png"),
                title: "Oriental",
            }
        ]
    ]

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
                    <Grid2 container>
                        <Grid2 xs={12} md={6}>
                            <Box sx={{}}>
                                <FadeIn>
                                    Welcome to my corner on the internet
                                </FadeIn>
                            </Box>
                        </Grid2>
                        <Grid2 xs={12} md={6}>
                            <FadeIn>
                                <Box component={"img"} src={me} sx={{
                                        filter: "grayscale(100%)",
                                }} />
                            </FadeIn>
                        </Grid2>
                    </Grid2>
                </Box>
            </Container>
        </Page>
    );
}
