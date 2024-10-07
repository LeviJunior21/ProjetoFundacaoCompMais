import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import sbclogo from '../images/parceiros/Logo_SBC_Transparente.jpeg';
import cnpqlogo from '../images/parceiros/CNPq_v2017_rgb.png';
import paqtcpblogo from '../images/parceiros/paqtcpb_logo.png';

const Parcerias = () => {
  useDocTitle('Parcerias');

  const [parceiros] = useState([
    {
      id: 1,
      nome: 'SBC',
      descricao: 'Sociedade Brasileira de Computação',
      image: sbclogo
    },
    {
      id: 2,
      nome: 'CNPq',
      descricao: 'Conselho Nacional de Desenvolvimento Científico e Tecnológico',
      image: cnpqlogo
    },
    {
      id: 3,
      nome: 'PaqTcPB',
      descricao: 'Fundação Parque Tecnológico da Paraíba',
      image: paqtcpblogo
    },
  ]);

  const renderParceiro = (parceiro) => (
    <div key={parceiro.id} className="flex flex-col justify-between self-baseline bg-gray-100 p-5 rounded-lg shadow-lg h-full">
      <h3 className="text-2xl font-semibold text-blue-900 text-center">{parceiro.nome}</h3>
      <p className="text-gray-700 mt-4 mb-6 text-center">{parceiro.descricao}</p>
      <img src={parceiro.image} className="h-[35%] w-[35%] m-auto" style={{'objectFit': 'contain'}}></img>
    </div>
  );

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div id='parceiros' className="flex flex-col justify-center items-center mt-8 w-full bg-white py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-20" data-aos="fade-down">
          <h1 className="text-center text-4xl font-bold text-blue-900">Parceiros</h1>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {parceiros.map(parceiro => renderParceiro(parceiro))}
          </div>
        </div>
      </div>

      <div id='info' className="mb-8">
              <div className="m-auto px-4 lg:px-20" data-aos="fade-down">
                  <h2 className="text-center text-3xl font-bold text-blue-900 mb-12">Como posso tornar-me parceiro?</h2>
                  <div className="max-w-fit m-auto text-gray-700">
                    <div className="text-lg">
                    <p>Aceitamos parcerias de empresas e instituições dispostas a colaborar conosco!</p>
                    <p>Ao tornar-se parceiro da Comp+,</p>
                    <ul className="mt-2 ml-8 list-disc">
                        <li>terá acesso a talentos vinculados à nossa instituição;</li>
                        <li>garantirá maior visibilidade à sua organização;</li>
                        <li>conseguirá acesso especial a atividades organizadas por nós;</li>
                        <li>impactará positivamente a comunidade por meio de eventos públicos.</li>
                    </ul>
                    <p className="mt-4">Entre em <a href="/contato" className="text-blue-900 hover:underline">contato</a> para mais detalhes.</p>

                    </div>
                  </div>
              </div>
      </div>

      <Footer />
    </>
  );
};

export default Parcerias;