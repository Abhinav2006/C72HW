import firebase from 'firebase';
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyCQ9ozTjRxLVOKMZCp_a8PEznNZHeZiOlA",
    authDomain: "stories-5be56.firebaseapp.com",
    projectId: "stories-5be56",
    storageBucket: "stories-5be56.appspot.com",
    messagingSenderId: "471338527356",
    appId: "1:471338527356:web:007b8246bff6fb317bb7f9"
  };

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();