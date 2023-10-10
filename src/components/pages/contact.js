import {Backdrop, Box, Container, ImageList, ImageListItem, Typography} from "@mui/material";
import Page from "../page";
import {images, socials} from "../../assets/constants";
import {useState} from "react";
import FadeIn from "../fadeIn";
import useScrollLock from "../../lib/scrollLock";
import useHideHeader from "../../lib/hideHeader";
import HighlightText from "../highlightText";
import Grid2 from "@mui/material/Unstable_Grid2";
import MiddlePageNav from "../middlePageNav";

export default function Contact() {

    return (
        <Page>
            <Container maxWidth={"xl"} sx={{
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
                                Want to get in touch?
                            </Typography>
                        </FadeIn>
                        <FadeIn delay={250}>
                            <Typography
                                sx={{
                                    fontSize: {xs: 25, md: 35},
                                }}>
                                Contact me for commissions, collaborations, or <HighlightText>just to say hi</HighlightText>!
                            </Typography>
                        </FadeIn>
                    </Box>
                    <Grid2 container spacing={4}>
                        <Grid2 xs={12} md={8}>
                            <FadeIn delay={500}>
                                <MiddlePageNav pages={socials}/>
                            </FadeIn>
                        </Grid2>
                    </Grid2>
                </Box>
            </Container>
        </Page>
    );
}
