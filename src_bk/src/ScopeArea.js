import React, { useState } from 'react';
import TransactionList from './TransactionList';

const ScopeArea = ({ scopeData }) => {
  const [selectedPRI, setSelectedPRI] = useState(null);

  return (
    <div className="scope-area-container">
      {scopeData && scopeData.SAs.map((sa, index) => (
        <div key={index}>
          <h4 className="scope-area-button">{sa}</h4>
          <div>
            {scopeData.PRIs.map((pri) => (
              <button
                key={pri}
                className={`pri-button ${selectedPRI === pri ? 'selected' : ''}`}
                onClick={() => setSelectedPRI(pri)}
              >
                {pri}
              </button>
            ))}
          </div>
        </div>
      ))}
      {selectedPRI && <TransactionList pri={selectedPRI} />}
    </div>
  );
};

export default ScopeArea;
