
import Image from 'next/image'; // If using Next.js

import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        {/* Redes Sociales */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaFacebook className="h-6 w-6" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaTwitter className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>

        {/* Información */}
        <p className="text-gray-400 text-sm">
          © 2025 Universo Pixel. Todos los derechos reservados.
        </p>
       
                                                   <Image
                                                       src="/img/logo_pixel.png" // La ruta desde la carpeta "public"
                                                       alt="Logo Pixel"
                                                       width={60} // Ajusta el ancho según lo necesario
                                                       height={40} // Ajusta la altura según lo necesario
                                                       className="mask mask-circle" // Opcional: añade estilos adicionales
                                                   />
                                               

        {/* Navegación */}
        <ul className="flex justify-center space-x-4 mt-4">
          {['Inicio', 'Servicios', 'Tecnologías', 'Nosotros', 'Contacto'].map((item, idx) => (
            <li key={idx}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-white text-sm"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
