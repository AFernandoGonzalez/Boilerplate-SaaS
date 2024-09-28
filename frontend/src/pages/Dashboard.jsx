import React, { useState } from 'react';
import { ComponentCard } from '../components/ComponentCard';

export const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('components');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedComponent, setSelectedComponent] = useState(null);

  const components = [
    { id: 1, name: 'Button', category: 'Button', description: 'A reusable button component', code: '<button className="bg-blue-500 hover:bg-blue-700 text-white">Button</button>' },
    { id: 2, name: 'Card', category: 'Card', description: 'A reusable card component', code: '<div className="bg-white shadow-md p-4">Card Content</div>' },
    { id: 3, name: 'Modal', category: 'Modal', description: 'A reusable modal component', code: '<div className="modal">Modal Content</div>' },
  ];

  const boilerplates = [
    { id: 1, name: 'MERN Stack', description: 'A full-stack MERN project boilerplate', command: 'npx create-mern-app' },
    { id: 2, name: 'React Frontend', description: 'A boilerplate for a React frontend project', command: 'npx create-react-app' },
    { id: 3, name: 'Node Backend', description: 'A boilerplate for a Node.js backend project', command: 'npx create-node-app' },
  ];

  const filteredComponents = components.filter((component) =>
    component.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-800 text-white p-6">
        <h3 className="text-xl font-bold mb-6">Build Your Project</h3>
        <ul>
          <li
            className={`cursor-pointer py-2 px-4 mb-2 ${selectedCategory === 'components' ? 'bg-blue-500' : ''}`}
            onClick={() => setSelectedCategory('components')}
          >
            Components
          </li>
          <li
            className={`cursor-pointer py-2 px-4 mb-2 ${selectedCategory === 'frontend' ? 'bg-blue-500' : ''}`}
            onClick={() => setSelectedCategory('frontend')}
          >
            Frontend Boilerplates
          </li>
          <li
            className={`cursor-pointer py-2 px-4 mb-2 ${selectedCategory === 'backend' ? 'bg-blue-500' : ''}`}
            onClick={() => setSelectedCategory('backend')}
          >
            Backend Boilerplates
          </li>
          <li
            className={`cursor-pointer py-2 px-4 mb-2 ${selectedCategory === 'fullstack' ? 'bg-blue-500' : ''}`}
            onClick={() => setSelectedCategory('fullstack')}
          >
            Fullstack Boilerplates
          </li>
        </ul>
      </div>

      <div className="w-3/4 p-6 bg-gray-100">
        {selectedCategory === 'components' && (
          <>
            <input
              type="text"
              placeholder="Search components..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mb-4 p-2 border border-gray-300 rounded w-full"
            />

            <div className="flex flex-wrap">
              {filteredComponents.map((component) => (
                <ComponentCard
                  key={component.id}
                  component={component}
                  onViewDetails={() => setSelectedComponent(component)}
                />
              ))}
            </div>

          </>
        )}

        {selectedCategory === 'frontend' && (
          <div>
            <h3 className="text-2xl mb-2">Frontend Boilerplates</h3>
            {boilerplates
              .filter((bp) => bp.name.includes('Frontend'))
              .map((boilerplate) => (
                <div key={boilerplate.id} className="mb-4">
                  <h4 className="text-xl font-bold">{boilerplate.name}</h4>
                  <p>{boilerplate.description}</p>
                  <pre className="bg-gray-800 text-white p-4 rounded">{boilerplate.command}</pre>
                </div>
              ))}
          </div>
        )}

        {selectedCategory === 'backend' && (
          <div>
            <h3 className="text-2xl mb-2">Backend Boilerplates</h3>
            {boilerplates
              .filter((bp) => bp.name.includes('Backend'))
              .map((boilerplate) => (
                <div key={boilerplate.id} className="mb-4">
                  <h4 className="text-xl font-bold">{boilerplate.name}</h4>
                  <p>{boilerplate.description}</p>
                  <pre className="bg-gray-800 text-white p-4 rounded">{boilerplate.command}</pre>
                </div>
              ))}
          </div>
        )}

        {selectedCategory === 'fullstack' && (
          <div>
            <h3 className="text-2xl mb-2">Fullstack Boilerplates</h3>
            {boilerplates
              .filter((bp) => bp.name.includes('Fullstack') || bp.name.includes('MERN'))
              .map((boilerplate) => (
                <div key={boilerplate.id} className="mb-4">
                  <h4 className="text-xl font-bold">{boilerplate.name}</h4>
                  <p>{boilerplate.description}</p>
                  <pre className="bg-gray-800 text-white p-4 rounded">{boilerplate.command}</pre>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};
