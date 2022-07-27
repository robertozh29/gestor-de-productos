// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMk0NCzL5FUy5IQDrMBtTiukC-I4uIot0",
  authDomain: "tu-gestor-de-productos.firebaseapp.com",
  projectId: "tu-gestor-de-productos",
  storageBucket: "tu-gestor-de-productos.appspot.com",
  messagingSenderId: "956723233959",
  appId: "1:956723233959:web:6de36feba143bd81b2c782",
  measurementId: "G-WZCV7DC2EN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);