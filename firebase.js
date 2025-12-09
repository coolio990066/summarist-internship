// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword,
  signInAnonymously,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1TdfnS27S7wRw02uABfJqbkpSTgUbR60",
  authDomain: "summarist-internship-ef76f.firebaseapp.com",
  projectId: "summarist-internship-ef76f",
  storageBucket: "summarist-internship-ef76f.firebasestorage.app",
  messagingSenderId: "1023001357658",
  appId: "1:1023001357658:web:7bbb3b12ee8b88e6651763"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Export authentication functions
export {
  signInWithPopup,
  signInWithEmailAndPassword,
  signInAnonymously,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
};
