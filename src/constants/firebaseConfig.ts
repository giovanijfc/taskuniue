let firebaseConfig = {};

if (
  !process.env.REACT_APP_FIREBASE ||
  process.env.REACT_APP_FIREBASE === 'dev'
) {
  firebaseConfig = {
    apiKey: 'AIzaSyDs4icW0L9bmrIDguTihRDeUcaEIY-10jE',
    authDomain: 'dev-taskuniue.firebaseapp.com',
    databaseURL: 'https://dev-taskuniue.firebaseio.com',
    projectId: 'dev-taskuniue',
    storageBucket: 'dev-taskuniue.appspot.com',
    messagingSenderId: '314513974984',
    appId: '1:314513974984:web:9e89b2a77e5d60d1e4a7fd'
  };
} else {
  firebaseConfig = {
    apiKey: 'AIzaSyAIYam6aMmQZxnFEbN_isBWXyjfyuKKItM',
    authDomain: 'taskuniue.firebaseapp.com',
    databaseURL: 'https://taskuniue.firebaseio.com',
    projectId: 'taskuniue',
    storageBucket: 'taskuniue.appspot.com',
    messagingSenderId: '102374005186',
    appId: '1:102374005186:web:7ea5fe166948d59f7f5e5b'
  };
}

export default firebaseConfig;
