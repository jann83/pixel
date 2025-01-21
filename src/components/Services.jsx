import { BriefcaseIcon, LifebuoyIcon } from '@heroicons/react/24/outline';

export default function Services() {
  const services = [
    { icon: BriefcaseIcon, title: 'Consultoría', description: 'Expertos en soluciones.' },
    { icon: LifebuoyIcon, title: 'Soporte', description: 'Siempre disponibles para ti.' },
  ];

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md text-center">
              <service.icon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
