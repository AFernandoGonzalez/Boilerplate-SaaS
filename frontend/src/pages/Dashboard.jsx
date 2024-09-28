import React from 'react'
import {ComponentCard} from '../components/ComponentCard';
import {BoilerplateCard} from '../components/BoilerplateCard';

export const Dashboard = () => {
  const components = []
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Your Dashboard</h2>
      <h3 className="text-2xl mb-2">Your Components</h3>
      <div className="flex flex-wrap">
        {components.map((component) => (
          <ComponentCard key={component.id} component={component} />
        ))}
      </div>

      <h3 className="text-2xl mt-8 mb-2">Your Boilerplates</h3>
      <div className="flex flex-wrap">
        {boilerplates.map((boilerplate) => (
          <BoilerplateCard key={boilerplate.id} boilerplate={boilerplate} />
        ))}
      </div>
    </div>
  )
}
