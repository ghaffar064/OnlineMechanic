// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from  'firebase/auth'
import firebase from 'firebase/app';
import { getStorage } from "firebase/storage";


//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuJQ0t9RD3wj6U1vhmItxBzMJcWsDKeWk",
  authDomain: "onlinemechanic-mechanic-data.firebaseapp.com",
  databaseURL: "https://onlinemechanic-mechanic-data-default-rtdb.firebaseio.com",
  projectId: "onlinemechanic-mechanic-data",
  storageBucket: "onlinemechanic-mechanic-data.appspot.com",
  messagingSenderId: "563169692333",
  appId: "1:563169692333:web:d39e6e68c9ef53f411d424",
  measurementId: "G-8HNQ2E2VVZ",
 
  databaseURL:"https://onlinemechanic-mechanic-data-default-rtdb.firebaseio.com/"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
//const provider = new GoogleAuthProvider();
export {app,auth,storage};
