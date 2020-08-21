import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState('estado inicial value ');

  return (
    <div>
      {value}
      <button onClick={() => setValue('estado mudado')}>mudar valor</button>
    </div>
  );
}

export default App;
