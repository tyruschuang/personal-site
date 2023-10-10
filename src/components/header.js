import {Backdrop, Box, Container, Divider, Fade, Slide, Stack, Typography,} from "@mui/material";
import {useState, useRef} from "react";
import {pages} from "../assets/constants";
import {useNavigate} from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2";
import {slideup} from "../styles/transition";
import {hover} from "../styles/hover";
import Hamburger from 'hamburger-react';
import useScrollLock from "../lib/scrollLock";
import useHideHeader from "../lib/hideHeader";
import FadeIn from "./fadeIn";

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const {lockScroll, unlockScroll} = useScrollLock()
    const {hideHeader, showHeader} = useHideHeader();

    const handleOpen = (item) => {
        setMenuOpen(true);
        lockScroll();
    }

    const handleClose = () => {
        setMenuOpen(false);
        unlockScroll();
    }

    const toggle = () => {
        if (menuOpen) {
            handleClose();
        } else {
            handleOpen();
        }
    }

    const navigate = useNavigate()

    return (
        <Container maxWidth="xl" id={"header"}>
            <Box sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                pt: 15,
                pb: 3,
            }}>
                {/* Regular nav */}
                <Box sx={{
                    display: {xs: "none", md: "flex"},
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 7,
                }}>
                    {Object.entries(pages).map(([key, value]) => <Box key={key} sx={{
                        fontSize: 23,

                        "&:hover": {
                            cursor: "pointer",
                        }
                    }}
                                                                      onClick={(event) => {
                                                                          navigate(value);
                                                                      }}>
                        {key}
                    </Box>)}
                </Box>

                {/* Mobile nav */}
                <Box sx={{
                    display: {xs: "flex", md: "none"},
                    justifyContent: "space-between",
                    zIndex: 50000,
                }}>
                    <Hamburger toggled={menuOpen} toggle={toggle}/>
                </Box>
            </Box>
            <Fade
                in={menuOpen}
                onClick={() => {
                    setMenuOpen(false);
                }}
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    zIndex: 10000,
                    backgroundColor: "#fff",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                        <Stack
                            direction={"column"}
                        >
                    {Object.entries(pages).map((page, index) => (
                            <FadeIn key={`${page}-${menuOpen}`} delay={200 + index * 100}>
                                <Box
                                    key={`${page}-${menuOpen}`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <Typography
                                        textAlign="center"
                                        fontSize={25}
                                    >
                                        <Box
                                            component="a"
                                            sx={{
                                                color: "inherit",
                                                textDecoration: "none",
                                            }}
                                            href={`${page[1]}`}
                                        >
                                            {page[0]}
                                        </Box>
                                    </Typography>
                                    <Divider sx={{
                                        mt: 0,
                                        mb: 4,
                                    }}/>
                                </Box>
                            </FadeIn>
                    ))}
                        </Stack>
            </Fade>
        </Container>);
}

export default Header;
