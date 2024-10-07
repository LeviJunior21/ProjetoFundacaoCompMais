import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import {useDocTitle} from '../components/CustomHook';

const AboutUs = () => {
    useDocTitle('Sobre Nós');

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div id='about-us' className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="fade-down">
                    <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                        <div className="flex">
                            <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">
                                Sobre Nós
                            </h1>
                        </div>

                        {/* História e Missão */}
                        <div className="my-8">
                            <h2 className="text-2xl text-blue-900 font-bold">História e Missão</h2>
                            <p className="mt-4 text-gray-900">
                            Fundada em 2012, a Fundação COMP+ oferece suporte administrativo a
                            Instituições Científicas e Tecnológicas (ICTs) e Universidades Públicas para a execução de
                            projetos voltados à pesquisa científica, desenvolvimento, inovação e prestação de
                            serviços técnicos especializados. A COMP+ pretende alcançar excelência na gestão
                            administrativa e financeira dos projetos e atividades que apoia, operando em estrita
                            conformidade com os princípios da legalidade, impessoalidade, moralidade, publicidade,
                            economicidade e eficiência. A fundação se dedica a proteger os interesses das
                            instituições que apoia e a manter um alto nível de competência profissional entre seus
                            colaboradores.
                            </p>
                            <p className="mt-4 text-gray-900">
                            A COMP+ é uma organização privada sem fins lucrativos, regida pelo Código Civil
                            Brasileiro e estabelecida como Fundação de Apoio conforme a Lei no 8.958/1994, com
                            credenciamento no Ministério da Ciência, Tecnologia e Inovações (MCTI) e no Ministério
                            da Educação (MEC). Suas atividades estão sujeitas às disposições da Lei no 10.973/2004
                            ("Lei da Inovação"), bem como aos decretos reguladores e portarias interministeriais do
                            MEC e MCTI pertinentes. Além disso, como fundação de direito privado, a COMP+ está
                            sujeita à supervisão do Ministério Público do Estado da Paraíba.
                            </p>
                        </div>

                        {/* Equipe e Governança */}
                        <div className="my-8">
                            <h2 className="text-2xl text-blue-900 font-bold">Equipe e Governança</h2>
                            <p className="mt-4 text-gray-900">
                                Nossa equipe é composta por um grupo diversificado de especialistas dedicados à missão da fundação. 
                                A liderança da fundação inclui membros da diretoria, conselhos de administração e uma equipe técnica 
                                que coordena nossos projetos e atividades. Juntos, trabalhamos para garantir a eficiência, transparência 
                                e o impacto de nossas ações.
                            </p>

                            <ul className="mt-4 list-disc list-inside text-gray-900">
                                <li><strong>Diretor Executivo:</strong> Dr. João Silva</li>
                                <li><strong>Conselho Administrativo:</strong> Profa. Maria Souza, Dr. Lucas Almeida</li>
                                <li><strong>Coordenador Técnico:</strong> Eng. Carla Oliveira</li>
                            </ul>
                        </div>

                        {/* Relatórios e Transparência */}
                        <div className="my-8">
                            <h2 className="text-2xl text-blue-900 font-bold">Relatórios e Transparência</h2>
                            <p className="mt-4 text-gray-900">
                                A transparência é um dos nossos pilares. Todos os nossos relatórios anuais, políticas de governança e 
                                declarações de impacto estão disponíveis para consulta. Nosso compromisso com a transparência garante que 
                                todas as nossas ações sejam realizadas com responsabilidade e prestação de contas à sociedade.
                            </p>

                            <div className="mt-4">
                                <a href="/relatorio-2023.pdf" target="_blank" rel="noreferrer" className="text-blue-900 underline">
                                    Relatório Anual 2023
                                </a>
                                <br />
                                <a href="/politicas.pdf" target="_blank" rel="noreferrer" className="text-blue-900 underline">
                                    Políticas de Governança
                                </a>
                                <br />
                                <a href="/impacto.pdf" target="_blank" rel="noreferrer" className="text-blue-900 underline">
                                    Declaração de Impacto
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AboutUs;
