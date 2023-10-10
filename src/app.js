import {CssBaseline, ThemeProvider} from "@mui/material";
import React from "react";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import {theme} from "./theme";
import Footer from "./components/footer";
import Home from "./components/pages/home";
import NotFound from "./components/pages/notFound";
import './app.css'
import Header from "./components/header";
import Art from "./components/pages/art";
import Code from "./components/pages/code";

function AppContent() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Outlet/>}>
                    <Route path="*" element={<NotFound/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/art" element={<Art/>}/>
                    <Route path="/code" element={<Code/>}/>
                </Route>
            </Routes>
            <Footer/>
        </>
    );
}

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <BrowserRouter>
                <AppContent/>
            </BrowserRouter>
        </ThemeProvider>
    );
}
