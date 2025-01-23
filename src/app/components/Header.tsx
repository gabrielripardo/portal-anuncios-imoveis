import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="relative w-full bg-white shadow-md">
      <div className="px-4 py-2 flex justify-between items-center">
        <Image
          src="/images/logo.png"
          alt="search button"
          width={180}
          height={180}
          priority
        />

        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Imobiliárias
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Quero me Associar
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Sobre
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Blog
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Anunciar imóvel
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Entrar
          </a>
        </div>

        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="z-10 absolute right-0 md:hidden bg-white shadow-lg">
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Imobiliárias
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Quero me Associar
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Sobre
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Blog
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Anunciar imóvel
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Entrar
          </a>
        </div>
      )}
    </nav>
  );
}
