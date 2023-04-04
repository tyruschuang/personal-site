import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import ModeButton from './components/ModeButton';
import { useState } from 'react';

const lightTheme = {
  type: 'light',
  buttonBg: '#ffffff',
  buttonColor: '#333333',
  buttonBgHover: '#333333',
  buttonColorHover: '#ffffff',
};

const darkTheme = {
  type: 'dark',
  buttonBg: '#333333',
  buttonColor: '#ffffff',
  buttonBgHover: '#ffffff',
  buttonColorHover: '#333333',
};

function App() {

  const [theme, setTheme] = useState(lightTheme);

  const handleToggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <BrowserRouter>
          <Header />
          <ModeButton onClick={handleToggleTheme}/>
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



export default App;
