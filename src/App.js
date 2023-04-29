import { useEffect, useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { colors } from "./Colors";
import About from "./components/About";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Portfolio from "./components/Portfolio";
import NotFound from "./components/common/NotFound";

const lightTheme = {
  type: "light",

  primary: {
    1: colors.neutral[100],
    2: colors.neutral[200],
    3: colors.neutral[300],
  },

  secondary: {
    1: colors.neutral[700],
    2: colors.neutral[500],
    3: colors.neutral[400],
  },

  accent: {
    1: colors.blue[600],
    2: colors.blue[400],
    3: colors.blue[300],
  },

  elevation: "rgba(0, 0, 0, 0.25)",
};

const darkTheme = {
  type: "dark",

  primary: {
    1: colors.neutral[800],
    2: colors.neutral[600],
    3: colors.neutral[500],
  },

  secondary: {
    1: colors.neutral[100],
    2: colors.neutral[200],
    3: colors.neutral[400],
  },

  accent: {
    1: colors.blue[200],
    2: colors.blue[300],
    3: colors.neutral[100],
  },

  elevation: "rgba(255, 255, 255, 0)",
};

export default function App() {
  const [theme, setTheme] = useState(lightTheme);

  function handleThemeClick() {
    let newTheme = theme === lightTheme ? darkTheme : lightTheme;
    localStorage.setItem("storedTheme", JSON.stringify(newTheme));
    setTheme(newTheme);
  }

  useEffect(() => {
    const localTheme = JSON.parse(localStorage.getItem("storedTheme"));

    if (localTheme == null) {
      const darkModeMediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      const prefersDarkMode = darkModeMediaQuery.matches;

      if (prefersDarkMode) {
        localStorage.setItem("storedTheme", JSON.stringify(darkTheme));
        setTheme(darkTheme);
      } else {
        localStorage.setItem("storedTheme", JSON.stringify(lightTheme));
      }
    } else {
      setTheme(localTheme);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <BrowserRouter>
          <Header modeOnClick={handleThemeClick} />
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route index element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/recommendations" element={<Landing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
