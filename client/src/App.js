import React from 'react';

import useLocalStorage from './hooks/useLocalStorage';

import { ContactsProvider } from './contexts/ContactsProvider';

import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  const [id, setId] = useLocalStorage('id');

  const dashboard = (
    <ContactsProvider>
      <Dashboard id={id} />
    </ContactsProvider>
  );

  return id ? dashboard : <Login onIdSubmit={setId} />;
};

export default App;
