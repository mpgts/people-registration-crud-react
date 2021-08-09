import firebase from 'firebase/app'
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBwTfhotAjCrej1iZiql3yLm6hVAeSj_lc",
  authDomain: "fb-crud-react-e10f2.firebaseapp.com",
  projectId: "fb-crud-react-e10f2",
  storageBucket: "fb-crud-react-e10f2.appspot.com",
  messagingSenderId: "165748611836",
  appId: "1:165748611836:web:4b484b70f34c5315419579"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();