import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Contato from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import AboutUs from './pages/Sobre';
import ProgramasProjetos from './pages/ProgramasProjetos';
import Eventos from './pages/Eventos';
import Recursos from './pages/Recursos';
import Doacao from './pages/Doacao';
import Noticias from './pages/Noticias';
import Parcerias from './pages/Parcerias';

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
            <Route path="/contato" element={<Contato />} />
            <Route path="/doacao" element={<Doacao />} /> 
            <Route path='/sobre' element={<AboutUs />}/>
            <Route path='/programas_projetos' element={<ProgramasProjetos />}/>
            <Route path='/eventos' element={<Eventos/>} />
            <Route path='/recursos' element={<Recursos/>} />
            <Route path='/noticias' element={<Noticias/>} />
            <Route path='/parcerias' element={<Parcerias/>} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
