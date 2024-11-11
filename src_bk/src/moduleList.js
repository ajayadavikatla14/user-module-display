import React, { useState } from 'react';
import ScopeArea from './ScopeArea';

const ModuleList = ({ modules, scopeAreas }) => {
  const [selectedModule, setSelectedModule] = useState(null);

  return (
    <div>
      <div className="module-tabs">
        {modules.map((module) => (
          <button
            key={module}
            className={`module-button ${selectedModule === module ? '' : 'inactive'}`}
            onClick={() => setSelectedModule(module)}
          >
            {module}
          </button>
        ))}
      </div>
      {selectedModule && <ScopeArea scopeData={scopeAreas[selectedModule]} />}
    </div>
  );
};

export default ModuleList;
