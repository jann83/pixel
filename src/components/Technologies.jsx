import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';

export default function Technologies() {
  const technologies = [
    { icon: FaReact, name: 'React.js' },
    { icon: FaNodeJs, name: 'Node.js' },
    { icon: FaDatabase, name: 'SQL Server' },
  ];

  return (
    <section id="tecnologías" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Tecnologías</h2>
        <div className="flex justify-center space-x-8">
          {technologies.map((tech, idx) => (
            <div key={idx} className="text-center">
              <tech.icon className="h-16 w-16 text-blue-600 mx-auto" />
              <p className="mt-4 text-lg font-semibold">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
