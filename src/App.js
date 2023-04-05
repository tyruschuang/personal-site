import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { ThemeProvider, themeProvider } from 'styled-components';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import { useState } from 'react';

const lightTheme = {
  type: 'light',

  colors: {
    primary: '#fff',
    accent: '#0077c2',
    opposite: '#333',
  },

  home: {
    typewriter: '#3677FF',
    burger: '#eee',
    wave1: '#736EFE',
    wave2: '#ABDCFF',
  },

  footer: {
    background: '#f4f4f4'
  },
};

export default function App() {

  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <BrowserRouter>
          {/* <ModeButton onClick={toggleprops.theme}/> */}
          <Header />
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<Home />} />
              <Route path="/skills" element={<Home />} />
              <Route path="/projects" element={<Home />} />
              <Route path="/recommendations" element={<Home />} />
              <Route path="/resume" element={<Home />} />
              <Route path="/contact" element={<Home />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
