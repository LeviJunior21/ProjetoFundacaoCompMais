import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <>
            <div className="my-4 py-4" id='portfolio'>
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Depoimentos e Impacto</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">                            
                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Levi Júnior</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    Nosso Sistema de Gestão Empresarial é um sistema robusto e facilmente escalonável que agiliza as operações comerciais, aumenta a eficiência e, em última análise, impulsiona o crescimento e a lucratividade do seu negócio.
                                    Com recursos como gerenciamento de funcionários, controle financeiro e muitos outros módulos para gerenciar com eficácia todos os aspectos de um negócio.
                                    Todos os dados são armazenados na nuvem e, como tal, são facilmente acessíveis a partir de todos os dispositivos e de qualquer local.
                                </p>
                                <div className="flex justify-center my-4">
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Matheus Hensley</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    Nosso abrangente Portal de Gestão Escolar é a única solução necessária para qualquer instituição.
                                    O Portal de Gestão Escolar (SMP) é uma ferramenta que pode ajudar instituições de ensino de todos os tipos a gerenciar suas tarefas administrativas, automatizar processos e agilizar a comunicação entre professores, alunos, pais e administradores. 
                                    O software pode ser usado para gerenciar todos os aspectos das operações escolares, incluindo matrículas, frequência, notas, horários e muito mais.
                                </p>
                                <div className="flex justify-center my-4">
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Matheus Honório</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                O Sistema de Gerenciamento de Folha de Pagamento automatiza o processo de pagamento de funcionários para empresas e organizações de diversos portes. Ajuda a garantir que seus funcionários sejam pagos com precisão e dentro do prazo, ao mesmo tempo que reduz o tempo e o esforço necessários para gerenciar a folha de pagamento manualmente. Com esse sistema instalado, você desfruta de benefícios como: 
                                </p>
                                <div className="flex justify-center my-4">
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Demétrio Mestre</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    Nosso sistema de gerenciamento de eventos ajuda a gerenciar diversos tipos de eventos, sejam casamentos, enterros ou qualquer tipo de evento. Com um menu facilmente personalizável, você define a experiência do usuário e torna seu evento totalmente personalizável e memorável.
                                    Com casos de uso já registrados para vários eventos, podemos garantir uma plataforma de gerenciamento de eventos sem estresse.
                                </p>
                                <div className="flex justify-center my-4">
                                </div>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;