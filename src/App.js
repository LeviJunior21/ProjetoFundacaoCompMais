import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import AboutUs from './pages/Sobre';
import ProgramasProjetos from './pages/ProgramasProjetos';
import Eventos from './pages/Eventos';
import Doacao from './pages/Doacao';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/doacao" element={<Doacao />} /> 
            <Route path='/sobre' element={<AboutUs />}/>
            <Route path='/programas_projetos' element={<ProgramasProjetos />}/>
            <Route path='/eventos' element={<Eventos/>} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
