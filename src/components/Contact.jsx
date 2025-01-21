export default function Contact() {
    return (
      <section id="contacto" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
          <form className="max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Nombre"
              className="block w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <input
              type="email"
              placeholder="Correo"
              className="block w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <textarea
              placeholder="Mensaje"
              className="block w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md">Enviar</button>
          </form>
        </div>
      </section>
    );
  }
  