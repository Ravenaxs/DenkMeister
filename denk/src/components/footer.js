// components/Footer.js
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const githubUrl = "https://github.com/Ravenaxs";
  const linkedinUrl = "https://www.linkedin.com/in/anasilvacruz/";
  const instagramUrl = "https://www.instagram.com/misa_wsx";

  return (
    <footer className="bg-[#340F16] text-[#C02042] py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">

        {/* Seção Denk Meister */}
        <div>
          <h6 className="font-semibold text-[#C02042] mb-4">Denk Meister</h6>
          <p className="text-sm">Jogo de perguntas interativo.</p>
          <div className="flex space-x-4 mt-4">
            <Link href={githubUrl} legacyBehavior><a target="_blank" rel="noopener noreferrer">
              <img src="/icon.github.svg" alt="GitHub" className="h-6 w-6 fill-[#C02042] hover:fill-[#901430]" />
            </a></Link>
           {/* <Link href={linkedinUrl} legacyBehavior><a target="_blank" rel="noopener noreferrer">
              <img src="/icon.linkedin.svg" alt="LinkedIn" className="h-6 w-6 fill-[#C02042] hover:fill-[#901430]" />
            </a></Link> */  }
            <Link href={instagramUrl} legacyBehavior><a target="_blank" rel="noopener noreferrer">
              <img src="/icon.insta.svg" alt="Instagram" className="h-6 w-6 fill-[#C02042] hover:fill-[#901430]" />
            </a></Link>
          </div>
        </div>

        {/* Seção Produto */}
        <div>
          <h6 className="font-semibold text-[#C02042] mb-4">Produto</h6>
          <ul className="text-sm space-y-2">
            <li><Link href="/produto" legacyBehavior><a className="hover:text-[#901430]">Visão Geral</a></Link></li>
            <li><Link href="/recursos" legacyBehavior><a className="hover:text-[#901430]">Recursos</a></Link></li>
            <li><Link href="/detalhes" legacyBehavior><a className="hover:text-[#901430]">Detalhes</a></Link></li>
          </ul>
        </div>

        {/* Seção Sobre Nós */}
        <div>
          <h6 className="font-semibold text-[#C02042] mb-4">Sobre Nós</h6>
          <ul className="text-sm space-y-2">
            <li><Link href="/sobre" legacyBehavior><a className="hover:text-[#901430]">Nossa História</a></Link></li>
            <li><Link href="/equipe" legacyBehavior><a className="hover:text-[#901430]">Equipe</a></Link></li>
            <li><Link href="/contato" legacyBehavior><a className="hover:text-[#901430]">Contato</a></Link></li>
          </ul>
        </div>

        {/* Seção Newsletter */}
        <div>
          <h6 className="font-semibold text-[#C02042] mb-4">Newsletter</h6>
          <p className="text-sm mb-2">Receba novidades e atualizações!</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="border border-gray-600 rounded-l-md px-4 py-2 text-sm focus:outline-none bg-transparent text-[#C02042]"
            />
            <button className="bg-[#901430] text-white rounded-r-md px-4 py-2 text-sm hover:bg-[#C02042] focus:outline-none">
              Inscrever
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 py-4 border-t border-[#901430] text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Denk Meister. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;