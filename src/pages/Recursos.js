import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';

const Recursos = () => {
  useDocTitle('Recursos');

  return (
    <>
      <div>
        <NavBar />
      </div>

      <div id="recursos" className="flex flex-col justify-center items-center w-full bg-white py-12 lg:py-24">
        <div className="container mx-auto px-4 lg:px-20" data-aos="fade-down">
          <h1 className="text-center text-4xl font-bold text-blue-900">Recursos</h1>

          {/* Biblioteca de Recursos */}
          <section id="biblioteca-recursos" className="mt-12">
            <h2 className="text-3xl font-semibold text-blue-900">Biblioteca de Recursos</h2>
            <p className="text-gray-700 mt-4">
              Explore nossa coleção de materiais educacionais, artigos técnicos, whitepapers, vídeos e apresentações que cobrem temas avançados e introdutórios em tecnologia.
            </p>
            <ul className="list-disc list-inside mt-6">
              <li className="mt-2">
                <strong>Artigo:</strong> "Inteligência Artificial e Ética nas Decisões Automatizadas" - <a href="/recursos#recursos" className="text-blue-900 hover:underline">Leia mais</a>
              </li>
              <li className="mt-2">
                <strong>Whitepaper:</strong> "A Computação Quântica: O Futuro do Processamento de Dados" - <a href="/recursos#recursos" className="text-blue-900 hover:underline">Baixar PDF</a>
              </li>
              <li className="mt-2">
                <strong>Vídeo:</strong> "Introdução ao Machine Learning com Python" - <a href="/recursos#recursos" className="text-blue-900 hover:underline">Assista agora</a>
              </li>
              <li className="mt-2">
                <strong>Apresentação:</strong> "Inovações em Redes Neurais Profundas" - <a href="/recursos#recursos" className="text-blue-900 hover:underline">Visualizar slides</a>
              </li>
            </ul>
          </section>

          {/* Ferramentas e Tutoriais */}
          <section id="ferramentas-tutoriais" className="mt-12">
            <h2 className="text-3xl font-semibold text-blue-900">Ferramentas e Tutoriais</h2>
            <p className="text-gray-700 mt-4">
              Aqui você encontra links para ferramentas úteis e tutoriais passo a passo sobre como aplicá-las em projetos de computação.
            </p>
            <ul className="list-disc list-inside mt-6">
              <li className="mt-2">
                <strong>Ferramenta:</strong> "Jupyter Notebooks" - Ambiente interativo para programação Python e Data Science. <a href="/recursos#recursos" className="text-blue-900 hover:underline">Acessar tutorial</a>
              </li>
              <li className="mt-2">
                <strong>Ferramenta:</strong> "Git e GitHub" - Controle de versão colaborativo. <a href="/recursos#recursos" className="text-blue-900 hover:underline">Guia para Iniciantes</a>
              </li>
              <li className="mt-2">
                <strong>Tutorial:</strong> "Desenvolvimento de APIs RESTful com Node.js" - <a href="/recursos#recursos" className="text-blue-900 hover:underline">Leia o tutorial</a>
              </li>
            </ul>
          </section>

          {/* Publicações */}
          <section id="publicacoes" className="mt-12">
            <h2 className="text-3xl font-semibold text-blue-900">Publicações</h2>
            <p className="text-gray-700 mt-4">
              Acesse as publicações oficiais da fundação e seus parceiros, incluindo relatórios de pesquisa e estudos.
            </p>
            <ul className="list-disc list-inside mt-6">
              <li className="mt-2">
                <strong>Relatório:</strong> "Estudo sobre o impacto da Inclusão Digital em Comunidades Rurais" - <a href="/recursos#recursos" className="text-blue-900 hover:underline">Visualizar</a>
              </li>
              <li className="mt-2">
                <strong>Publicação:</strong> "Tendências em Automação de Testes de Software com IA" - <a href="/recursos#recursos" className="text-blue-900 hover:underline">Baixar PDF</a>
              </li>
              <li className="mt-2">
                <strong>Parceria:</strong> "Relatório de Colaboração em Pesquisa de Redes 5G" - <a href="/recursos#recursos" className="text-blue-900 hover:underline">Leia mais</a>
              </li>
              <li className="mt-2">
                <strong>Artigo:</strong> "A Evolução do Processamento de Linguagem Natural" - <a href="/recursos#recursos" className="text-blue-900 hover:underline">Acessar publicação</a>
              </li>
            </ul>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Recursos;