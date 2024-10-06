import React from 'react';

const Depoimentos = () => {
    return (
        <>
            <div className="my-4 py-4" id='depoimentos'>
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
                                Participar do Treinamento em Desenvolvimento Web foi um divisor de águas para mim. 
                                Não apenas aprendi as habilidades técnicas necessárias para o mercado, mas também desenvolvi uma nova confiança nas minhas capacidades. 
                                A fundação me deu a oportunidade de transformar meu conhecimento em algo prático e aplicável. 
                                Hoje, estou no caminho certo para me tornar um desenvolvedor de sucesso.
                                </p>
                                <div className="flex justify-center my-4">
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Mateus Honório</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                O Hackathon de Tecnologia foi uma experiência incrível! 
                                Pude me conectar com profissionais da área, trabalhar em equipe e criar soluções reais para problemas do dia a dia. 
                                A mentoria e o suporte da fundação durante todo o evento foram excepcionais. 
                                Eu me sinto mais preparado e motivado para seguir minha carreira no campo da tecnologia.
                                </p>
                                <div className="flex justify-center my-4">
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Matheus Hensley</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                Participar do Treinamento em Desenvolvimento de Apps Mobile me abriu portas que eu nunca imaginei. 
                                As aulas práticas e o acompanhamento próximo da equipe da fundação fizeram toda a diferença. 
                                Hoje, já estou desenvolvendo meus próprios aplicativos, e só posso agradecer à fundação por essa oportunidade incrível.
                                </p>
                                <div className="flex justify-center my-4">
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Demétrio Mestre</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                Antes de conhecer a fundação, eu não tinha acesso às ferramentas e ao conhecimento necessário para me aprofundar em tecnologia. 
                                Graças aos programas de inclusão digital, consegui aprender a usar computadores e a internet de forma eficiente, o que me ajudou a encontrar novas oportunidades de emprego.
                                Sou muito grato por todo o apoio e por fazer parte de algo que está mudando a vida de tantas pessoas.
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

export default Depoimentos;