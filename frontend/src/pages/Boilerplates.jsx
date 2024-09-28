import React, { useState, useEffect } from 'react';
import {BoilerplateCard} from '../components/BoilerplateCard';

export const Boilerplates = () => {
  const [boilerplates, setBoilerplates] = useState([]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Boilerplates</h2>
      <div className="flex flex-wrap">
        {boilerplates.map((boilerplate) => (
          <BoilerplateCard key={boilerplate.id} boilerplate={boilerplate} />
        ))}
      </div>
    </div>
  )
}
