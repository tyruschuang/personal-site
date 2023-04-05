import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Home from './components/home/Home';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Skills from './components/skills/Skills';
import { useState } from 'react';

const lightTheme = {
  type: 'light',

  colors: {
    primary: '#fff',
    accent: '#0077c2',
    opposite: '#333',

    gradient1: '#66A6FF',
    gradient2: '#4C83FF',
  },

  home: {
    typewriter: '#1A69E8',
    burger: '#eee',
  },

  footer: {
    background: '#f4f4f4'
  },

  skills: {
    background: '#f4f4f4',
    barBackground: '#ccc',
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
              <Route path="/skills" element={<Skills />} />
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
