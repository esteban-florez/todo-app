import React from 'react';
import { AppProvider } from '../AppProvider/AppProvider';
import { AppUI } from './AppUI';

function App() {
  return (
    <AppProvider>
      <AppUI />
    </AppProvider>
  );
};

export default App;
