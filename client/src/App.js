import React, { useState, Fragment } from 'react';

import Login from './components/Login';

const App = () => {
  const [id, setId] = useState();

  return (
    <Fragment>
      {id}
      <Login onIdSubmit={setId} />
    </Fragment>
  );
};

export default App;
