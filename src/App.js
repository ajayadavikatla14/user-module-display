import React, { useState, useEffect } from 'react';
import ModuleSelector from './components/ModuleSelector';
import ScopeAreaSelector from './components/ScopeAreaSelector';
import TransactionTable from './components/TransactionTable';
import './App.css';

const userAccessData = {
  Person_1: {
    modules: ["Module_1", "Module_2", "Module_3"],
    scopeAreas: {
      "Module_1": ["SA_1", "SA_2"],
      "Module_2": ["SA_2", "SA_3"],
      "Module_3": ["SA_1", "SA_3"]
    },
    priMapping: {
      "SA_1": ["PRI_1", "PRI_2", "PRI_3"],
      "SA_2": ["PRI_10", "PRI_11"],
      "SA_3": ["PRI_13", "PRI_14", "PRI_15"]
    },
    transactions: {
      "SA_1": {
        "PRI_1": 4,
        "PRI_2": 5,
        "PRI_3": 3,
      },
      "SA_2": {
        "PRI_10": 6,
        "PRI_11": 2,
      },
      "SA_3": {
        "PRI_13": 8,
        "PRI_14": 1,
        "PRI_15": 7,
      }
    }
  },
  Person_2: {
    modules: ["Module_1", "Module_2"],
    scopeAreas: {
      "Module_1": ["SA_1"],
      "Module_2": ["SA_2"]
    },
    priMapping: {
      "SA_1": ["PRI_1", "PRI_2"],
      "SA_2": ["PRI_10"]
    },
    transactions: {
      "SA_1": {
        "PRI_1": 2,
        "PRI_2": 5,
      },
      "SA_2": {
        "PRI_10": 3
      }
    }
  },
  Person_3: {
    modules: ["Module_3"],
    scopeAreas: {
      "Module_3": ["SA_3"]
    },
    priMapping: {
      "SA_3": ["PRI_13", "PRI_14"]
    },
    transactions: {
      "SA_3": {
        "PRI_13": 4,
        "PRI_14": 6
      }
    }
  }
};

function App() {
  const [user] = useState(localStorage.getItem("user") || "Person_1");
  const [selectedModule, setSelectedModule] = useState(localStorage.getItem("selectedModule") || null);
  const [selectedScopeArea, setSelectedScopeArea] = useState(localStorage.getItem("selectedScopeArea") || null);
  const [selectedPRI, setSelectedPRI] = useState(localStorage.getItem("selectedPRI") || null);

  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);

  useEffect(() => {
    localStorage.setItem("selectedModule", selectedModule);
  }, [selectedModule]);

  useEffect(() => {
    localStorage.setItem("selectedScopeArea", selectedScopeArea);
  }, [selectedScopeArea]);

  useEffect(() => {
    localStorage.setItem("selectedPRI", selectedPRI);
  }, [selectedPRI]);

  const handleModuleSelect = (module) => {
    setSelectedModule(module);
    setSelectedScopeArea(null);
    setSelectedPRI(null);
  };

  const handleScopeAreaSelect = (scopeArea) => {
    setSelectedScopeArea(scopeArea);
    setSelectedPRI(null);
  };

  const handlePRISelect = (pri) => {
    setSelectedPRI(pri);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Dynamic Access Page</h2>
      </header>
      <ModuleSelector
        modules={userAccessData[user].modules}
        selectedModule={selectedModule}
        onSelectModule={handleModuleSelect}
      />
      {selectedModule && (
        <ScopeAreaSelector
          scopeAreas={userAccessData[user].scopeAreas[selectedModule]}
          priMapping={userAccessData[user].priMapping}
          selectedScopeArea={selectedScopeArea}
          onScopeAreaSelect={handleScopeAreaSelect}
          onPRISelect={handlePRISelect}
          selectedPRI={selectedPRI}
        />
      )}
      {selectedScopeArea && selectedPRI && (
        <TransactionTable
          transactions={userAccessData[user].transactions[selectedScopeArea][selectedPRI]}
        />
      )}
    </div>
  );
}

export default App;