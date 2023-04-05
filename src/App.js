import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import ModeButton from './components/ModeButton';

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
  return (
    <div className="container">
      <BrowserRouter>
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
  );
}
