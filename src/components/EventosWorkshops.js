import React from 'react';
import aniversario from "../images/aniversario.png";
import tdd from "../images/testesunitarios.avif";
import google from "../images/google.jpg";

const eventoImage = {
    height: '10rem',
    width: 'auto',
    mixBlendMode: 'colorBurn'
}

const EventosWorkshops = () => {
    return (
        <div className="mt-8 bg-gray-100">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Eventos e Workshops</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">Alguns de nossos eventos.</h2>
                </div>

                <div className="p-16" data-aos="fade-in" data-aos-delay="600">
                    <div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-4">
                        <div className="overflow-hidden flex flex-col justify-center items-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <a href="/eventos" className="w-full flex flex-col items-center">
                                <img src={aniversario} alt="Aniversário da COMP+" style={{ ...eventoImage, objectFit: 'cover' }} />
                                <div className="mt-2 text-center text-blue-900 font-semibold">Aniversário da COMP+</div>
                            </a>
                        </div>

                        <div className="overflow-hidden flex flex-col justify-center items-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <a href="/eventos" className="w-full flex flex-col items-center">
                                <img src={google} alt="Palestra Google" style={{ ...eventoImage, objectFit: 'cover' }} />
                                <div className="mt-2 text-center text-blue-900 font-semibold">Palestra Google</div>
                            </a>
                        </div>

                        <div className="overflow-hidden flex flex-col justify-center items-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <a href="/eventos" className="w-full flex flex-col items-center">
                                <img src={tdd} alt="Testes Unitários Avançados" style={{ ...eventoImage, objectFit: 'cover' }} />
                                <div className="mt-2 text-center text-blue-900 font-semibold">Testes Unitários Avançados</div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EventosWorkshops;