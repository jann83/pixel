"use client";
import Image from "next/image";
import Button from "./Button"; // Importa el componente del botón

export default function Hero() {
    return (
        <header className="bg-white dark:bg-white-500">
            <div className="container px-6 py-16 mx-auto">
                <div className="items-center lg:flex">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                            <h1 className="text-center text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl leading-tight">
                                Presencia digital de vanguardia{" "}
                                <span className="text-orange-400">Universo Pixel</span>
                            </h1>

                            <p className="text-center mt-3 text-gray-600 dark:text-gray-400">
                                Desarrollamos sitios web modernos, funcionales y adaptados a tus
                                necesidades, combinando creatividad y las mejores tecnologías como
                                React, Next.js, Node y WordPress.
                            </p>
                            <div className="flex items-center justify-center mt-6">
                                <Button
                                    variant="primary"
                                    size="md"
                                    className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-400 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80"
                                >
                                    Comenzar
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <Image
                            src="/img/Heroimage.webp" // La ruta desde la carpeta "public"
                            alt="Hero Image"
                            width={600} // Ajusta el ancho según lo necesario
                            height={400} // Ajusta la altura según lo necesario
                            className="mask mask-circle" // Opcional: añade estilos adicionales
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
