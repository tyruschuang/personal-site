import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
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



export default App;
