import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">Denk Meister</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-gray-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/perguntas" className="hover:text-gray-400 transition">
                Perguntas
              </Link>
            </li>
            <li>
              <Link href="/modos" className="hover:text-gray-400 transition">
                Modos
              </Link>
            </li>
            <li>
              <Link href="/ranking" className="hover:text-gray-400 transition">
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
