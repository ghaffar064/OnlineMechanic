// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from  'firebase/auth'

import 'firebase/auth'
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADrTwf_SDTpw6RROq1hSpbGxIr0qJw6Ao",
  authDomain: "online-mechanic-388611.firebaseapp.com",
  databaseURL: "https://online-mechanic-388611-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "online-mechanic-388611",
  storageBucket: "online-mechanic-388611.appspot.com",
  messagingSenderId: "419811276218",
  appId: "1:419811276218:web:9b362ab6ca5e9aae7bd983",
  measurementId: "G-XX6ZMQZC4K",
  databaseURL:"https://online-mechanic-388611-default-rtdb.asia-southeast1.firebasedatabase.app/"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
//const provider = new GoogleAuthProvider();
export {app,auth};