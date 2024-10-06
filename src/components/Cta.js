import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Cta = () => {
    return (
        <div className="w-full flex items-center justify-center text-white bg-blue-900 cta">
            <div className="mx-8 w-full h-96 text-center lg:text-left py-16 px-12 flex lg:justify-between items-center">
                <div className="w-full flex flex-col lg:flex-row lg:justify-around">
                    <div className="mb-4">
                        <p className='text-2xl md:text-4xl font-bold mb-4'>Pronto para fazer a diferença na comunidade?</p>
                        <p className="text-lg md:text-2xl">Conecte-se conosco e vamos juntos transformar ideias em ações significativas! <span className='font-black'>Junte-se a nós!</span></p>
                    </div>
                    
                    <div className="w-full lg:w-72 pt-6 lg:mx-12">
                        <HashLink smooth to="/contact#contact" className="bg-white text-blue-900 border border-blue-800 hover:bg-blue-700 hover:text-white justify-center text-center rounded-lg px-10 py-3 flex items-center group">
                            Entre em contato
                            <svg className="w-5 h-5 ml-1 group-hover:translate-x-2 duration-500 ease-in" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </HashLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cta;