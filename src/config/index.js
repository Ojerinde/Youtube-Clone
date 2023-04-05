// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCAcOke7K97USXQHDuxA_60VQ49vaKeCA",
  authDomain: "clone-d3652.firebaseapp.com",
  projectId: "clone-d3652",
  storageBucket: "clone-d3652.appspot.com",
  messagingSenderId: "928589451551",
  appId: "1:928589451551:web:987d075e099dc7890be02a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth, signOut, onAuthStateChanged };
