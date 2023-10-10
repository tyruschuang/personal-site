import {Backdrop, Box, Container, Typography,} from "@mui/material";
import {useState} from "react";
import {pages} from "../assets/constants";
import {useNavigate} from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2";
import {slideup} from "../styles/transition";
import {hover} from "../styles/hover";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

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
                <Box sx={{
                    display: "flex",
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
            </Box>
            <Backdrop
                open={Boolean(menuOpen)}
                onClick={() => {
                    setMenuOpen(false);
                }}
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
            >
                <Grid2
                    container
                    spacing={3}
                    justifyContent="center"
                    alignItems="center"
                >
            {Object.entries(pages).map((page, index) => (
                <Grid2
                    justifyContent="center"
                    alignItems="center"
                    xs={4}
                >
                    <Box
                        key={`${page}-${menuOpen}`}
                        onClick={() => setMenuOpen(false)}
                        sx={{
                            ...slideup(index, menuOpen),
                        }}
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
                                    ...hover,
                                }}
                                href={`/${page}`}
                            >
                                {page.map((item) => (
                                    <div>
                                        {item}
                                    </div>
                                ))}
                            </Box>
                        </Typography>
                    </Box>
                </Grid2>
            ))}
                </Grid2>
            </Backdrop>
        </Container>);
}

export default Header;
