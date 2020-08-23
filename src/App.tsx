import React, { useState, useLayoutEffect } from 'react';
import firebase from 'firebase/app';

import firebaseConfig from 'constants/firebaseConfig';

function App() {
  const [value, setValue] = useState('estado inicial value ');

  useLayoutEffect(() => {
    firebase.initializeApp(firebaseConfig);
  }, []);

  return (
    <div>
      {value}
      <button onClick={() => setValue('estado mudado')}>mudar valor</button>
    </div>
  );
}

export default App;
