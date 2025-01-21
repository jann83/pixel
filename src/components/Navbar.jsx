"use client";
import { useState } from "react";
import Image from "next/image";


export default function Navbar() {
    // Estado para controlar el menú móvil
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white shadow sticky top-0 left-0 right-0 z-10 transition-all duration-300">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                   <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                                           <Image
                                               src="/img/logo_pixel.png" // La ruta desde la carpeta "public"
                                               alt="Logo Pixel"
                                               width={120} // Ajusta el ancho según lo necesario
                                               height={100} // Ajusta la altura según lo necesario
                                               className="mask mask-circle" // Opcional: añade estilos adicionales
                                           />
                                       </div>

                    {/* Botón para abrir/cerrar el menú móvil */}
                    <div className="flex md:hidden">
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="text-gray-500 hover:text-orange-400 focus:outline-none"
                            aria-label="toggle menu"
                        >
                            {isMenuOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 8h16M4 16h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Menú móvil controlado por el estado */}
                <div
                    className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:bg-transparent md:mt-0 md:p-0 md:relative md:w-auto md:flex md:items-center ${
                        isMenuOpen ? "block" : "hidden"
                    }`}
                >
                    <div className="flex flex-col md:flex-row md:mx-6">
                        <a
                            className="my-2 text-black transition-colors duration-300 transform hover:text-orange-400 md:mx-4 md:my-0"
                            href="#"
                        >
                            Home
                        </a>
                        <a
                            className="my-2 text-black transition-colors duration-300 transform hover:text-orange-400 md:mx-4 md:my-0"
                            href="#"
                        >
                            Shop
                        </a>
                        <a
                            className="my-2 text-black transition-colors duration-300 transform hover:text-orange-400 md:mx-4 md:my-0"
                            href="#"
                        >
                            Contact
                        </a>
                        <a
                            className="my-2 text-black transition-colors duration-300 transform hover:text-orange-400 md:mx-4 md:my-0"
                            href="#"
                        >
                            About
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
