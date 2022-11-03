// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJDg4mTQ1AQMOeIr3FwQH0OHMGLTSiCtk",
  authDomain: "journalapp-redux-course.firebaseapp.com",
  projectId: "journalapp-redux-course",
  storageBucket: "journalapp-redux-course.appspot.com",
  messagingSenderId: "282881586809",
  appId: "1:282881586809:web:47617a94f5f5c758eec6a8",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
