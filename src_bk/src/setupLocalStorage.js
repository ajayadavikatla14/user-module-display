const setupLocalStorage = () => {
    const userAccess = {
      Person_1: {
        modules: ['Module_1', 'Module_2', 'Module_3'],
        scopeAreas: {
          Module_1: { SAs: ['Scope Area 1', 'Scope Area 2'], PRIs: ['PRI 1', 'PRI 2'] },
          Module_2: { SAs: ['Scope Area 2'], PRIs: ['PRI 3'] },
          Module_3: { SAs: ['Revenue'], PRIs: ['PRI 4'] },
        },
      },
      Person_2: {
        modules: ['Module_2'],
        scopeAreas: {
          Module_2: { SAs: ['Scope Area 2'], PRIs: ['PRI 3', 'PRI 4'] },
        },
      },
      Person_3: {
        modules: ['Module_1', 'Module_2', 'Module_3'],
        scopeAreas: {
          Module_1: { SAs: ['Scope Area 1'], PRIs: ['PRI 1', 'PRI 2'] },
          Module_2: { SAs: ['Scope Area 2'], PRIs: ['PRI 3'] },
          Module_3: { SAs: ['Revenue'], PRIs: ['PRI 4'] },
        },
      },
    };
    localStorage.setItem('userAccess', JSON.stringify(userAccess));
  };
  
  export default setupLocalStorage;
  