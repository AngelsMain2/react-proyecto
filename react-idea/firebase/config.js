// firebase/config.ts


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiOkbkTWHjdwoQFwgZUfR3wUPafu112h8",
  authDomain: "miappexpo.firebaseapp.com",
  projectId: "miappexpo",
  storageBucket: "miappexpo.appspot.com",
  messagingSenderId: "816539701669",
  appId: "1:816539701669:web:8530cc8d1927bc2c08d84c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Inicializar Firebase Authentication
const auth = getAuth(app);

export { auth };
