import React, { useState, useEffect } from 'react';
import {ComponentCard} from '../components/ComponentCard';

export const ComponentsLibrary = () => {
  const [components, setComponents] = useState([]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Components Library</h2>
      <div className="flex flex-wrap">
        {components.map((component) => (
          <ComponentCard key={component.id} component={component} />
        ))}
      </div>
    </div>
  )
}
