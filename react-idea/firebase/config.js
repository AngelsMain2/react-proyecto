import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBiOkbkTWHjdwoQFwgZUfR3wUPafu112h8",
  authDomain: "miappexpo.firebaseapp.com",
  projectId: "miappexpo",
  storageBucket: "miappexpo.appspot.com",
  messagingSenderId: "816539701669",
  appId: "1:816539701669:web:8530cc8d1927bc2c08d84c"
};

const app = initializeApp(firebaseConfig);

// Inicializar Firebase Auth con AsyncStorage para la persistencia
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };