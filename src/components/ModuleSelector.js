import React from 'react';

function ModuleSelector({ modules, selectedModule, onSelectModule }) {
  return (
    <div className="module-selector">
      {modules.map((module) => (
        <button
          key={module}
          className={`module-button ${selectedModule === module ? 'active' : ''}`}
          onClick={() => onSelectModule(module)}
        >
          {module}
        </button>
      ))}
    </div>
  );
}

export default ModuleSelector;
