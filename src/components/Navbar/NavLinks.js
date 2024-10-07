import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-1 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#hero">
                Home
            </HashLink>
            <HashLink className="px-1 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/sobre#about-us">
                Sobre Nós
            </HashLink>
            <HashLink className="px-1 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/programas_projetos#programas">
                Programas e Projetos
            </HashLink>
            <HashLink className="px-1 font-extrabold text-gray-500 hover:text-blue-900" to="/eventos">
                Eventos
            </HashLink>
            <HashLink className="px-1 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/recursos#recursos">
                Recursos
            </HashLink>
            <HashLink className="px-1 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/parcerias">
                Parcerias
            </HashLink>
            <HashLink className="px-1 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/noticias#noticias">
                Noticias/Blog
            </HashLink>
            <HashLink className="px-1 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/contato#contato">
                Contato
            </HashLink>
            <HashLink className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-4 py-2 shadow-xl rounded-xl" smooth to="/doacao">
                Doações
            </HashLink>
        </>
    )
}

export default NavLinks;
