import React, { useLayoutEffect } from 'react';
import firebase from 'firebase/app';

import firebaseConfig from 'constants/firebaseConfig';

import LoginScreen from './screens/LoginScreen/LoginScreen';

function App() {
  useLayoutEffect(() => {
    firebase.initializeApp(firebaseConfig);
  }, []);
  return <LoginScreen />;
}

export default App;
