import React, { useEffect, useState } from 'react';
import ModuleList from './moduleList';
import setupLocalStorage from './setupLocalStorage';
import './styles.css';

const App = () => {
  const [user, setUser] = useState('Person_1');
  const [accessData, setAccessData] = useState({});

  useEffect(() => {
    setupLocalStorage();
    const storedAccess = JSON.parse(localStorage.getItem('userAccess'));
    setAccessData(storedAccess);
  }, []);

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <div className="container">
      <h1>Dynamic Module Access Page</h1>
      <label>Select User:</label>
      <select onChange={handleUserChange}>
        <option value="Person_1">Person_1</option>
        <option value="Person_2">Person_2</option>
        <option value="Person_3">Person_3</option>
      </select>
      
      {accessData[user] && <ModuleList modules={accessData[user].modules} scopeAreas={accessData[user].scopeAreas} />}
    </div>
  );
};

export default App;
