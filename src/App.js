import React, { useState, useEffect } from 'react';
import ModuleSelector from './components/ModuleSelector';
import ScopeAreaSelector from './components/ScopeAreaSelector';
import TransactionTable from './components/TransactionTable';
import './App.css';

const userAccessData = {
  Person_1: {
    modules: ["Module_1", "Module_2", "Module_3"],
    scopeAreas: {
      "Module_1": ["SA_1"],
      "Module_2": ["SA_2"],
      "Module_3": ["SA_3"]
    },
    priMapping: {
      "SA_1": ["PRI_1", "PRI_3"],
      "SA_2": ["PRI_10"],
      "SA_3": ["PRI_14"]
    },
    transactions: {
      "SA_1": {
        "PRI_1": 4,
        "PRI_3": 5
      },
      "SA_2": {
        "PRI_10": 2
      },
      "SA_3": {
        "PRI_14": 0
      }
    }
  },
  Person_2: {
    modules: ["Module_2"],
    scopeAreas: {
      "Module_2": ["SA_2", "SA_3"]
    },
    priMapping: {
      "SA_2": ["PRI_12"],
      "SA_3": ["PRI_13", "PRI_14", "PRI_15"]
    },
    transactions: {
      "SA_2": {
        "PRI_12": 4
      },
      "SA_3": {
        "PRI_13": 9,
        "PRI_14": 0,
        "PRI_15": 10
      }
    }
  },
  Person_3: {
    modules: ["Module_1", "Module_2", "Module_3"],
    scopeAreas: {
      "Module_1": ["SA_1"],
      "Module_2": ["SA_2"],
      "Module_3": ["SA_3"]
    },
    priMapping: {
      "SA_1": ["PRI_1", "PRI_3"],
      "SA_2": ["PRI_12", "PRI_10"],
      "SA_3": ["PRI_13"]
    },
    transactions: {
      "SA_1": {
        "PRI_1": 0,
        "PRI_3": 0
      },
      "SA_2": {
        "PRI_12": 12,
        "PRI_10": 7
      },
      "SA_3": {
        "PRI_13": 0
      }
    }
  }
};

function App() {
  const [user, setUser] = useState(localStorage.getItem("user") || "Person_1");
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

  const handleUserSelect = (event) => {
    setUser(event.target.value);
    setSelectedModule(null);
    setSelectedScopeArea(null);
    setSelectedPRI(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>User Access Data</h2>
      </header>
      
      <div className="UserSelector">
        <label htmlFor="userSelect">Select LoggedIn User: </label>
        <select id="userSelect" value={user} onChange={handleUserSelect}>
          <option value="Person_1">Person_1</option>
          <option value="Person_2">Person_2</option>
          <option value="Person_3">Person_3</option>
        </select>
      </div>

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