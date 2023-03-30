import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<About />} />
            <Route path="/projects" element={<About />} />
            <Route path="/recommendations" element={<About />} />
            <Route path="/resume" element={<About />} />
            <Route path="/contact" element={<About />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}



export default App;
