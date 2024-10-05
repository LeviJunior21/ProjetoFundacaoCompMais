import { Link } from "react-router-dom";
import img from "../images/campinagrande.jpg";
import img2 from "../images/google.jpg";
import img3 from "../images/confcomp.jpeg";
import img4 from "../images/congresso.webp";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";

export default function Eventos() {
    return (
        <div>
            <div style={{'height': "100px", 'padding': "10px 0px 100px 0px"}}>
                    <NavBar />
                </div>
            <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {/* Primeiro cartão */}
                    <div className="flex flex-col justify-between bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                        <div className="m-2 text-justify text-sm">
                        <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" style={{'height': '300px', 'objectFit': 'cover'}} src={img} />
                            <h2 className="font-semibold my-4 text-2xl text-center">Museu Digital - 10/10/2024</h2>
                            <p className="text-md font-medium">
                                Iremos apresentar a história da computação junto ao Sesi para demosnstrar os avanços de nossa área. Venha participar no dia 10/10/24 das 08:00 às 18:00 horas. 
                            </p>
                        </div>
                        <div className="flex justify-center mt-auto">
                            <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 text-lg shadow-xl rounded-xl">
                                Quero participar
                                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </div>
                    {/* Segundo cartão */}
                    <div className="flex flex-col justify-between bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                        <div className="m-2 text-justify text-sm">
                        <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" style={{'height': '300px', 'objectFit': 'cover'}} src={img2} />
                            <h2 className="font-semibold my-4 text-2xl text-center">Palestra Google - 23/10/2024</h2>
                            <p className="text-md font-medium">
                                A fundação COMP+ vai ministrar uma paletra na Google. No dia 23/10/2024 estaremos debatendo sobre técnicas para testar modelos de Inteligência Artificial.
                            </p>
                        </div>
                        <div className="flex justify-center bt-auto">
                            <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 text-lg shadow-xl rounded-xl">
                                Quero participar
                                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </div>
                    {/* Terceiro cartão */}
                    <div className="flex flex-col justify-between bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                        <div className="m-2 text-justify text-sm">
                            <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" style={{'height': '300px', 'objectFit': 'cover'}} src={img3} />
                            <h2 className="font-semibold my-4 text-2xl text-center ">Conferência CECTI - 24/20/2024</h2>
                            <p className="text-md font-medium">
                                O PacTecPB e a COMP+ apresentará no dia 24/10/2024 um conferênciasobre sobre ciência, tecnologia e inovação na ciência da computação.
                            </p>
                        </div>
                        <div className="flex justify-center mt-auto">
                            <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 text-lg shadow-xl rounded-xl">
                                Quero participar
                                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </div>
                    {/* Quarto cartão */}
                    <div className="flex flex-col justify-between bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                        <div className="m-2 text-justify text-sm">
                        <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" style={{'height': '300px', 'objectFit': 'cover'}} src={img4} />
                            <h2 className="font-semibold my-4 text-2xl text-center ">CSBC 2024 - 30/10/2024</h2>
                            <p className="text-md font-medium">
                                A COMP+ estará na Conferência Brasileira de Ciencia da Computação que acontecerá na Paraiba dia 30/10/2024. Participe para saber mais sobre práticas de software. 
                            </p>
                        </div>
                        <div className="flex justify-center mt-auto">
                            <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 text-lg shadow-xl rounded-xl">
                                Quero participar
                                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </div>                    
                </div>
            </div>
            <div style={{'marginTop': '100px'}}>
               <Footer></Footer>
            </div>
        </div>
    )
}