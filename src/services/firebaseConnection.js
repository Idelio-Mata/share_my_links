// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP5tqnz7ZG59ah5no7VZPV5tDtlR3VE3Y",
  authDomain: "mylinksshare.firebaseapp.com",
  projectId: "mylinksshare",
  storageBucket: "mylinksshare.appspot.com",
  messagingSenderId: "1008772833975",
  appId: "1:1008772833975:web:c71c3f4e9dbd61508da332",
  measurementId: "G-LS806P7RD2"
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);


// Export configurations to use when needed
export { db, auth};


