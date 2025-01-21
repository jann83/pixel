import Image from "next/image";

export default function Services() {
  return (
    <>
      {/* Separador con onda */}
      <div className="relative w-full bg-white">
        <div className="absolute inset-x-0 top-[-30px] w-full h-[120px] bg-[url('/wave.svg')] bg-no-repeat bg-cover"></div>
      </div>

      {/* Sección Hero */}
      <div className="hero min-h-screen bg-orange-500 flex items-center justify-center">
        <div className="hero-content text-center text-white">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold leading-tight">
              Diseñamos y desarrollamos sitios web modernos
            </h1>
            <p className="py-6">
              Adaptados a las necesidades de tu negocio. Desde landing pages hasta portales complejos, usamos las últimas tecnologías para garantizar calidad y rendimiento.
            </p>
          </div>
        </div>
      </div>

      {/* Sección Card */}
      <div className="card bg-base-100 w-96 shadow-xl mx-auto mt-8">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Título de la tarjeta</h2>
          <p>Adaptados a las necesidades de tu negocio. Desde landing pages hasta portales complejos, usamos las últimas tecnologías para garantizar calidad y rendimiento.</p>
        </div>
      </div>
    </>
  );
}
