import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import LandingPage from './components/Landing';
import About from './components/About';
import { useState } from 'react';
import { colors } from './Colors';
import ScrollToTop from './components/util/ScrollToTop';

const lightTheme = {
  type: 'light',

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

  elevation: 'rgba(0, 0, 0, 0.25)'
}

const darkTheme = {
  type: 'dark',

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

  elevation: 'rgba(255, 255, 255, 0)'
}

export default function App() {

  const [theme, setTheme] = useState(lightTheme);

  function handleThemeClick() {
    setTheme(theme === lightTheme ? darkTheme : lightTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <BrowserRouter>
          <ScrollToTop />
          <Header modeOnClick={handleThemeClick}/>
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route index element={<LandingPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<LandingPage />} />
              <Route path="/recommendations" element={<LandingPage />} />
              <Route path="/contact" element={<LandingPage />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
