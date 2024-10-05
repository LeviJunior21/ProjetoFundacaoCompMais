import { Link } from "react-router-dom";
import img1 from "../images/campinagrande.jpg";
import img2 from "../images/google.jpg";
import img3 from "../images/confcomp.jpeg";
import img4 from "../images/congresso.webp";
import img5 from "../images/kubernets.png";
import img6 from "../images/testesunitarios.avif";
import img7 from "../images/web3.webp";
import img8 from "../images/redeneural.png";
import img9 from "../images/react.png";
import img10 from "../images/datascience.jpg";
import img11 from "../images/devops.png";
import img12 from "../images/apis.jpg";
import img13 from "../images/lacina.png";
import img14 from "../images/aniversario.png";
import img15 from "../images/feiratecnologica.png";
import img16 from "../images/hackaton.png";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Eventos() {
    const [topicos, setTopicos] = useState([
        {titulo: "Conferências", topicos: [
            {
                titulo: "Museu Digital", 
                descricao: "Iremos apresentar a história da computação junto ao Sesi para demosnstrar os avanços de nossa área. Venha participar no dia 10/10/24 das 08:00 às 18:00 horas.", 
                data: "10/10/2024", 
                orador: "Leandro Balby",
                img: img1,
                local: "Museu Sesi de Campina Grande",
                horario: "08:00-10:00"
            },
            {
                titulo: "Palestra Google", 
                descricao: "A fundação COMP+ vai ministrar uma paletra na Google. No dia 23/10/2024 estaremos debatendo sobre técnicas para testar modelos de Inteligência Artificial.", 
                data: "23/20/2024", 
                orador: "Demétrio Mestre",
                img: img2,
                local: "Escritório da Google - São Paulo",
                horario: "14:00-16:00"
            },
            {
                titulo: "CSBC 2024", 
                descricao: "O PacTecPB e a COMP+ apresentará no dia 24/10/2024 um conferênciasobre sobre ciência, tecnologia e inovação na ciência da computação.", 
                data: "24/10/2024", 
                orador: "Carlos Eduardo",
                img: img3,
                local: "UFCG - Polo Sede",
                horario: "08:00-10:00"
            }, 
            {
                titulo: "Conferência CECTI", 
                descricao: "A COMP+ estará na Conferência Brasileira de Ciencia da Computação que acontecerá na Paraiba dia 30/10/2024. Participe para saber mais sobre práticas de software. ", 
                data: "30/10/2024", 
                orador: "Claúdio Campelo",
                img: img4,
                local: "Alesp - São Paulo",
                horario: "16:00-18:00"
            },
        ]}, 
        {titulo: "Webinars", topicos: [
            {
                titulo: "Introdução ao Kubernetes",
                descricao: "Aprenda o básico sobre containers e como gerenciá-los com Kubernetes neste webinar online. Acontece no dia 11/10/2024, das 10:00 às 12:00 horas.",
                data: "11/10/2024",
                orador: "Cláudio Campelo",
                img: img5,
                local: "LSD - Campina Grande",
                horario: "10:00-12:00"
            },
            {
                titulo: "Testes Unitários Avançados",
                descricao: "Entenda como criar testes unitários robustos para garantir a qualidade do seu código. Será no dia 14/10/2024, das 09:00 às 11:00 horas.",
                data: "14/10/2024",
                orador: "Demétrio Mestre",
                img: img6,
                local: "Escritório da Google - São Paulo",
                horario: "09:00-11:00"
            },
            {
                titulo: "O Futuro da Web3",
                descricao: "Participe deste evento para conhecer as oportunidades e desafios da Web3. Ocorre no dia 20/10/2024, das 16:00 às 18:00 horas.",
                data: "20/10/2024",
                orador: "Leandro Balby",
                img: img7,
                local: "Auditório TechCenter - Rio de Janeiro",
                horario: "16:00-18:00"
            },
            {
                titulo: "Inteligência Artificial no Dia a Dia",
                descricao: "Descubra como a IA está transformando indústrias e serviços ao redor do mundo. Webinar no dia 29/10/2024, das 15:00 às 17:00 horas.",
                data: "29/10/2024",
                orador: "Carlos Eduardo",
                img: img8,
                local: "Online",
                horario: "15:00-17:00"
            }            
        ]}, 
        {titulo: "WorkShops", topicos: [
            {
                titulo: "Aplicações Web com React",
                descricao: "Este workshop prático irá ajudá-lo a construir aplicações interativas utilizando o framework React. Será no dia 16/10/2024, das 09:00 às 17:00 horas.",
                data: "16/10/2024",
                orador: "Demétrio Mestre",
                img: img9,
                local: "Laboratório de TI - Universidade Federal da Paraíba",
                horario: "09:00-17:00"
            },
            {
                titulo: "Ciência de Dados para Iniciantes",
                descricao: "Aprenda os fundamentos de ciência de dados com este workshop focado em ferramentas como Python e R. Será no dia 18/10/2024, das 10:00 às 18:00 horas.",
                data: "18/10/2024",
                orador: "Cláudio Campelo",
                img: img10,
                local: "Centro de Inovação - Recife",
                horario: "10:00-18:00"
            },
            {
                titulo: "DevOps e CI/CD na Prática",
                descricao: "Entenda como integrar DevOps e pipelines de CI/CD para acelerar o desenvolvimento. Workshop no dia 24/10/2024, das 09:00 às 16:00 horas.",
                data: "24/10/2024",
                orador: "Leandro Balby",
                img: img11,
                local: "TechHub - São Paulo",
                horario: "09:00-16:00"
            },
            {
                titulo: "Desenvolvimento de APIs",
                descricao: "Construa APIs eficientes utilizando Node.js em um ambiente prático e colaborativo. Ocorre no dia 27/10/2024, das 13:00 às 18:00 horas.",
                data: "27/10/2024",
                orador: "Carlos Eduardo",
                img: img12,
                local: "Escritório da Microsoft - Rio de Janeiro",
                horario: "13:00-18:00"
            }
            
        ]}, 
        {titulo: "Datas Importantes", topicos: [
            {
                titulo: "Lançamento da Plataforma TECH+",
                descricao: "No dia 05/10/2024 será lançada a plataforma TECH+, dedicada à inovação e colaboração na área de TI.",
                data: "05/10/2024",
                orador: "Demétrio Mestre",
                img: img13,
                local: "Centro de Inovação - Brasília",
                horario: "09:00-11:00"
            },
            {
                titulo: "Aniversário da COMP+",
                descricao: "Celebre o aniversário de 15 anos da COMP+ em um evento online com transmissões ao vivo no dia 10/10/2024.",
                data: "10/10/2024",
                orador: "Cláudio Campelo",
                img: img14,
                local: "Evento Online",
                horario: "14:00-16:00"
            },
            {
                titulo: "Feira Nacional de Tecnologia",
                descricao: "A Feira Nacional de Tecnologia acontecerá no dia 22/10/2024, reunindo as maiores empresas de inovação tecnológica.",
                data: "22/10/2024",
                orador: "Leandro Balby",
                img: img15,
                local: "Expo Center - São Paulo",
                horario: "10:00-18:00"
            },
            {
                titulo: "Hackathon Global",
                descricao: "Participe do Hackathon Global, um dos maiores eventos de inovação e desenvolvimento de software, que acontecerá no dia 30/10/2024.",
                data: "30/10/2024",
                orador: "Carlos Eduardo",
                img: img16,
                local: "TechHub - Rio de Janeiro",
                horario: "09:00-21:00"
            }   
        ]}
    ]);

    return (
        <div>
            <div style={{'height': "100px", 'padding': "10px 0px 100px 0px"}}>
                <NavBar />
            </div>

            {topicos.map(topico =>
            <>
                <div style={{'width': '100%', 'padding': '50px 50px 10px 50px', 'fontWeight': 'bold'}}>
                    <p className="font-bold text-blue-900" style={{'fontSize': '2rem'}}>{topico.titulo}</p>
                </div>
                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {topico.topicos.map(topic =>
                        <div className="flex flex-col justify-between bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                            <img alt="card img" className="rounded-t transition duration-1000 ease-in-out" style={{'height': '300px', 'width': '100%', 'backgroundColor': 'white' , 'objectFit': 'cover'}} src={topic.img} />
                                <h2 className="font-semibold my-4 text-2xl text-center font-bold text-blue-900">{topic.titulo}</h2>
                                <p className="text-md font-medium">
                                    {topic.descricao}
                                </p>
                                <p style={{'padding': '20px 0px 0px 0px'}}>Data: {topic.data} - {topic.horario}</p>
                                <p style={{'padding': '0px 0px 20px 0px'}}>Local: {topic.local}</p>
                            </div>
                            <div className="flex justify-center mt-auto">
                                <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 text-lg shadow-xl rounded-xl">
                                    Quero participar
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Link>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </>)}
            <div style={{'marginTop': '100px'}}>
               <Footer></Footer>
            </div>
        </div>
    )
}
