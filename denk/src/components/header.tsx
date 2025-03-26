import Link from "next/link";
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#340F16] text-[#C02042] py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">Denk Meister</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-[#901430] transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/perguntas" className="hover:text-[#901430] transition">
                Perguntas
              </Link>
            </li>
            <li>
              <Link href="/modos" className="hover:text-[#901430] transition">
                Modos
              </Link>
            </li>
            <li>
              <Link href="/ranking" className="hover:text-[#901430] transition">
                Ranking
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;