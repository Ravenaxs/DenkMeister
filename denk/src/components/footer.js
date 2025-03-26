// components/Footer.js
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const githubUrl = "https://github.com/Ravenaxs";
  const linkedinUrl = "https://www.linkedin.com/in/anasilvacruz/";
  const instagramUrl = "https://www.instagram.com/misa_wsx";

  return (
    <footer className="bg-[#340F16] text-[#C02042] py-8">
      <div className="container mx-auto flex flex-col items-center">
        <nav className="flex space-x-6 mb-4">
          <Link href="/produto" legacyBehavior><a className="hover:text-[#901430]">Produto</a></Link>
          <Link href="/recursos" legacyBehavior><a className="hover:text-[#901430]">Recursos</a></Link>
          <Link href="/detalhes" legacyBehavior><a className="hover:text-[#901430]">Detalhes</a></Link>
          <Link href="/sobre" legacyBehavior><a className="hover:text-[#901430]">Sobre nós</a></Link>
        </nav>

        <div className="mb-4">
          <select className="border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-600">
            <option>Choose your language</option>
            <option>Português</option>
            <option>English</option>
            {/* Adicione mais opções de idioma conforme necessário */}
          </select>
        </div>

        <div className="flex space-x-4 mb-4">
          <Link href={githubUrl} legacyBehavior><a target="_blank" rel="noopener noreferrer">
            <img src="/icon.github.svg" alt="GitHub" className="h-6 w-6 fill-[#C02042] hover:fill-[#901430]" />
          </a></Link>
          <Link href={linkedinUrl} legacyBehavior><a target="_blank" rel="noopener noreferrer">
            <img src="/icon.likedln.svg" alt="LinkedIn" className="h-6 w-6 fill-[#C02042] hover:fill-[#901430]" />
          </a></Link>
          <Link href={instagramUrl} legacyBehavior><a target="_blank" rel="noopener noreferrer">
            <img src="/icon.insta.svg" alt="Instagram" className="h-6 w-6 fill-[#C02042] hover:fill-[#901430]" />
          </a></Link>
          {/* Você pode adicionar mais ícones aqui */}
        </div>

        <div className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Denk Meister. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;