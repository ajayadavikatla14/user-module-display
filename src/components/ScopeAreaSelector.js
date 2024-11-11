import React from 'react';

const ScopeAreaSelector = ({
  scopeAreas,
  priMapping,
  selectedScopeArea,
  selectedPRI,
  onScopeAreaSelect,
  onPRISelect
}) => {

  console.log('selectedPRI: ', selectedPRI, 'selectedScopeArea:', selectedScopeArea);
  return (
    <div className="scope-area-selector">
      <h3>Select Scope Area: </h3>
      <div className="scope-area-list">
        {scopeAreas.map((scopeArea) => (
          <button
            key={scopeArea}
            onClick={() => onScopeAreaSelect(scopeArea)}
            className={`scope-area-item ${selectedScopeArea === scopeArea ? 'selected' : ''}`}
          >
            {scopeArea}
          </button>
        ))}
      </div>
      <br />
      {selectedScopeArea && (
        <>
          <h3>Select PRI :</h3>
          <div className="pri-list">
            {priMapping[selectedScopeArea].map((pri) => (
              <button
                key={pri}
                onClick={() => onPRISelect(pri)}
                className={`pri-item ${selectedPRI === pri ? 'selected' : ''}`}
              >
                {pri}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ScopeAreaSelector;
