import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

const Doacao = (props) => {

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div id='demo' className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                    <form id="demoProductForm">
                        <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                            <div className="flex">
                                <p className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl" style={{'marginLeft': '-20px'}}>Doe para a nossa instituição</p>
                            </div>
                            <div style={{'padding': '30px 0px'}}>
                            <p style={{'fontWeight': 'bold', 'padding': '30px 0px', 'marginLeft': '-20px', 'fontSize': '1.4rem'}}>Por que doar para a COMP+?</p>
                            
                            <ul style={{'listStyleType': 'inherit', 'marginLeft:': '20px'}}>
                                <li>Impacto direto: Sua doação fortalece projetos que fomentam a pesquisa, o desenvolvimento e a inovação em instituições de referência.</li>
                                <li>Transparência e eficiência: Seguimos rigorosamente os princípios de legalidade, moralidade, publicidade e eficiência em todos os nossos processos.</li>
                                <li>Inovação que transforma: Contribua para projetos que fazem a diferença no progresso científico e tecnológico do Brasil.</li>
                            </ul>
                            
                            <p style={{'padding': '30px 0px'}}>Seja parte desta missão e ajude a criar um futuro mais inovador e promissor. Cada doação faz a diferença!</p>
                            <p style={{'padding': '0px 0px'}}>Doe agora e ajude a ciência a avançar!</p>

                          
                            </div>
                            <div className="flex items-center my-4">
                                <input 
                                    id="checkbox-1" 
                                    aria-describedby="checkbox-1" 
                                    type='radio'
                                    name="donationType"
                                    className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" 
                                    value="business_management_system" 
                                 />
                                <label htmlFor="checkbox-1" className="ml-3 text-lg font-medium text-gray-900">Doações únicas</label>
                            </div>
                            <div className="flex items-center my-4">
                                <input 
                                    id="checkbox-1" 
                                    aria-describedby="checkbox-1" 
                                    type='radio'
                                    name="donationType"
                                    className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                                    value="school_management_portal" 
                                    />
                                <label htmlFor="checkbox-1" className="ml-3 text-lg font-medium text-gray-900">Doações mensais</label>
                            </div>
                            <div className="flex items-center my-4">
                                <input 
                                    id="checkbox-1" 
                                    aria-describedby="checkbox-1" 
                                    type='radio'
                                    name="donationType"
                                    className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" 
                                    value="payroll_management_system"  
                                />
                                <label htmlFor="checkbox-1" className="ml-3 text-lg font-medium text-gray-900">Doações corporativas</label>
                            </div>
                        <div className="" style={{'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'}}>
                            <button type="submit" id="submitBtn" className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-300 focus:outline-none focus:shadow-outline">
                                Fazer Doação
                            </button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>


    )
}

export default Doacao;