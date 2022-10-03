import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCKuksr2Zum446E6639BhxBL3PXUfkm5ug",
    authDomain: "disney-finale-36958.firebaseapp.com",
    projectId: "disney-finale-36958",
    storageBucket: "disney-finale-36958.appspot.com",
    messagingSenderId: "457531707928",
    appId: "1:457531707928:web:b9cc56dff9222eb6b8296d"
  };

  const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();
  
    const db = app.firestore();

    export { db };