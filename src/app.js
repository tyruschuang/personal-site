import {Box, Container, CssBaseline, Divider, ThemeProvider} from "@mui/material";
import React from "react";
import {theme} from "./theme";
import Hero from "./components/sections/Hero";
import './app.css';
import Header from "./components/Header";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";

function AppContent() {
    return (
        <>
            <Box sx={{
                zIndex: -1,
                position: "absolute",
                width: "100vw",
                height: "50vh",
                background: "linear-gradient(90deg, rgba(0, 128, 255, 0.3) 0%, rgba(160, 0, 128, 0.3) 50%, rgba(0, 128, 255, 0.3) 100%)",
                maskImage: "radial-gradient(ellipse at top, white 0%, transparent 80%)",
                animation: "gradientAnimation 20s ease infinite",
                '@keyframes gradientAnimation': {
                    '0%': {
                        backgroundPosition: "0% 0%",
                        backgroundSize: "290%",
                    },
                    '35%': {
                        backgroundPosition: "100% 0%",
                        backgroundSize: "220%",
                    },
                    '75%': {
                        backgroundPosition: "180% 0%",
                        backgroundSize: "250%",
                    },
                    '100%': {
                        backgroundPosition: "0% 0%",
                        backgroundSize: "290%",
                    }
                }
            }}/>
            <Container maxWidth={"md"} sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Header/>
                <Box>
                    <Hero/>
                    <Divider sx={{
                        mt: {xs: 2, md: 3},
                        mb: {xs: 1, md: 2},
                    }}/>
                    <About/>
                    <Experience/>
                    <Projects/>
                    <Contact/>
                </Box>
                <Footer/>
            </Container>
        </>
    );
}

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <AppContent/>
        </ThemeProvider>
    );
}