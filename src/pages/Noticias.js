import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import {useDocTitle} from '../components/CustomHook';
import { useState } from "react";


const Noticias = () => {
    useDocTitle('Noticias/Blog');

    const [posts, setPosts] = useState([
            {
                titulo: "Comp+ promove seminário sobre Computação e Democracia", 
                id: "19094475757",
                autor: "admin",
                data: "05/10/2024",
                categorias: ["Eventos", "Mídia", "Computação"],
                conteudo: "Fundada em 2012, a Fundação COMP+ oferece suporte administrativo a\
                            Instituições Científicas e Tecnológicas (ICTs) e Universidades Públicas para a execução de\
                            projetos voltados à pesquisa científica, desenvolvimento, inovação e prestação de\
                            serviços técnicos especializados. A COMP+ pretende alcançar excelência na gestão\
                            administrativa e financeira dos projetos e atividades que apoia, operando em estrita\
                            conformidade com os princípios da legalidade, impessoalidade, moralidade, publicidade,\
                            economicidade e eficiência. A fundação se dedica a proteger os interesses das\
                            instituições que apoia e a manter um alto nível de competência profissional entre seus\
                            colaboradores."
            },
            {
                titulo: "Fundação Comp+ terá stand em evento da SBC", 
                id: "187468595950",
                autor: "admin",
                data: "02/10/2024",
                categorias: ["SBC", "Eventos", "Computação"],
                conteudo: "Fundada em 2012, a Fundação COMP+ oferece suporte administrativo a\
                            Instituições Científicas e Tecnológicas (ICTs) e Universidades Públicas para a execução de\
                            projetos voltados à pesquisa científica, desenvolvimento, inovação e prestação de\
                            serviços técnicos especializados. A COMP+ pretende alcançar excelência na gestão\
                            administrativa e financeira dos projetos e atividades que apoia, operando em estrita\
                            conformidade com os princípios da legalidade, impessoalidade, moralidade, publicidade,\
                            economicidade e eficiência. A fundação se dedica a proteger os interesses das\
                            instituições que apoia e a manter um alto nível de competência profissional entre seus\
                            colaboradores."
            },
            {
                titulo: "Série sobre Machine Learning: Parte 2", 
                id: "14757577575",
                autor: "admin",
                data: "28/09/2024",
                categorias: ["Computação", "IA", "Pesquisadores"],
                conteudo: "Nossa equipe é composta por um grupo diversificado de especialistas dedicados à missão da fundação.\
                            A liderança da fundação inclui membros da diretoria, conselhos de administração e uma equipe técnica\
                            que coordena nossos projetos e atividades. Juntos, trabalhamos para garantir a eficiência, transparência\
                            e o impacto de nossas ações."
            },
            {
                titulo: "Comp+ oferece bolsas de estudo para alunos de graduação", 
                id: "1004489585",
                autor: "admin",
                data: "16/08/2024",
                categorias: ["Estágio", "Graduação", "Pesquisadores"],
                conteudo: "Nossa equipe é composta por um grupo diversificado de especialistas dedicados à missão da fundação.\
                            A liderança da fundação inclui membros da diretoria, conselhos de administração e uma equipe técnica\
                            que coordena nossos projetos e atividades. Juntos, trabalhamos para garantir a eficiência, transparência\
                            e o impacto de nossas ações."
            },
            {
                titulo: "Comp+ fecha parceria com Fundação Parque Tecnológico", 
                id: "12344554444",
                autor: "admin",
                data: "11/07/2024",
                categorias: ["Graduação", "Business", "Geral", "Mídia"],
                conteudo: "Nossa equipe é composta por um grupo diversificado de especialistas dedicados à missão da fundação.\
                            A liderança da fundação inclui membros da diretoria, conselhos de administração e uma equipe técnica\
                            que coordena nossos projetos e atividades. Juntos, trabalhamos para garantir a eficiência, transparência\
                            e o impacto de nossas ações."
            },
            
        ]);

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div id='noticias' className="flex justify-center items-start mt-8 w-full bg-white py-12 lg:py-24">
                <div className="lg:w-10/12 mx-auto my-8 px-4 lg:pl-20" data-aos="fade-down">
                    <div className="bg-white p-8 my-4 md:px-12 lg:w-[86%] lg:pl-20 lg:pr-20 mr-auto rounded-2xl shadow-2xl">
                        <div className="flex">
                            <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">
                                Blog
                            </h1>
                        </div>

                        {posts.map(post => 
                        
                            
                                <div className="my-8 blog-post" id={'blog-post-' + post.id}>
                                    <h2 className="text-2xl text-blue-900 font-bold blog-post-title">{post.titulo}</h2>
                                    <div className="blog-post-details mt-2 mb-2 text-gray-400">
                                        Por {post.autor} em {post.data} | Categorias: {
                                            post.categorias.map( (cat, ind, array) =>
                                                {if( ind == array.length - 1){
                                                    return(<><a href="#">{cat}</a></>)
                                                }else{
                                                    return(<><a href="#">{cat}</a>, </>)
                                                }}
                                            )
                                        }
                                    </div>
                                    <p className="mt-4 text-gray-900 text-justify">
                                        {post.conteudo}
                                    </p>
                                    <p className="pt-4 pb-4">
                                        <a href="#" className="text-blue-900">Leia mais...</a>
                                    </p>
                                </div>
                            )
                        }
                        

                        

                        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                        <div className="mt-8 mb-8 posts-navigator">
                            <div className="float-left">
                                <a href="#" className="text-blue-900">Posts anteriores</a>
                            </div>

                            <div className="float-right">
                                <a href="#" className="text-blue-900">Próximos posts</a>
                            </div>
                            <div className="clear-both"></div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-2/6 px-8 py-6 ml-auto mr-24 bg-blue-900 rounded-2xl self-baseline sidebar mt-12" data-aos="fade-down">
                    <div className="text-white">
                        <div className="my-4 px-2">
                            
                            <div className="mb-6 sidebar-widget search-widget">
                                <h2 className="text-2xl pb-2">Busca no blog</h2>
                                <div className="text-gray-400">


                                    <div class="flex rounded-md border-2 border-blue-800 overflow-hidden max-w-md mx-auto font-[sans-serif]">
                                        <input type="email" placeholder="Insira termo de busca..."
                                            class="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3" />
                                        <button type='button' class="flex items-center justify-center bg-blue-700 px-5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" class="fill-white">
                                                <path
                                                    d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                                                </path>
                                            </svg>
                                        </button>
                                    </div>


                                </div>
                            </div>

                            <div className="mb-6 sidebar-widget tag-cloud-widget">
                                <h2 className="text-2xl pb-2">Categorias</h2>
                                <div className="text-gray-400">
                                    <ul class="flex justify-center flex-wrap max-w-xl align-center gap-2 leading-8">
                                        <li><a href="#" class="text-2xl">Eventos</a></li>
                                        <li><a href="#" class="text-xl">Mídia</a></li>
                                        <li><a href="#" class="text-md">Hackathon</a></li>
                                        <li><a href="#" class="text-lg">Periódicos</a></li>
                                        <li><a href="#" class="text-sm">POSCOMP</a></li>
                                        <li><a href="#" class="text-3xl">Software</a></li>
                                        <li><a href="#" class="text-md">Geral</a></li>
                                        <li><a href="#" class="text-2xl">Prêmio Turing</a></li>
                                        <li><a href="#" class="text-xl">Business</a></li>
                                        <li><a href="#" class="text-md">Graduação</a></li>
                                        <li><a href="#" class="text-xs">Sem categoria</a></li>
                                        <li><a href="#" class="text-2xl">Pesquisadores</a></li>
                                        <li><a href="#" class="text-2xl">IA</a></li>
                                        <li><a href="#" class="text-lg">Des. Web</a></li>
                                        <li><a href="#" class="text-2xl">SBC</a></li>
                                        <li><a href="#" class="text-md">Estágio</a></li>
                                        <li><a href="#" class="text-2xl">Computação</a></li>
                                        <li><a href="#" class="text-lg">Hardware</a></li>
                                        <li><a href="#" class="text-sm">Certificados</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mb-6 sidebar-widget archive-widget">
                                <h2 className="text-2xl pb-2">Arquivo</h2>
                                <div className="text-gray-400">
                                    <ul>
                                        <li><a href="#">Outubro 2024</a></li>
                                        <li><a href="#">Setembro 2024</a></li>
                                        <li><a href="#">Agosto 2024</a></li>
                                        <li><a href="#">Julho 2024</a></li>
                                        <li><a href="#">Junho 2024</a></li>
                                        <li><a href="#">Maio 2024</a></li>
                                        <li><a href="#">Abril 2024</a></li>
                                        <li><a href="#">Março 2024</a></li>
                                        <li><a href="#">Fevereiro 2024</a></li>
                                        <li><a href="#">Janeiro 2024</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default Noticias;